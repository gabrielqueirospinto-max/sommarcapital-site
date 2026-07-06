# GHL 10 — Operação Diária: Como Usar o GHL no Dia a Dia

**Objetivo:** a rotina de cada papel dentro da ferramenta. Implantação pronta não vende nada — é o uso disciplinado que vende. Este módulo é o manual de bordo; imprima mentalmente.

## A manhã do SDR (primeiro bloco do dia, ~1h)

1. **Conversations** (web ou app LeadConnector): responda TODA conversa não lida, começando pelas mais antigas dentro do SLA. Conversa onde o bot atuou de madrugada: leia o histórico antes de assumir — nunca faça o lead repetir o que já disse.
2. **Smart List `Fila SDR — novos`** ([módulo 04](04-crm-pipeline.md)): trabalhe por ordem de lead score, não de chegada. Para cada lead: aplicar o script de primeira resposta/qualificação ([playbook doc 05](../05-scripts.md)), preencher os campos BANT na oportunidade, mover a etapa.
3. **Smart List `Follow-ups de hoje`**: execute as tarefas do dia (ligações D3 da cadência, retornos combinados). Tarefa executada = tarefa concluída no GHL **+ anotação de 2 linhas** no contato.
4. Ao qualificar: agendar direto pelo **link do calendário do Closer** dentro da conversa; a oportunidade vai para `3. Qualificado`.

**Regras permanentes do SDR:** lead atendido → etapa atualizada NA HORA (não "depois eu arrumo"); toda conversa termina com próximo passo agendado (tarefa ou reunião); esfriou → tag `esfriou` e deixa a cadência trabalhar.

## O dia do Closer

1. Manhã: **Calendars → Appointments** — revisar as calls do dia; abrir a oportunidade de cada uma e reler as anotações do SDR + resposta da pergunta de qualificação (nunca entrar "cru" na call).
2. Após CADA call (o buffer de 15 min existe pra isso): atualizar etapa (`4. Simulação enviada` / `5. Negociação`), anotar objeções nas palavras do cliente, criar a tarefa do próximo passo com data.
3. Fechou → mover para `6. Fechado — em faturamento` (o W7 dispara o onboarding sozinho) e conduzir a documentação com a Magalu.
4. Fim do dia: varrer **Opportunities → filtro "minhas" etapas 4–5** — alguma sem tarefa futura? Corrigir antes de sair.

## A semana do gestor

- **Daily (15 min):** dashboard (leads novos, tarefas vencidas) + destravar o que o time trouxer.
- **Sexta (45 min, revisão de pipeline):** com o time, na tela de Opportunities: o que avançou, o que está parado > 7 dias (cobrar próxima ação), motivos de perda da semana (padrão? → ação no script/cadência), metas vs. realizado do [dashboard](09-dashboard.md).
- **Quinzenal:** revisão das conversas do bot ([módulo 07](07-conversation-ai.md), passo 4) + roleplay de 1 objeção.
- **Mensal:** fechamento de KPIs + custo por lead por canal + decisão de investimento ([playbook doc 08](../08-metricas-e-metas.md)).

## App mobile (LeadConnector) — o plantão

- Uso principal: **responder lead novo fora da mesa** (push de Conversations) e consultar contato antes de retornar ligação.
- O que NÃO fazer no celular: mexer em workflow, editar pipeline, importar contatos — mudanças estruturais só no desktop, com calma.
- Fora do horário comercial, o plantão é do bot (W1/W2) — o push pode esperar o dia seguinte. Não treine lead a receber resposta humana às 23h.

## Os 8 erros de operação mais comuns (e como não cometê-los)

| Erro | Antídoto |
|---|---|
| Atender no WhatsApp pessoal "só dessa vez" | Não existe. Conversa fora do GHL não aconteceu (regra de ouro nº 2) |
| Etapa desatualizada ("depois eu movo") | Etapa se move na hora do evento; pipeline mentiroso = gestão cega |
| Oportunidade sem tarefa futura | Toda conversa termina com próximo passo criado |
| Desligar a cadência na mão para "não incomodar" | A cadência já é educada e para sozinha no reply; confie no processo |
| Responder lead novo horas depois porque "estava em call" | Push do app + bot cobrindo; SLA é sagrado |
| Criar tag/campo novo por conveniência | Só com registro no playbook; estrutura paralela mata os relatórios |
| Mexer em workflow ativo em produção | Duplicar → editar a cópia em draft → testar → trocar |
| Marcar Perdido sem motivo | Motivo é obrigatório — é o insumo da melhoria contínua |

## Solução de problemas rápida

- **Mensagem de WhatsApp não chega ao cliente:** confira status do template (aprovado?) e a janela de 24h ([módulo 03](03-whatsapp.md)); fora da janela, só template.
- **Workflow não disparou:** abra o workflow → Enrollment History → veja se o contato entrou e onde parou (filtros do trigger são a causa nº 1).
- **Lembrete não foi:** o agendamento foi feito no calendário certo? (W5 filtra por calendário).
- **E-mail caiu em spam:** reverifique SPF/DKIM ([módulo 02](02-fundacao-tecnica.md)) e o volume recente.
- **Bot respondendo errado:** corrija a base de conhecimento, não o prompt inteiro; teste em Suggestive antes de voltar ao Auto-pilot.
- Não resolveu: busca no [help.gohighlevel.com](https://help.gohighlevel.com) + chat de suporte 24/7 no canto inferior do GHL.

## ✅ Teste de validação do módulo (após 1 semana de operação)

- [ ] Zero conversas não respondidas > 30 min (horário comercial) na semana.
- [ ] Zero oportunidades ativas sem tarefa futura na revisão de sexta.
- [ ] 100% das perdas da semana com motivo preenchido.
- [ ] Time inteiro consegue apontar no dashboard "onde estamos vs. meta".

---

**Fim do tutorial.** Sistema no ar = voltar ao [playbook](../README.md) e operar: o GHL é o motor, mas o processo comercial (docs 01–10) é quem dirige. Revisite o [roteiro](00-roteiro-de-implantacao.md) a cada trimestre para o que ficou pendente (Voice AI, integração dos formulários do site → [playbook doc 09](../09-setup-gohighlevel.md)).
