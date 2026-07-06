# GHL 03 — WhatsApp: Conectar o Canal Principal

**Objetivo:** o número (83) 99902-5887 conectado ao GHL — toda conversa de WhatsApp na caixa Conversations, disparável por workflow, sem perder o app no celular.
**Pré-requisitos:** módulo 01; conta **Meta Business Manager** da Sommar (criar no passo 1 se não existir); celular com o WhatsApp Business App em mãos.
**Tempo estimado:** 1h (+ espera de verificação da Meta, que pode levar dias — por isso começa na semana 1).

## 1. Preparar a Meta (fazer já, antes de tudo)

1. Acesse [business.facebook.com](https://business.facebook.com) e crie/acesse o **Business Manager** da Sommar (CNPJ 63.799.145/0001-14, dados idênticos aos oficiais).
2. Em **Configurações do negócio → Central de segurança**, inicie a **verificação da empresa** (envia cartão CNPJ/comprovantes). Sem verificação a conta funciona com limites; com ela, os limites de envio sobem.
3. Confirme que você é admin do Business Manager com o mesmo login do Facebook que usará no GHL.

## 2. Ativar o WhatsApp na subconta

Custo: **US$ 10/mês por subconta** (jul/2026) + tarifas Meta por mensagem de template (abaixo).

1. Painel da **agência** → **Settings → WhatsApp** → habilite o serviço para a subconta Sommar (fluxo de billing da agência).
2. Na **subconta** → **Settings → WhatsApp → Connect your WhatsApp** e siga o assistente.

## 3. Escolher o modo de conexão: Coexistence (recomendado)

O GHL oferece dois caminhos:

| Modo | Como funciona | Para a Sommar |
|---|---|---|
| **Coexistence** ✅ | O número continua no **app WhatsApp Business do celular** E fica conectado ao GHL ao mesmo tempo. Sincroniza conversas (até 6 meses de histórico) e contatos | **Ideal:** o time não perde o hábito do app, e o CRM registra tudo. Transição suave |
| API dedicada (novo número/migração BSP) | O número passa a existir SÓ na API; o app do celular deixa de funcionar para ele | Só se o Coexistence falhar |

**Passos do Coexistence:**

1. Atualize o **WhatsApp Business App** do celular para a última versão.
2. No assistente do GHL, escolha conectar número existente / Coexistence e informe o (83) 99902-5887.
3. Faça login com o Facebook admin do Business Manager quando pedido.
4. O celular receberá uma mensagem da conta oficial do Facebook → **escaneie o QR code** exibido no GHL com o app.
5. Aguarde a sincronização de conversas e contatos (pode levar alguns minutos).

⚠️ Limitações do Coexistence: **templates só podem ser disparados pelo GHL** (não pelo app); indisponível para números de alguns países (Brasil é suportado).

## 4. Entender a cobrança por mensagem (isso define como usamos)

| Categoria | O que é | Custo |
|---|---|---|
| **Serviço** (service) | Conversa iniciada pelo cliente OU resposta dentro da janela de 24h | **GRÁTIS** — ilimitado |
| **Utility** (template) | Mensagem nossa fora da janela de 24h, transacional (lembrete de reunião, status) | Tarifa Meta por mensagem (centavos de US$) |
| **Marketing** (template) | Mensagem nossa fora da janela, promocional (cadência, reativação) | Tarifa Meta, mais cara que utility |

**Tradução operacional para a Sommar:** responder lead é grátis, sempre. O que custa é *iniciar* conversa após 24h de silêncio — exatamente as cadências D1+/reativação do [playbook doc 06](../06-cadencias-e-automacoes.md). Custo baixo (centavos por mensagem), mas é por isso que a cadência tem no máximo 6 toques e break-up: disciplina também economiza.

## 5. Criar e aprovar os templates das cadências

Mensagens fora da janela de 24h **exigem template pré-aprovado pela Meta** (aprovação: minutos a 48h).

1. Subconta → seção de **Templates do WhatsApp** (em Settings → WhatsApp ou Marketing → Templates, conforme a versão da interface) → **Create Template**.
2. Crie um template para cada mensagem de cadência do [doc 06](../06-cadencias-e-automacoes.md), com variáveis `{{1}}`, `{{2}}`:
   - `sommar_followup_d1` (utility) — comparativo: *"Olá {{1}}! Montei o comparativo que comentei sobre {{2}}. Posso te enviar por aqui?"*
   - `sommar_followup_d7` (marketing) — prova social
   - `sommar_breakup_d30` (utility) — encerramento educado
   - `sommar_reativacao_90d` (marketing) — reativação trimestral
   - `sommar_lembrete_reuniao` (utility) — lembrete 24h/1h
3. Regras de aprovação: nada de CAIXA ALTA excessiva, URLs encurtadas ou texto enganoso; categoria certa (utility ≠ marketing — a Meta reclassifica se abusar).

## 6. Boas práticas anti-bloqueio

1. **Qualidade do número é reputação:** taxa alta de "denunciar/bloquear" derruba o rating e limita envios. Só mande template para quem já demonstrou interesse — nunca lista fria comprada.
2. Personalize as variáveis (nome, produto) — template genérico em massa é o gatilho clássico de denúncia.
3. Respeite o `opt-out` imediatamente (workflow remove de tudo — [módulo 06](06-workflows.md)).
4. Aumente volume gradualmente: a Meta expande o limite diário conforme a qualidade se mantém.

## ✅ Teste de validação do módulo

- [ ] De outro celular, envie "oi" para o (83) 99902-5887 → a conversa aparece em **Conversations** no GHL.
- [ ] Responda pelo GHL → chega no celular do cliente-teste.
- [ ] A mesma conversa continua visível no app WhatsApp Business (Coexistence OK).
- [ ] Pelo menos 2 templates aprovados pela Meta (status "Approved").

**Próximo módulo:** [04 — CRM e Pipeline](04-crm-pipeline.md).

## Fontes

- [How to Set Up WhatsApp for a Sub-Account — portal oficial](https://help.gohighlevel.com/support/solutions/articles/155000001980-how-to-set-up-whatsapp-for-a-sub-account) · [WhatsApp Coexistence](https://help.gohighlevel.com/support/solutions/articles/155000003417-whatsapp-coexistence-feature-for-dual-platform-messaging) · [WhatsApp Pricing & Billing Guide](https://help.gohighlevel.com/support/solutions/articles/155000001428-whatsapp-pricing-billing-and-rebilling-guide) · [Meta Business Page para WhatsApp no GHL](https://help.gohighlevel.com/support/solutions/articles/155000006749-do-i-need-a-meta-business-page-to-use-whatsapp-in-ghl-and-how-can-i-create-one-) · [Guia independente 2026](https://oneexpand.com/gohighlevel-whatsapp-integration/)
