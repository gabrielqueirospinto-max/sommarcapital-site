# 06 — Cadências de Follow-up e Automações no GHL

A maioria das vendas de consórcio não acontece no primeiro contato — acontece no follow-up. A regra da casa: **nenhum lead sai do funil sem cadência completa**, e nenhum follow-up depende de memória: tudo é workflow ou tarefa no GHL.

## Cadência padrão — lead qualificado que esfriou

Aplicada quando o lead parou de responder após qualificação ou simulação. Alternar canal e **sempre entregar algo** (informação, número, história) — follow-up que só cobra ("e aí, pensou?") queima o lead.

| Dia | Canal | Mensagem (essência) |
|---|---|---|
| **D0** | WhatsApp | Resumo do que foi conversado + próximo passo combinado |
| **D1** | WhatsApp | Material de apoio: comparativo consórcio × financiamento do valor dele |
| **D3** | Ligação | "Ficou alguma dúvida da simulação? 2 minutos." (se não atender: áudio curto) |
| **D7** | WhatsApp | Prova social: "essa semana saiu contemplação de um cliente com plano igual ao seu" |
| **D14** | WhatsApp | Escassez honesta (se real): reajuste de tabela, grupo fechando |
| **D30** | WhatsApp | **Break-up:** "Não quero te encher — vou pausar por aqui. Se [objetivo] voltar à mesa, me chama que retomo sua simulação. Combinado?" |

Após D30 sem resposta → **Perdido ("Sumiu")** + tag `reativação`.

### Templates prontos

**D1 — valor:**
> Oi [nome]! Montei aquele comparativo que comentei: no seu valor de R$ [X], o financiamento custaria ~R$ [Y] só de juros. No consórcio, o custo total fica R$ [Z]. Dá uma olhada 👇 [imagem/pdf]. Faz sentido pra você?

**D7 — prova social:**
> [Nome], lembrei de você: ontem saiu contemplação de um cliente nosso com plano bem parecido com o que desenhamos pra ti ([produto], parcela na mesma faixa). Se quiser, te conto a estratégia de lance que ele usou.

**D30 — break-up:**
> Oi [nome]! Não quero ser insistente, então vou pausar meus contatos por aqui 🙂 Sua simulação fica guardada — quando [objetivo] voltar à pauta, é só me chamar que retomo de onde paramos. Sucesso por aí!

## Cadência de reativação (trimestral, automática)

Para toda a base com tag `reativação` — workflow dispara a cada 90 dias, máximo 2 ciclos por lead:

> Oi [nome], aqui é da Sommar Capital. Faz um tempo que conversamos sobre [produto]. Duas novidades desde então: [novidade real — nova tabela, resultado de assembleias, história de contemplação]. Seu plano de [objetivo] ainda está de pé?

Respondeu → volta ao pipeline em "Primeiro contato" (Origem = `Reativação`), notifica SDR.

## Workflows no GHL (visão de configuração)

Detalhe de setup no [doc 09](09-setup-gohighlevel.md). Os 7 workflows essenciais:

| # | Workflow | Gatilho | Ação |
|---|---|---|---|
| 1 | **Triagem IA** | Nova conversa (WhatsApp/Instagram/site) | Chatbot IA responde < 5 min, coleta produto + objetivo + prazo, cria oportunidade em "Novo lead", notifica SDR |
| 2 | **Fora de horário** | Conversa fora do comercial | IA acolhe e informa horário; tarefa para SDR às 8h30 do dia seguinte |
| 3 | **SLA estourado** | Oportunidade em "Novo lead" > 30 min sem resposta humana | Push para SDR; > 2h → push para gestor |
| 4 | **Cadência follow-up** | Oportunidade marcada com tag `esfriou` | Sequência D0–D30 acima (mensagens automáticas + tarefas de ligação) |
| 5 | **Lembrete de reunião** | Agendamento criado no calendário | Confirmação na hora + lembrete 24h e 1h antes (reduz no-show) |
| 6 | **Reativação trimestral** | Tag `reativação` + 90 dias | Mensagem de reativação; resposta → notifica SDR |
| 7 | **Pós-fechamento** | Oportunidade movida para "Fechado" | Dispara checklist de onboarding do [doc 07](07-pos-venda.md) |

## Papel da IA (chatbot e voice)

- **Chatbot IA = triagem e agendamento, nunca fechamento.** Ele responde perguntas básicas (o que é consórcio, como funciona a Sommar), coleta os dados iniciais e agenda com humano. Configurar para **transferir ao SDR** assim que o lead demonstrar interesse real ou fizer pergunta de valor/negociação — cliente de ticket alto percebe (e detesta) robô insistente.
- **Voice AI = reativação de base fria e confirmação de agenda.** Roteiro curto (< 60s), sempre se identificando como assistente virtual da Sommar, com transferência para humano em um toque.
- **Nutrição por e-mail** (secundário ao WhatsApp): newsletter mensal para toda a base — 1 conteúdo do blog + 1 resultado de assembleia + CTA de simulação.

## Regras anti-spam

1. Máximo **1 mensagem de cadência por dia** por lead; se o lead responder, a cadência automática **pausa** e o humano assume.
2. Break-up é sagrado: depois do D30, só a reativação trimestral (máx. 2 ciclos) toca o lead.
3. Pedido de "não me chame mais" → tag `opt-out`, remove de TODAS as automações. Sem exceção.
