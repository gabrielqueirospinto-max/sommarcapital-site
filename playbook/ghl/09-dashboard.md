# GHL 09 — Dashboard: os KPIs do Funil na Tela

**Objetivo:** um dashboard que responda em 30 segundos as perguntas da gestão: quantos leads entraram, onde estão travando, quanto vamos fechar.
**Pré-requisitos:** módulos 04 e 06 rodando há pelo menos 2 semanas (dashboard sem dados é decoração).
**Tempo estimado:** 1h.

Os KPIs vêm do [playbook doc 08](../08-metricas-e-metas.md) — o dashboard é só o lugar onde eles moram.

## 1. Montar o dashboard "Comercial Sommar"

1. Subconta → **Dashboard → (lápis/Edit mode)** → crie um dashboard novo (ou edite o padrão) chamado `Comercial Sommar`.
2. **+ Add Widget** para cada item da tabela abaixo. Em widgets com dropdown de pipeline, selecione **Comercial Sommar**.
3. ⚠️ **Todo widget novo nasce com período "All Time" — troque IMEDIATAMENTE para "Last 30 days"** (rolling). All Time transforma o dashboard em museu.

| Widget | Tipo/fonte | KPI que responde |
|---|---|---|
| Leads novos | Opportunities criadas (30d), com comparação vs. período anterior | Volume de entrada |
| Funil de conversão | Funnel/Stage Distribution do pipeline (etapas 1→6) | Onde o funil vaza |
| Oportunidades por Origem | Breakdown por campo `Origem` | Qual canal traz lead (e qual traz lead que FECHA) |
| Valor em Negociação | Soma de opportunity value nas etapas 4–5 | Previsão de receita |
| Fechados no mês | Opportunities → won (30d) + valor | Resultado |
| Motivos de perda | Breakdown do campo `Motivo de perda` (30d) | O diagnóstico da revisão semanal |
| Tarefas vencidas | Tasks overdue por usuário | Higiene de pipeline (deve ser ~zero) |
| Tempo médio de resposta | Conversations/first response (se disponível na sua versão; senão, acompanhar manualmente na daily) | SLA |
| Agendamentos + comparecimento | Appointments booked vs. show/no-show (30d) | Meio do funil |

4. Para razões que não existem prontas (ex.: **taxa de fechamento** = fechados ÷ simulações), use **Add Widget → Custom Metrics**: defina a fórmula com as duas contagens do pipeline.

## 2. Compartilhar e fixar

- Dê visibilidade ao dashboard para os 3 usuários (permissões do dashboard).
- Cada papel abre o dia com uma tela ([módulo 10](10-operacao-diaria.md)): SDR na Smart List, Closer no calendário+pipeline, gestor neste dashboard.

## 3. Rotina de leitura (senão vira papel de parede)

| Quando | O que olhar | Pergunta |
|---|---|---|
| Daily (2 min) | Leads novos + tarefas vencidas | "Alguém precisa de socorro hoje?" |
| Sexta (15 min, revisão semanal) | Funil + motivos de perda + agendamentos | "Qual etapa atacar semana que vem?" |
| 1ª segunda do mês (30 min) | Tudo, incluindo Origem × fechamento e valor | "Onde dobrar a aposta: canal, script ou gente?" |

Regra de decisão: **um número ruim isolado é ruído; duas semanas seguidas é padrão; padrão pede ação** (mudar script, cadência ou canal — [playbook doc 08](../08-metricas-e-metas.md) tem a tabela motivo→ação).

## ✅ Teste de validação do módulo

- [ ] Dashboard `Comercial Sommar` com os 8–9 widgets, todos em "Last 30 days".
- [ ] Números batem com uma contagem manual rápida no pipeline (confere 1 widget por amostragem).
- [ ] SDR e Closer conseguem ver o dashboard (e não editá-lo).

**Próximo módulo:** [10 — Operação Diária](10-operacao-diaria.md) — o mais importante depois de tudo montado.

## Fontes

- [Customizing Dashboard Widgets — portal oficial](https://help.gohighlevel.com/support/solutions/articles/155000001207-customizing-dashboard-widgets) · [Custom Metrics para dashboards](https://help.gohighlevel.com/support/solutions/articles/155000005903-how-to-create-and-use-custom-metrics-for-dashboard-reports) · [Guia de dashboards 2026](https://automatethejourney.com/blog/gohighlevel-dashboards-setup-guide)
