# GHL 00 — Roteiro de Implantação (o sistema de execução)

Este é o mapa-mestre: **o que fazer, em que ordem, quem faz e como saber que está pronto**. Cada linha aponta para um módulo do tutorial com o passo a passo detalhado. Regra número 1: **não avance para a semana seguinte com etapa anterior quebrada** — automação em cima de fundação torta multiplica o problema, não o resultado.

## Visão geral das 6 semanas

| Semana | Entrega | Módulos | Responsável | Critério de "pronto" |
|---|---|---|---|---|
| **1** | Conta ativa e fundação técnica | [01](01-contratacao-e-conta.md), [02](02-fundacao-tecnica.md) | Gestor | Login dos 3 usuários funcionando; e-mail autenticado (SPF/DKIM/DMARC verdes); fuso e permissões corretos |
| **2** | WhatsApp + CRM estruturado | [03](03-whatsapp.md), [04](04-crm-pipeline.md) | Gestor | Mensagem de teste enviada/recebida no GHL; pipeline com 8 etapas; campos customizados criados; 1 lead de teste percorrendo o funil |
| **3** | Calendário + primeiros workflows | [05](05-calendario.md), [06](06-workflows.md) (W3, W5) | Gestor + Closer | Agendamento de teste feito pelo link, com lembretes disparando; notificação de SLA funcionando |
| **4** | Automações completas | [06](06-workflows.md) (W1 sem IA, W2, W4, W7) | Gestor + SDR | Cadência D0–D30 testada com contato fictício; workflow pós-fechamento criando as tarefas de onboarding |
| **5** | IA: chatbot de triagem | [07](07-conversation-ai.md) | Gestor | Bot respondendo em < 5 min nos canais, coletando produto/objetivo/prazo e transferindo para humano nas regras certas |
| **6** | Voice AI + dashboard + operação | [08](08-voice-ai.md), [09](09-dashboard.md), [10](10-operacao-diaria.md) | Todos | Dashboard com KPIs do funil; equipe operando a rotina diária do módulo 10 |

> **Ritmo realista:** reserve 3–5 h/semana do gestor para implantação. Se apertar, estique para 8 semanas — mas nunca pule a ordem. As semanas 1–2 são pré-requisito de tudo.

## Checklist mestre de dependências

```
01 Conta ──► 02 Fundação técnica ──► 03 WhatsApp ──► 06 Workflows ──► 07 Conversation AI
                    │                                     ▲                    │
                    └──► 04 CRM/Pipeline ─────────────────┘                    ▼
                              │                                          08 Voice AI
                              └──► 05 Calendário ──► 06 (W5 lembretes)
                                                            │
                              09 Dashboard ◄── (precisa de dados fluindo: semanas 2+)
```

- WhatsApp (03) depende da conta Meta Business verificada — **inicie a verificação na semana 1**, pois a análise da Meta pode levar dias.
- Conversation AI (07) só entra depois dos workflows básicos: IA sem processo embaixo só gera bagunça mais rápido.
- Dashboard (09) precisa de 2+ semanas de dados reais para fazer sentido.

## Orçamento mensal consolidado (referência jul/2026)

Câmbio de referência: **US$ 1 = R$ 5,50** — ajuste pela cotação do dia. Preços mudam; confira na contratação.

| Item | Custo (US$/mês) | Estimativa (R$/mês) | Observação |
|---|---|---|---|
| Plano GHL **Starter** | 97 | ~535 | Suficiente para a Sommar (ver módulo 01); anual sai ~US$ 81/mês |
| **AI Employee Unlimited** | 97 | ~535 | Uso ilimitado de Conversation AI + Voice AI + demais IAs na subconta. Alternativa: pagar por uso (ver abaixo) |
| **WhatsApp** (integração oficial) | 10 | ~55 | + tarifas Meta por template de marketing/utility; **conversas de atendimento/resposta são grátis** |
| Telefonia LC Phone (uso) | 10–30 | ~55–165 | Tarifas Twilio para Brasil (ligações do SDR/Closer + Voice AI) |
| E-mail LC (uso) | 0–10 | ~0–55 | Volume baixo no início |
| **Total estimado** | **~214–244** | **~R$ 1.180–1.340** | |

**Quando NÃO contratar o AI Employee Unlimited ainda:** no pay-as-you-go, Conversation AI custa ~US$ 0,02/mensagem e Voice AI ~US$ 0,07–0,25/minuto. Nas semanas 1–4 (antes dos módulos 07–08) você não usa IA — **comece sem o add-on e ative na semana 5**, quando o chatbot entrar. Se o uso mensal projetado passar de ~US$ 60–70, o ilimitado de US$ 97 compensa.

## Como usar este tutorial

1. Cada módulo tem: **objetivo → pré-requisitos → tempo estimado → passos numerados → configuração da Sommar (copiar/colar) → teste de validação → fontes**.
2. Execute com o módulo aberto ao lado da tela do GHL. Os caminhos de menu estão no formato `Menu → Submenu → Botão`.
3. Ao concluir um módulo, faça o **teste de validação** antes de marcar como pronto no checklist acima.
4. A interface do GHL muda com frequência — se um menu não estiver onde o tutorial indica, use a busca do GHL (ícone 🔍) ou o portal oficial [help.gohighlevel.com](https://help.gohighlevel.com). Atualize este documento quando notar divergência.

## O que este sistema entrega ao final

- Todo lead de site/Instagram/WhatsApp registrado e respondido em < 5 min (IA) e < 30 min (humano).
- Funil com 8 etapas medido de ponta a ponta, com cadências automáticas D0–D30.
- Agenda do Closer com lembretes anti no-show.
- Onboarding pós-venda disparado automaticamente.
- Dashboard com os KPIs do [playbook doc 08](../08-metricas-e-metas.md).
