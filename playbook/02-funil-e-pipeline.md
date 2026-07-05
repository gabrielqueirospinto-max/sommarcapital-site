# 02 — Funil e Pipeline no GoHighLevel

Pipeline único no GHL chamado **"Comercial Sommar"**. Todo lead de qualquer canal entra aqui. As oportunidades nunca são apagadas: ganham etapa "Perdido" com motivo.

## Etapas do pipeline

| # | Etapa | O que significa | Critério para AVANÇAR | Dono |
|---|---|---|---|---|
| 1 | **Novo lead** | Entrou por qualquer canal, ainda sem resposta humana | Primeira resposta enviada | SDR |
| 2 | **Primeiro contato** | Conversa iniciada, ainda sem qualificação | BANT preenchido no GHL (4 campos) | SDR |
| 3 | **Qualificado** | Tem perfil: orçamento, decisor, necessidade e prazo claros | Reunião/call agendada com Closer OU simulação solicitada | SDR |
| 4 | **Simulação enviada** | Closer apresentou proposta/simulação | Cliente sinalizou interesse em avançar ou trouxe objeção concreta | Closer |
| 5 | **Negociação** | Contorno de objeções, ajuste de plano/parcela, decisor envolvido | Aceite verbal ("bora fechar") | Closer |
| 6 | **Fechado — em faturamento** | Documentação e adesão em andamento na Magalu | Contrato faturado e 1ª parcela confirmada | Closer |
| 7 | **Cliente ativo (pós-venda)** | Contrato ativo; entra no fluxo do doc 07 | — (fica aqui durante a vida do contrato) | Gestor |
| ✗ | **Perdido** | Desistiu, sem perfil ou sumiu após cadência completa | — motivo obrigatório (lista abaixo) | Quem perdeu |

### Motivos de perda (lista fechada — escolher 1)

`Sem orçamento` · `Preferiu financiamento` · `Preferiu concorrente` · `Sem urgência / vai esperar` · `Não era decisor` · `Sumiu (cadência completa sem resposta)` · `Sem perfil (curioso/emprego/outro)` · `Cancelou no faturamento`

> Motivo de perda é insumo da revisão semanal: 3 perdas seguidas por "preferiu financiamento" = problema de script, não de lead.

## SLAs de resposta

| Situação | SLA | Como cumprir |
|---|---|---|
| Lead novo (qualquer canal) | **< 5 min** resposta automática | Chatbot IA do GHL responde, coleta interesse e avisa o SDR |
| Primeira resposta humana | **< 30 min** em horário comercial | Notificação push do GHL para o SDR |
| Lead fora do horário | Chatbot acolhe + primeira resposta humana até 9h do dia seguinte | Workflow "fora de horário" |
| Mensagem de lead em negociação | **< 2 h** | Tarefa automática para o Closer |

Lead respondido em 5 minutos converte várias vezes mais do que respondido em horas. O SLA de 5 min é do robô; o de 30 min é nosso.

## Campos obrigatórios no GHL (por oportunidade)

| Campo | Tipo | Preenchido em | Valores |
|---|---|---|---|
| `Origem` | dropdown | Entrada (automático quando possível) | Site — Simulação / Site — WhatsApp / Instagram / Indicação / Outbound / Reativação |
| `Produto` | dropdown | Etapa 2 | Imóveis / Automóveis / Investimento / Capital de Giro / Carta Contemplada |
| `Faixa de crédito` | dropdown | Etapa 2 | Até 100K / 100–300K / 300–800K / 800K+ (espelha o formulário do site) |
| `Parcela confortável` | moeda | Etapa 2–3 | valor mensal declarado |
| `Decisor` | dropdown | Etapa 3 | Sozinho / Com cônjuge / Com sócio |
| `Prazo do objetivo` | dropdown | Etapa 3 | Imediato (0–3m) / Curto (3–12m) / Flexível (12m+) |
| `Motivo de perda` | dropdown | Perdido | lista fechada acima |

O formulário de simulação do site já entrega `Produto` e `Faixa de crédito` na mensagem de WhatsApp ("Interesse: Imóvel — R$ 300K a R$ 800K") — o SDR só transcreve.

## Regras de higiene do pipeline

1. **Nada parado > 7 dias sem tarefa futura.** Toda oportunidade tem próxima ação agendada (follow-up, call, cobrança de documento). Sem próxima ação = revisar na sexta.
2. **Cadência completa sem resposta → Perdido** (motivo "Sumiu"), com tag `reativação` para o fluxo trimestral do doc 06. Perder organizado é melhor que funil inchado.
3. **Uma oportunidade por objetivo.** Cliente que quer imóvel E capital de giro = 2 oportunidades separadas (métricas e cadências diferentes).
4. **Anotação após todo contato.** Duas linhas bastam: o que foi falado, próximo passo.
