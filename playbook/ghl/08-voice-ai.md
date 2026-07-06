# GHL 08 — Voice AI: Ligações Automatizadas

**Objetivo:** agente de voz em português para dois usos — confirmação de agendamentos e reativação de base fria — sempre se identificando como assistente virtual e transferindo interessados para humano.
**Pré-requisitos:** módulo 02 (telefonia LC Phone com número ativo — sem isso, Voice AI não liga), módulo 07 (a persona e limites do bot valem aqui também).
**Tempo estimado:** 2h.
**Custo (jul/2026):** por minuto — motor de voz ~US$ 0,045–0,06/min + tokens do modelo + voz (padrão ~US$ 0,015/min; premium até ~US$ 0,17/min) + telefonia (~US$ 0,017/min outbound). **Total típico: US$ 0,07–0,25/min.** Incluso no AI Employee Unlimited (US$ 97/mês).

> **Priorize com calma:** Voice AI é o último degrau do roteiro por um motivo — o retorno vem depois que o funil todo funciona. Se a telefonia BR ainda estiver pendente ([módulo 02](02-fundacao-tecnica.md)), toque a operação por WhatsApp e volte aqui depois. Brasileiro atende pouco número desconhecido; a expectativa realista do voice outbound é **requalificar base morta em escala**, não fechar venda.

## 1. Criar o agente de voz

1. Subconta → **AI Agents → Voice AI → Create Agent**.
2. **Language:** Portuguese (Brazil). Em **Voice**, ouça as opções com o botão ▶ e escolha voz neutra/natural em pt-BR (voz padrão custa 10x menos que premium — comece na padrão).
3. **Greeting/abertura** (obrigatório por transparência e LGPD):

> "Olá! Aqui é a assistente virtual da Sommar Capital, especialista em consórcios. Essa é uma ligação rápida de 1 minuto — tudo bem falar agora?"

4. **Prompt do agente** — reaproveite a persona do [módulo 07](07-conversation-ai.md) com o roteiro específico do caso de uso (abaixo). Mesmos limites: nunca prometer contemplação, nunca dar taxa, transferir ao humano quando houver interesse.
5. **Ações do agente:** configurar transferência de chamada (para o número do SDR) e agendamento no calendário do Closer.

## 2. Caso de uso 1 — Confirmação de agendamento (inbound de valor, baixo risco)

Workflow: trigger `Appointment` (24h antes, se o cliente não confirmou pelo WhatsApp) → ação de ligação do Voice AI:

> Roteiro: confirmar a reunião de amanhã às {{hora}} com o especialista. Se confirmar: agradecer e encerrar. Se pedir reagendamento: oferecer os 2 próximos horários livres e remarcar. Se quiser cancelar: registrar, agradecer e avisar que o consultor fará contato.

## 3. Caso de uso 2 — Reativação de base fria (outbound)

1. **AI Agents → Voice AI → Enable Outbound Calls** → leia e aceite os termos de outbound.
2. Workflow: trigger tag `reativação` (ciclo do W6, [módulo 06](06-workflows.md)) → If/Else `opt-out` → ação **Voice AI Call**.
3. Roteiro (< 60 segundos):

> Abertura padrão (acima) → "Você conversou com a gente há alguns meses sobre [consórcio/objetivo]. Estou ligando porque abriram novas condições e queria saber: esse plano ainda está de pé pra você?" → **Se sim/talvez:** "Ótimo! Vou pedir pro nosso especialista te chamar no WhatsApp ainda hoje, pode ser?" (cria task + notificação pro SDR) → **Se não:** "Sem problema! Vou deixar registrado. Se mudar de ideia, a Sommar está à disposição. Obrigada!" (aplica tag de descarte) → **Se pedir pra não ligar mais:** aplicar `opt-out` e confirmar em voz.

4. **Limites de segurança:** ligar apenas em horário comercial (9h–18h, seg–sex — configure a janela no workflow); máximo 1 tentativa por ciclo de reativação; nunca ligar para quem tem `opt-out`.

## 4. Controle de custo

- Com AI Employee Unlimited: uso liberado, monitore mesmo assim.
- Pay-as-you-go: uma campanha de reativação de 200 contatos × ~1,5 min ≈ US$ 20–75. Rode a primeira campanha com **50 contatos**, meça a taxa de "sim, quero falar" e o custo por lead requalificado antes de escalar.
- Acompanhe o consumo em Settings → Company Billing → Wallet (créditos de uso).

## ✅ Teste de validação do módulo

- [ ] Ligação de teste para o SEU número: voz em pt-BR natural, abertura se identificando como assistente virtual.
- [ ] Fluxo "sim" → tarefa criada para o SDR com resumo da chamada.
- [ ] Fluxo "não ligue mais" → tag `opt-out` aplicada, contato fora de todas as automações.
- [ ] Transcrição/resumo da chamada visível na timeline do contato.
- [ ] Nenhuma ligação disparada fora da janela 9h–18h.

**Próximo módulo:** [09 — Dashboard](09-dashboard.md).

## Fontes

- [Complete Guide to Creating Voice AI Agents — portal oficial](https://help.gohighlevel.com/support/solutions/articles/155000004107-how-to-create-voice-ai-agents) · [Voice AI Multi-Language Support](https://help.gohighlevel.com/support/solutions/articles/155000004683-voice-ai-multi-language-support) · [Voice AI Outbound Calling](https://help.gohighlevel.com/support/solutions/articles/155000006598-voice-ai-outbound-calling) · [Custo por minuto detalhado 2026](https://netpartners.marketing/gohighlevel-voice-ai-conversation-ai-pricing-2026/) · [AI Product Pricing oficial](https://help.gohighlevel.com/support/solutions/articles/155000006652-ai-product-pricing)
