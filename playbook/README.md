# Playbook de Vendas — Sommar Capital

> **Documento interno.** Esta pasta não é publicada no site (está excluída do deploy via `.vercelignore`). Não compartilhe fora da equipe.

Este playbook é o sistema de vendas da Sommar Capital: como um lead entra, como é qualificado, como fechamos e como cuidamos do cliente depois. Ele adapta a metodologia de Inside Sales (venda remota, consultiva e orientada a dados) e o modelo de Receita Previsível (especialização de funções + funil medido de ponta a ponta) à nossa realidade: equipe de 2–3 pessoas, produtos de consórcio Magalu e operação centralizada no **GoHighLevel (GHL)** + WhatsApp.

## Como usar

- **Novo na equipe?** Leia na ordem: 01 → 02 → 04 → 05. Isso cobre o essencial para atender lead no primeiro dia.
- **Configurando a operação?** Comece pelo [09 — Setup GoHighLevel](09-setup-gohighlevel.md).
- **Rotina semanal:** o gestor revisa o [08 — Métricas e Metas](08-metricas-e-metas.md) toda sexta.
- Estes documentos são vivos: quando um script parar de funcionar ou uma etapa mudar, atualize aqui. O playbook desatualizado vira letra morta.

## Índice

| Doc | Conteúdo |
|---|---|
| [01 — Visão Geral](01-visao-geral.md) | Princípios, funil ponta a ponta, papéis da equipe e rituais |
| [02 — Funil e Pipeline](02-funil-e-pipeline.md) | Etapas do pipeline no GHL, critérios de passagem, SLAs e campos do CRM |
| [03 — Prospecção](03-prospeccao.md) | Canais de geração de leads: inbound, Instagram, indicações, outbound, reativação |
| [04 — Qualificação](04-qualificacao.md) | BANT adaptado a consórcio, roteamento por produto/urgência e lead scoring |
| [05 — Scripts](05-scripts.md) | Scripts de WhatsApp e ligação por etapa e produto + contorno de objeções |
| [06 — Cadências e Automações](06-cadencias-e-automacoes.md) | Follow-up D0–D30, templates e workflows no GHL (chatbot IA, voice AI) |
| [07 — Pós-venda](07-pos-venda.md) | Onboarding anti-cancelamento, assembleias, upsell/cross-sell e indicações |
| [08 — Métricas e Metas](08-metricas-e-metas.md) | KPIs do funil, metas da equipe e rotina de melhoria contínua |
| [09 — Setup GoHighLevel](09-setup-gohighlevel.md) | Checklist de configuração: pipeline, campos, tags, automações e IA |
| [10 — Escala](10-escala.md) | Roteiro de crescimento: quando e como contratar, treinar e especializar |

## Tutorial GoHighLevel (passo a passo de execução)

A pasta [`ghl/`](ghl/00-roteiro-de-implantacao.md) transforma o playbook em execução: implantação do GHL do zero (contratação → operação diária), em 6 semanas, com passos clique a clique, valores prontos para copiar/colar e teste de validação em cada módulo.

| Módulo | Conteúdo |
|---|---|
| [00 — Roteiro de Implantação](ghl/00-roteiro-de-implantacao.md) | **Comece aqui:** cronograma de 6 semanas, dependências e orçamento mensal |
| [01 — Contratação e Conta](ghl/01-contratacao-e-conta.md) | Escolha do plano, criação da conta/subconta, usuários e permissões |
| [02 — Fundação Técnica](ghl/02-fundacao-tecnica.md) | E-mail autenticado (SPF/DKIM/DMARC), domínio e telefonia |
| [03 — WhatsApp](ghl/03-whatsapp.md) | Conexão oficial do número, Coexistence, templates e custos Meta |
| [04 — CRM e Pipeline](ghl/04-crm-pipeline.md) | Pipeline de 8 etapas, campos customizados, tags e smart lists |
| [05 — Calendário](ghl/05-calendario.md) | Agendamento do Closer, sync Google e política anti no-show |
| [06 — Workflows](ghl/06-workflows.md) | As 7 automações construídas e testadas passo a passo |
| [07 — Conversation AI](ghl/07-conversation-ai.md) | Chatbot de triagem: base de conhecimento, persona e handoff |
| [08 — Voice AI](ghl/08-voice-ai.md) | Agente de voz em pt-BR: confirmação de agenda e reativação |
| [09 — Dashboard](ghl/09-dashboard.md) | KPIs do funil em widgets + rotina de leitura |
| [10 — Operação Diária](ghl/10-operacao-diaria.md) | Rotina de SDR, Closer e gestor dentro da ferramenta |

## Contexto do negócio

- **Empresa:** Sommar Capital (Sommar Soluções Financeiras LTDA) — corretora autorizada Consórcio Magalu, João Pessoa/PB, atendimento 100% remoto (Brasil inteiro).
- **Produtos:** cartas contempladas, consórcio de imóveis, automóveis, investimento e capital de giro empresarial com garantia real.
- **Canais atuais de entrada:** site (sommarcapital.com.br → formulários que abrem WhatsApp), Instagram [@sommarcapital](https://instagram.com/sommarcapital), indicações.
- **WhatsApp comercial:** (83) 99902-5887 · **E-mail:** atendimento@sommarcapital.com.br
