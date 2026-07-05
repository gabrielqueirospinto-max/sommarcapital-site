# 09 — Setup do GoHighLevel

Checklist de configuração da conta GHL da Sommar, na ordem de implantação. Marque conforme concluir. Objetivo: sair do "tudo no WhatsApp pessoal" para operação rastreada de ponta a ponta.

## Fase 1 — Fundação (semana 1)

- [ ] **Conta e subconta** configuradas, fuso `America/Fortaleza`, time com acesso (SDR, Closer, gestor — permissões por papel).
- [ ] **WhatsApp conectado** (número comercial 83 99902-5887 via integração oficial do GHL). Toda a caixa de entrada unificada (WhatsApp + Instagram DM + e-mail) na Conversations do GHL.
- [ ] **Instagram @sommarcapital conectado** (DMs entram na mesma caixa).
- [ ] **Pipeline "Comercial Sommar"** criado com as 8 etapas do [doc 02](02-funil-e-pipeline.md): Novo lead → Primeiro contato → Qualificado → Simulação enviada → Negociação → Fechado — em faturamento → Cliente ativo → Perdido.
- [ ] **Campos customizados** (contato/oportunidade), conforme doc 02:
  - `Origem` (dropdown): Site — Simulação / Site — WhatsApp / Instagram / Indicação / Outbound / Reativação
  - `Produto` (dropdown): Imóveis / Automóveis / Investimento / Capital de Giro / Carta Contemplada
  - `Faixa de crédito` (dropdown): Até 100K / 100–300K / 300–800K / 800K+
  - `Parcela confortável` (moeda) · `Decisor` (dropdown) · `Prazo do objetivo` (dropdown) · `Motivo de perda` (dropdown, lista fechada do doc 02)
- [ ] **Tags básicas:** `esfriou`, `reativação`, `outbound-frio`, `opt-out`, `indicou-alguem`, `contemplado`.
- [ ] **Calendário do Closer** publicado (slots de 30 min, buffer de 15 min, horário comercial) — link usado pelo SDR e pelo chatbot para agendar.

## Fase 2 — Automações essenciais (semanas 2–3)

Implementar os 7 workflows do [doc 06](06-cadencias-e-automacoes.md), nesta ordem de impacto:

- [ ] **W1 — Triagem IA:** Conversation AI ativa nos canais; prompt com contexto da Sommar (produtos, tom consultivo, NUNCA prometer contemplação garantida); coleta produto/objetivo/prazo; cria oportunidade em "Novo lead"; notifica SDR. Configurar **handoff para humano** quando o lead perguntar valores finais, negociar ou pedir atendente.
- [ ] **W3 — SLA estourado:** notificação push (30 min sem resposta humana) + escalada ao gestor (2h).
- [ ] **W5 — Lembrete de reunião:** confirmação + lembretes 24h/1h antes do agendamento.
- [ ] **W4 — Cadência follow-up** (tag `esfriou`): sequência D0–D30 com os templates do doc 06 (mensagens automáticas + tarefas de ligação nos dias D3).
- [ ] **W2 — Fora de horário** e **W7 — Pós-fechamento** (dispara checklist de onboarding do [doc 07](07-pos-venda.md) como tarefas).
- [ ] **Lead scoring** conforme [doc 04](04-qualificacao.md) (pontuação por origem, faixa, prazo e engajamento).

## Fase 3 — Escala e inteligência (mês 2+)

- [ ] **W6 — Reativação trimestral** (tag `reativação`, ciclo de 90 dias, máx. 2 ciclos).
- [ ] **Voice AI:** roteiro de reativação de base fria (< 60s, identifica-se como assistente virtual, transfere interessado ao SDR) e confirmação de agendamentos por ligação.
- [ ] **E-mail marketing:** template de newsletter mensal (1 artigo do blog + 1 resultado de assembleia + CTA simulação) para toda a base opt-in.
- [ ] **Dashboard** com os KPIs do [doc 08](08-metricas-e-metas.md): leads por origem, conversão por etapa, tempo de 1ª resposta, ciclo, motivos de perda.
- [ ] **Importar base histórica** (contatos do WhatsApp/planilhas antigas) com tag `reativação` — vira pipeline imediato para o W6.

## Recomendação: integrar os formulários do site (próximo passo, fora deste escopo)

Hoje os dois formulários do site apenas **abrem o WhatsApp** com mensagem pré-preenchida — o lead só entra no GHL se de fato enviar a mensagem. Quem preenche o formulário e desiste de enviar é **lead perdido sem registro**.

Melhoria futura no site: antes do redirect ao `wa.me`, enviar os dados do formulário (nome, telefone, produto, faixa) para o GHL via **webhook/form do GHL**. Ganhos: nenhum lead perdido, `Origem` e campos preenchidos automaticamente, cadência dispara mesmo se o lead não mandar a mensagem no WhatsApp. É alteração pequena no `js/main.js` do site — planejar como tarefa separada quando a conta GHL estiver ativa.

## Cuidados

- **LGPD/opt-out:** honrar `opt-out` em todas as automações; base importada só recebe mensagem se houve relacionamento prévio.
- **IA com limites:** o chatbot nunca informa taxa/condição específica sem validação humana e nunca promete contemplação — isso é risco regulatório e de reputação.
- **Número oficial:** toda a operação no número comercial conectado ao GHL; conversa em número pessoal não existe para o sistema (regra de ouro nº 2 do doc 01).
