# GHL 01 — Contratação e Configuração da Conta

**Objetivo:** conta GHL ativa, subconta da Sommar criada, 3 usuários com permissões corretas e app mobile instalado.
**Pré-requisitos:** cartão de crédito internacional; e-mail atendimento@sommarcapital.com.br acessível.
**Tempo estimado:** 1h30.

## 1. Escolher o plano

Preços de referência (jul/2026, mensal; anual tem ~16% de desconto):

| Plano | US$/mês | O que muda | Veredito para a Sommar |
|---|---|---|---|
| **Starter** | 97 | Até 3 subcontas; tudo que precisamos: CRM, pipeline, workflows, calendários, funis, e-mail/SMS/WhatsApp, formulários | ✅ **Contratar este** |
| Unlimited | 297 | Subcontas ilimitadas, acesso à API, app desktop white-label | Só faz sentido para agências que revendem GHL |
| Agency Pro | 497 | SaaS mode, rebilling avançado | Não é nosso caso |

A Sommar precisa de **1 subconta**. O Starter cobre 100% do playbook — pipeline, workflows, WhatsApp, calendários e as IAs (que são cobradas à parte em qualquer plano, ver [módulo 00](00-roteiro-de-implantacao.md)).

## 2. Criar a conta

1. Acesse [gohighlevel.com](https://www.gohighlevel.com) → **Start Your Free Trial** (trial de 14 dias — use-o para executar as semanas 1–2 do roteiro antes de pagar).
2. Cadastre com **atendimento@sommarcapital.com.br** (e-mail da empresa, não pessoal — a conta é da operação).
3. No onboarding, informe o segmento (Financial Services / Consulting) e pule ofertas de snapshot/template — vamos montar do zero, sob medida.
4. Guarde as credenciais no gerenciador de senhas da empresa. Ative **2FA** (Settings → My Profile → Two-Factor Authentication).

## 3. Criar e configurar a subconta da Sommar

No GHL, a "Agency view" administra; a **subconta (Sub-Account/Location)** é onde a operação vive. Tudo dos módulos seguintes acontece DENTRO da subconta.

1. Painel da agência → **Sub-Accounts → Create Sub-Account → Add blank account** (ignore snapshots por enquanto).
2. Preencha:
   - **Business Name:** `Sommar Capital`
   - **Address:** endereço comercial em João Pessoa/PB, país Brasil
   - **Timezone:** `America/Fortaleza` ⚠️ — errar o fuso quebra agendamentos e janelas de envio de TODAS as automações
3. Entre na subconta → **Settings → Business Profile** e confira: nome, logo (usar a do site), site `https://sommarcapital.com.br`, e-mail e telefone (83) 99902-5887.
4. **Settings → Localization** (se disponível): idioma da plataforma em português, moeda BRL, formato de data DD/MM/AAAA.

## 4. Criar os usuários com permissões por papel

**Settings → My Staff → Add Employee**, um por pessoa:

| Usuário | Role | Permissões-chave |
|---|---|---|
| Gabriel (gestor/Closer) | **Admin** | Tudo, incluindo Settings e relatórios |
| SDR | **User** | Conversations, Contacts, Opportunities, Calendars ✅ · Settings, Payments ❌ |
| 3ª pessoa (conforme papel) | **User** | Igual ao SDR; adicionar Reporting se for apoiar gestão |

Em cada usuário: defina **User Availability** (horário comercial — usado pelos calendários) e vincule o **calendário pessoal** depois do módulo 05. Marcar "Add to all sub-accounts" apenas para o admin.

> **Por que restringir:** não é desconfiança — é proteger a operação de mudança acidental de automação/configuração e simplificar a tela de quem opera.

## 5. Instalar os apps

1. **LeadConnector (mobile)** — App Store/Play Store — para os 3 usuários. É por ele que o SDR responde fora da mesa e recebe push de lead novo.
2. Fazer login e **ativar notificações push** (Settings do app → Notifications → tudo ligado para Conversations e Opportunities).
3. Teste: envie uma mensagem interna de teste e confirme que o push chega no celular de cada um.

## ✅ Teste de validação do módulo

- [ ] Os 3 usuários logam na subconta Sommar Capital (web e app) e veem apenas o que o papel permite.
- [ ] Settings → Business Profile com fuso `America/Fortaleza` e dados corretos.
- [ ] 2FA ativo no usuário admin.
- [ ] Push de notificação chegando no celular dos 3.

**Próximo módulo:** [02 — Fundação Técnica](02-fundacao-tecnica.md) (e-mail, domínio e telefone). Inicie em paralelo a verificação do **Meta Business Manager** (ver [módulo 03](03-whatsapp.md), passo 1) — a análise da Meta pode demorar.

## Fontes

- [HighLevel Pricing](https://www.gohighlevel.com/pricing) · [GoHighLevel Pricing 2026 — comparativo](https://ghlcentral.com/gohighlevel-pricing/) · [AI Product Pricing (portal oficial)](https://help.gohighlevel.com/support/solutions/articles/155000006652-ai-product-pricing)
