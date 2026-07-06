# GHL 06 — Workflows: Construindo as 7 Automações

**Objetivo:** os 7 workflows do [playbook doc 06](../06-cadencias-e-automacoes.md) construídos e testados.
**Pré-requisitos:** módulos 03 (WhatsApp com templates aprovados), 04 (pipeline/campos/tags) e 05 (calendário).
**Tempo estimado:** 4h, distribuídas nas semanas 3–4 do [roteiro](00-roteiro-de-implantacao.md).

**Regra de construção:** um workflow simples e confiável vale mais que uma árvore gigante quebrada. Construa na ordem abaixo (impacto), teste cada um com contato fictício, e **só então** ative o próximo. Todo workflow começa em modo **Draft**; ative depois do teste.

Caminho base para todos: **Automation → Workflows → + Create Workflow → Start from Scratch**.

## Anatomia de um workflow (5 minutos de teoria)

- **Trigger:** o evento que inicia (ex.: "Customer Replied", "Pipeline Stage Changed", "Contact Tag Added"). Um workflow pode ter vários triggers; filtre-os (pipeline, etapa, tag) para não disparar à toa.
- **Actions:** o que acontece — enviar mensagem, criar tarefa, esperar (Wait), condicionar (If/Else), atualizar oportunidade, notificação interna.
- **Regra de ouro Sommar em TODO workflow de mensagens:** primeira ação = **If/Else: tag `opt-out` existe? → End**. Sem exceção.
- **Saída por resposta:** em cadências, marque "Stop on reply"/adicione trigger de saída quando o cliente responder — automação para, humano assume.

## W3 — SLA estourado (construir primeiro: protege o ativo mais caro, o lead novo)

1. **Trigger:** `Pipeline Stage Changed` → filtro: Pipeline = Comercial Sommar, Stage = `1. Novo lead`.
2. **Actions:**
   - `Wait` 30 min **com condição de saída**: se etapa mudou ou houve resposta humana, encerrar.
   - `If/Else`: oportunidade ainda em `1. Novo lead`?
     - Sim → `Internal Notification` (push + e-mail) para o SDR: *"⚠️ Lead {{contact.name}} há 30 min sem resposta"*.
     - `Wait` mais 90 min → se ainda parado → notificação para o admin (Gabriel).

## W5 — Lembrete de reunião (anti no-show)

1. **Trigger:** `Customer Booked Appointment` → filtro: calendário = Reunião de Simulação.
2. **Actions:**
   - Imediato: WhatsApp de confirmação com data/hora e link Meet.
   - `Wait` até 24h antes do evento → template `sommar_lembrete_reuniao` pedindo confirmação ("Confirma? 👍").
   - `Wait` até 1h antes → WhatsApp curto: *"Nos vemos às {{appointment.start_time}}! Link: ..."*.
   - Trigger adicional `Appointment Status = No-show` → criar `Task` para o SDR "Reagendar hoje" + tag `esfriou`.

## W1 — Entrada e triagem de lead novo (versão sem IA; a IA entra no módulo 07)

1. **Triggers:** `Customer Replied` (canal: WhatsApp/Instagram/SMS) **com filtro "primeira conversa"** — e/ou `Contact Created`.
2. **Actions:**
   - If/Else `opt-out` → End.
   - If/Else: já existe oportunidade aberta? (usar condição sobre pipeline) → se sim, End (não duplicar).
   - `Create Opportunity`: pipeline Comercial Sommar, etapa `1. Novo lead`, nome `{{contact.name}} — (preencher produto)`.
   - Fora do horário comercial (If/Else por hora): resposta automática de acolhimento *"Recebemos sua mensagem! Nosso time responde a partir das 8h30 🙂"* + `Task` para o SDR às 8h30 (isso já cobre o **W2 — fora de horário**, como ramo deste workflow).
   - `Internal Notification` para o SDR.

## W4 — Cadência de follow-up D0–D30

1. **Trigger:** `Contact Tag Added` = `esfriou`.
2. **Actions** (usar os textos do [playbook doc 06](../06-cadencias-e-automacoes.md); mensagens fora da janela de 24h usam os templates aprovados do [módulo 03](03-whatsapp.md)):
   - If/Else `opt-out` → End.
   - D0: WhatsApp resumo. → `Wait` 1 dia.
   - D1: template `sommar_followup_d1` (comparativo). → `Wait` 2 dias.
   - D3: `Task` para SDR: "Ligar para {{contact.name}}". → `Wait` 4 dias.
   - D7: template `sommar_followup_d7` (prova social). → `Wait` 7 dias.
   - D14: WhatsApp escassez honesta. → `Wait` 16 dias.
   - D30: template `sommar_breakup_d30` → `Update Opportunity`: etapa `8. Perdido`, e `Update Contact Field`/tag: remover `esfriou`, adicionar `reativação`. Criar `Task` para registrar `Motivo de perda = Sumiu`.
   - **Configuração crítica:** ativar parada por resposta — qualquer reply do cliente tira da cadência e notifica o SDR.

## W7 — Pós-fechamento (onboarding)

1. **Trigger:** `Pipeline Stage Changed` → Stage = `6. Fechado — em faturamento`.
2. **Actions** (cria o checklist do [playbook doc 07](../07-pos-venda.md) como tarefas):
   - WhatsApp imediato de boas-vindas.
   - `Task` (Closer): "Call de boas-vindas — D+2".
   - `Task` (pós-venda): "Checar acesso/boleto Magalu — D+7".
   - `Wait` 30 dias → WhatsApp pesquisa de satisfação 0–10.
   - Trigger adicional: Stage = `7. Cliente ativo` → `Wait` 90 dias → `Task` "Check-in trimestral".

## W6 — Reativação trimestral

1. **Trigger:** `Contact Tag Added` = `reativação` (e re-entrada a cada 90 dias — configure permissão de reentrada no workflow settings, máx. 2 ciclos).
2. **Actions:** If/Else `opt-out` → End · template `sommar_reativacao_90d` · se responder → `Create Opportunity` em `2. Primeiro contato` (Origem = Reativação) + notificação ao SDR.

## Testar antes de ativar (procedimento padrão)

1. Crie o contato **"Zé Teste"** com o SEU número de celular.
2. Workflow em Draft → use o **Test/Enroll** com o Zé Teste, ou simule o trigger real (mande mensagem, mova a etapa, aplique a tag).
3. Confira: mensagens chegam no seu celular? Tarefas aparecem? Tempos de Wait certos? (Para testar Waits longos, reduza temporariamente para minutos e restaure depois.)
4. Tudo OK → **Publish**. Registre a data de ativação. Delete o Zé Teste das estatísticas se necessário (Workflow → Enrollment History → remover).

## ✅ Teste de validação do módulo

- [ ] Os 7 fluxos publicados (W2 vive como ramo do W1).
- [ ] Lead-teste que fica parado em "Novo lead" gera push em 30 min (W3).
- [ ] Agendamento-teste dispara confirmação + lembretes (W5).
- [ ] Tag `esfriou` inicia a cadência e um reply a interrompe (W4).
- [ ] Mover para "Fechado" cria as tarefas de onboarding (W7).
- [ ] Contato com `opt-out` não recebe NADA de nenhum workflow.

**Próximo módulo:** [07 — Conversation AI](07-conversation-ai.md).

## Fontes

- [Getting Started with Workflows — portal oficial](https://help.gohighlevel.com/support/solutions/articles/155000002288-getting-started-with-workflows) · [Lista de triggers](https://help.gohighlevel.com/support/solutions/articles/155000002292-a-list-of-workflow-triggers) · [Trigger: Pipeline Stage Changed](https://help.gohighlevel.com/support/solutions/articles/155000002493-workflow-trigger-pipeline-stage-changed) · [Action: Create/Update Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000002476-workflow-action-create-update-opportunity) · [Automating Opportunities](https://help.gohighlevel.com/support/solutions/articles/155000002048-automating-opportunities)
