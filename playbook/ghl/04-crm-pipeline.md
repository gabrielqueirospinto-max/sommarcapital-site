# GHL 04 — CRM: Pipeline, Campos, Tags e Smart Lists

**Objetivo:** o pipeline "Comercial Sommar" do [playbook doc 02](../02-funil-e-pipeline.md) construído no GHL, com campos customizados, tags e as listas de trabalho do SDR.
**Pré-requisitos:** módulo 01 (subconta e usuários).
**Tempo estimado:** 2h.

Melhor prática (vale para sempre): **UM pipeline mestre**, com campos para diferenciar produto/origem — nunca um pipeline por produto. Pipeline duplicado = métrica quebrada e lead perdido entre quadros.

## 1. Criar o pipeline

1. Subconta → **Opportunities → Pipelines** (ou Settings → Pipelines) → **+ Create new pipeline**.
2. Nome: `Comercial Sommar`.
3. Adicione as 8 etapas, **nesta ordem** (arraste para ordenar):
   1. `1. Novo lead`
   2. `2. Primeiro contato`
   3. `3. Qualificado`
   4. `4. Simulação enviada`
   5. `5. Negociação`
   6. `6. Fechado — em faturamento`
   7. `7. Cliente ativo`
   8. `8. Perdido`
4. Marque as opções de visibilidade das etapas nos dashboards/funnel charts (deixe `Perdido` e `Cliente ativo` fora do gráfico de funil para não distorcer a conversão).
5. **Save**.

> Os números no nome das etapas mantêm a ordenação visual em relatórios e evitam ambiguidade nas automações.

## 2. Criar os campos customizados

**Settings → Custom Fields → Add Field** — crie um a um, tipo **Dropdown (single option)** salvo indicação contrária, grupo "Comercial":

| Campo | Tipo | Opções (copiar/colar) |
|---|---|---|
| `Origem` | Dropdown | `Site — Simulação`, `Site — WhatsApp`, `Instagram`, `Indicação`, `Outbound`, `Reativação` |
| `Produto` | Dropdown | `Imóveis`, `Automóveis`, `Investimento`, `Capital de Giro`, `Carta Contemplada` |
| `Faixa de crédito` | Dropdown | `Até 100K`, `100–300K`, `300–800K`, `800K+` |
| `Parcela confortável` | Monetary | — |
| `Decisor` | Dropdown | `Sozinho`, `Com cônjuge`, `Com sócio` |
| `Prazo do objetivo` | Dropdown | `Imediato (0–3m)`, `Curto (3–12m)`, `Flexível (12m+)` |
| `Motivo de perda` | Dropdown | `Sem orçamento`, `Preferiu financiamento`, `Preferiu concorrente`, `Sem urgência / vai esperar`, `Não era decisor`, `Sumiu (cadência completa)`, `Sem perfil`, `Cancelou no faturamento` |

As opções de `Faixa de crédito` espelham o formulário de simulação do site — o SDR só transcreve da mensagem recebida.

## 3. Criar as tags

**Settings → Tags → Add Tag**: `esfriou` · `reativação` · `outbound-frio` · `opt-out` · `indicou-alguem` · `contemplado`

(Tags disparam workflows — [módulo 06](06-workflows.md). Não crie tags além destas sem registrar no playbook: tag sem dono vira mato.)

## 4. Configurar a criação de oportunidades

1. **Opportunities → (engrenagem/Settings):** ative a criação automática de oportunidade a partir de conversa nova, se disponível na sua versão — senão, o workflow W1 cuida disso ([módulo 06](06-workflows.md)).
2. Padrão de nomeação da oportunidade: `Nome do contato — Produto` (ex.: "Maria Silva — Imóveis").
3. **Valor da oportunidade** = valor estimado da carta (meio da faixa: `100–300K` → 200000). Alimenta previsão de receita no dashboard.

## 5. Importar a base histórica

Contatos antigos do WhatsApp/planilhas viram pipeline de reativação:

1. Monte um CSV com colunas: `first_name`, `last_name`, `phone` (formato +5583...), `email`, `tags` (= `reativação`), e colunas para `Origem`/`Produto` se souber.
2. **Contacts → Import Contacts** → suba o CSV → mapeie cada coluna para o campo certo (inclusive os customizados) → conclua.
3. Confira 5 contatos aleatórios: telefone no formato internacional? Tag aplicada?
4. **Não** crie oportunidades para eles ainda — o workflow de reativação ([módulo 06](06-workflows.md), W6) fará isso quando responderem.

> LGPD: importe apenas quem teve relacionamento real com a Sommar. Lista comprada não entra.

## 6. Smart Lists — a fila de trabalho do SDR

Smart Lists são filtros salvos de contatos, a tela de trabalho diário ([módulo 10](10-operacao-diaria.md)):

1. **Contacts → Smart Lists → + Add Smart List**.
2. Crie três:
   - **`Fila SDR — novos`**: oportunidade em etapa `1. Novo lead` OU `2. Primeiro contato` — ordenar por data de criação.
   - **`Follow-ups de hoje`**: contatos com tarefa vencendo hoje.
   - **`Base reativação`**: tag = `reativação`.

## ✅ Teste de validação do módulo

- [ ] Crie um contato-teste ("Lead Teste", seu telefone) → crie a oportunidade "Lead Teste — Imóveis" em `1. Novo lead` → arraste pelas 8 etapas até `Perdido` preenchendo `Motivo de perda`. Sem campo faltando no caminho? OK.
- [ ] O contato-teste aparece na Smart List `Fila SDR — novos` quando a oportunidade está na etapa 1–2.
- [ ] Base histórica importada com tags corretas (se já disponível).
- [ ] Delete o lead-teste ao final.

**Próximo módulo:** [05 — Calendário](05-calendario.md).

## Fontes

- [Step-by-Step Guide: Creating Pipelines — portal oficial](https://help.gohighlevel.com/support/solutions/articles/155000001985-step-by-step-guide-creating-pipelines) · [Understanding Pipelines](https://help.gohighlevel.com/support/solutions/articles/155000001982-understanding-pipelines) · [Getting Started — Pipelines & Opportunities](https://help.gohighlevel.com/support/solutions/articles/155000005062-getting-started-setup-pipelines-and-opportunities) · [Boas práticas de setup 2026](https://autoesta.com/how-to-setup-gohighlevel-properly-2026-guide/)
