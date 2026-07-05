# 08 — Métricas e Metas

O que não é medido não é gerenciado. Este doc define **o que** medimos, **quanto** esperamos e **quando** olhamos. Fonte única: dashboard do GHL (setup no [doc 09](09-setup-gohighlevel.md)) — nada de planilha paralela.

## KPIs do funil (medidos por semana)

| KPI | Definição | Referência inicial* |
|---|---|---|
| **Leads novos/semana** | Oportunidades criadas no pipeline | 15–25 (com site + Instagram orgânico) |
| **Tempo de 1ª resposta humana** | Mediana, em horário comercial | < 30 min |
| **Taxa de qualificação** | Qualificados ÷ leads novos | 30–40% |
| **Agendamentos/semana** | Calls marcadas com o Closer | 5–8 |
| **Taxa de comparecimento** | Calls realizadas ÷ marcadas | > 70% (lembretes do doc 06) |
| **Taxa de fechamento** | Fechados ÷ simulações apresentadas | 15–25% |
| **Ciclo de venda** | Dias entre "Novo lead" e "Fechado" | 7–21 dias |
| **Ticket médio** | Valor de crédito médio dos contratos | acompanhar tendência (puxar para cima — doc 10) |
| **Taxa de cancelamento (90 dias)** | Cancelados ÷ faturados no trimestre | < 10% — acima disso, o problema é venda mal qualificada |
| **Indicações/mês** | Leads com Origem = Indicação | ≥ 2 |

*\*Referências para calibrar as primeiras 8 semanas. Depois disso, a meta é o **nosso próprio histórico + 10%** — benchmarking real se faz contra os próprios números, olhando concorrente como inspiração, não como régua.*

## Metas por papel

| Papel | Meta semanal | Meta mensal |
|---|---|---|
| **SDR** | 100% dos leads novos respondidos dentro do SLA; 5–8 agendamentos; 10 contas outbound trabalhadas | Taxa de qualificação ≥ 30% |
| **Closer** | 100% das calls com follow-up registrado em 24h | 4–6 fechamentos; taxa de fechamento ≥ 15% |
| **Gestor/Pós-venda** | Revisão de pipeline feita (sexta); riscos de cancelamento tratados em 24h | Cancelamento < 10%; ≥ 2 indicações geradas |

> Meta boa é a que a pessoa **controla**: SDR não controla fechamento, então não é cobrado por ele; Closer não controla volume de lead. Cada um é dono do seu trecho do funil.

## A conta da previsibilidade

Com as taxas acima, o funil vira aritmética — e a aritmética vira planejamento:

```
20 leads/semana × 35% qualificação = 7 qualificados
7 qualificados × 80% agendam       = 5–6 calls
5–6 calls × 70% comparecem         = 4 simulações
4 simulações × 20% fechamento      = ~1 contrato/semana → 4/mês
```

Quer 8 contratos/mês? Duas alavancas: **dobrar leads** (verba de mídia, outbound — doc 03) ou **subir uma taxa de conversão** (script, cadência, qualificação). A revisão semanal decide qual alavanca puxar: sempre a etapa com a maior queda vs. referência.

## Rotina de gestão

| Ritual | Olhamos | Decisão típica |
|---|---|---|
| **Daily (15 min)** | Leads de ontem, SLA, agenda do dia | Redistribuir fila, destravar lead específico |
| **Revisão semanal (sexta, 45 min)** | Funil completo, motivos de perda, metas vs. realizado | Qual etapa atacar na semana seguinte; atualizar script se um motivo de perda se repete |
| **Fechamento mensal (1ª segunda)** | KPIs do mês, cancelamento, custo por lead por canal, ticket médio | Realocar esforço entre canais; revisar metas; decidir investimento em mídia |
| **Trimestral** | Tendências, base de reativação, benchmarking de mercado | Ajustes estruturais (contratação — doc 10; novos canais) |

## Motivos de perda como bússola

A tabela de motivos ([doc 02](02-funil-e-pipeline.md)) é o diagnóstico mais barato que temos:

| Motivo dominante no mês | Provável causa | Ação |
|---|---|---|
| "Sumiu" | Cadência fraca ou lead frio demais | Revisar templates do doc 06; checar qualidade do canal |
| "Preferiu financiamento" | Comparativo mal apresentado | Reforçar script 6 do doc 05 + material visual do comparativo |
| "Sem orçamento" | Canal trazendo lead fora do perfil | Ajustar segmentação de anúncio/conteúdo |
| "Sem urgência" | Timeline mal explorado na qualificação | Treinar o T do BANT; oferta certa por prazo (doc 04) |
| "Cancelou no faturamento" | Venda empurrada ou expectativa errada | Revisar qualificação e call de boas-vindas (doc 07) — **sinal vermelho** |
