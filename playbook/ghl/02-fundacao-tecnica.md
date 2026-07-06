# GHL 02 — Fundação Técnica: E-mail, Domínio e Telefonia

**Objetivo:** e-mails saindo autenticados (sem cair em spam), domínio conectado e telefonia LC Phone pronta para ligações do time.
**Pré-requisitos:** módulo 01 concluído; acesso ao painel DNS do domínio sommarcapital.com.br (onde o site está registrado/Vercel ou registrador).
**Tempo estimado:** 1h30 + até 24h de propagação DNS.

## 1. Domínio dedicado de envio de e-mail (SPF/DKIM/DMARC)

E-mail sem autenticação = spam. O GHL usa o LC Email; vamos criar um **subdomínio dedicado** para envios (protege a reputação do domínio principal).

1. Subconta → **Settings → Email Services → Dedicated Domain & IP → + Add Domain**.
2. Digite o subdomínio: `mail.sommarcapital.com.br` → **Add & Verify**.
3. O GHL exibirá a lista de registros DNS a criar (**SPF, DKIM, CNAME, MX e DMARC**). Abra o painel DNS do domínio em outra aba e crie cada registro **exatamente com os valores mostrados** (copiar/colar, sem espaços extras).
4. Regras que causam 90% dos erros:
   - **Apenas UM registro SPF** por domínio/subdomínio — se já existir um TXT `v=spf1...` no subdomínio, mescle em vez de duplicar.
   - **Apenas UM registro DMARC** (`_dmarc.mail.sommarcapital...`). Comece com política branda: `v=DMARC1; p=none; rua=mailto:atendimento@sommarcapital.com.br`.
   - O subdomínio `mail.` não deve ter MX/SPF antigos — remova antes de conectar. Confira com [mxtoolbox.com](https://mxtoolbox.com/SuperTool.aspx).
5. Volte ao GHL → **Verify**. Propagação leva de minutos até 24h — se falhar, aguarde e reverifique.
6. Após verificar, clique **Set Headers** no domínio: From Name `Sommar Capital`, From Email `contato@mail.sommarcapital.com.br`.

> **Aquecimento:** conta nova enviando milhares de e-mails de uma vez = bloqueio. Nas 4 primeiras semanas, envie só transacional/1-a-1 e aumente volume gradualmente. A newsletter mensal (playbook doc 06) entra a partir do 2º mês.

## 2. Telefonia — LC Phone

Necessária para: ligações do SDR/Closer registradas no CRM, e futuramente o Voice AI ([módulo 08](08-voice-ai.md)).

1. Subconta → **Settings → Phone Numbers → Add Number**.
2. Procure número do **Brasil (+55)**. Atenção: números BR nem sempre aparecem direto no GHL — se não houver, o caminho oficial é solicitar via suporte HighLevel (chat no canto inferior) ou adquirir no console Twilio e migrar; números brasileiros exigem documentação local (CNPJ, endereço) por regulação da Anatel.
3. Custos: tarifa Twilio para Brasil (número mensal + por minuto). Estimativa no [módulo 00](00-roteiro-de-implantacao.md).
4. Configure em **Phone Numbers → (número) → Edit Configuration**: encaminhamento de chamadas recebidas para o celular do SDR em horário comercial; gravação de chamadas ON (avisar no atendimento, exigência de boas práticas/consentimento).

> **Plano B pragmático:** se a aquisição do número BR travar a semana 1, siga em frente — 95% da operação da Sommar roda em WhatsApp. Marque a telefonia como pendência e retome antes do módulo 08 (Voice AI depende dela).

## 3. Conformidade básica (LGPD / opt-out)

1. **Settings → Business Profile:** preencha endereço e dados completos (aparecem no rodapé dos e-mails — obrigatório anti-spam).
2. Todo template de e-mail deve ter link de descadastro (o GHL insere `{{unsubscribe_link}}` automaticamente nos e-mails de campanha — não remova).
3. Crie desde já a tag `opt-out` (Settings → Tags → Add Tag) — ela será usada em TODOS os workflows como condição de saída ([playbook doc 06](../06-cadencias-e-automacoes.md), regra anti-spam nº 3).
4. Base importada ([módulo 04](04-crm-pipeline.md), passo 5): só contatos com relacionamento prévio real.

## ✅ Teste de validação do módulo

- [ ] Settings → Email Services mostra `mail.sommarcapital.com.br` com status verificado (verde).
- [ ] Envie um e-mail de teste (Contacts → você mesmo → Send Email) para um Gmail: deve chegar na caixa de entrada, e em "Mostrar original" os campos SPF, DKIM e DMARC devem constar como `PASS`.
- [ ] (Se telefonia ativa) ligação de teste do GHL para um celular completa e fica registrada em Conversations.
- [ ] Tag `opt-out` criada.

**Próximo módulo:** [03 — WhatsApp](03-whatsapp.md).

## Fontes

- [Dedicated Sending Domain (LC Email) — portal oficial](https://help.gohighlevel.com/support/solutions/articles/48001226115-dedicated-email-sending-domains-overview-setup) · [Email Authentication — DMARC](https://help.gohighlevel.com/support/solutions/articles/48001224630-email-authentication-dmarc) · [Fix SPF/DKIM/DMARC issues](https://help.gohighlevel.com/support/solutions/articles/155000006793-email-authentication-errors-fix-spf-dkim-and-dmarc-issues) · [How to Purchase a Phone Number](https://help.gohighlevel.com/support/solutions/articles/155000003226-how-to-purchase-a-phone-number) · [LC Phone Pricing & Billing](https://help.gohighlevel.com/support/solutions/articles/48001223556-lc-phone-pricing-billing-guide)
