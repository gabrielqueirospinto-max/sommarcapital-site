# GHL 07 — Conversation AI: o Chatbot de Triagem

**Objetivo:** bot respondendo todo lead novo em < 5 min, 24/7, coletando produto/objetivo/prazo e transferindo para humano na hora certa.
**Pré-requisitos:** módulos 03–06 funcionando (IA em cima de processo, nunca antes dele).
**Tempo estimado:** 3h (metade é escrever a base de conhecimento — é o que define a qualidade do bot).
**Custo:** pay-as-you-go ~US$ 0,02/mensagem, ou incluso no AI Employee Unlimited (US$ 97/mês) — ative o add-on nesta semana (ver [módulo 00](00-roteiro-de-implantacao.md)).

## 1. Escrever a "fonte da verdade" (antes de tocar no GHL)

A prática que separa bot bom de bot alucinado: **um documento próprio** de referência, não "aponte para o site". Crie um DOCX/PDF chamado `Sommar — Base de Conhecimento do Bot` com estas seções:

1. **Quem somos** (3 linhas): corretora autorizada Consórcio Magalu, CNPJ, João Pessoa/PB, atendimento nacional remoto.
2. **Produtos** (1 parágrafo cada): imóveis, automóveis, investimento, capital de giro, cartas contempladas — com faixas de crédito típicas, SEM taxas específicas.
3. **As 25 perguntas mais comuns com a resposta ideal** — extraia das conversas reais de WhatsApp + FAQ do site + objeções do [playbook doc 05](../05-scripts.md) ("como funciona consórcio?", "consórcio tem juros?", "quanto tempo até ser contemplado?", "carta contemplada é segura?", "vocês são autorizados?"...). Esta lista é o treino de maior impacto — sem ela a precisão do bot despenca.
4. **O que o bot NUNCA faz** (a IA também lê isto): prometer contemplação ou prazo de contemplação; informar taxa/condição específica; negociar valores; falar de concorrentes; dar aconselhamento financeiro formal.

## 2. Criar o bot

1. Subconta → **AI Agents / Conversation AI** (em Settings ou no menu lateral, conforme a versão) → criar novo agente.
2. **Goal/Intent:** `Appointment Booking` (nosso objetivo final é agendar com o Closer; o modo booking estrutura as respostas para conduzir até o calendário).
3. **Canais:** WhatsApp + Instagram DM + Web chat (se instalar widget no site futuramente).
4. **Persona/prompt** (copiar/colar e ajustar):

> Você é o assistente virtual da Sommar Capital, corretora autorizada do Consórcio Magalu. Fale português brasileiro, tom cordial, consultivo e direto — sem gírias, sem pressão de venda. Seu papel: (1) acolher o cliente, (2) entender qual produto interessa (imóveis, automóveis, investimento, capital de giro ou carta contemplada), qual o objetivo e para quando, (3) responder dúvidas gerais usando APENAS a base de conhecimento, e (4) oferecer uma conversa com nosso especialista, agendando pelo calendário. Se perguntarem valores exatos, taxas, condições ou quiserem negociar: diga que o especialista apresenta os números na simulação personalizada e ofereça o agendamento. NUNCA prometa contemplação, prazo de contemplação ou rentabilidade. Se o cliente pedir atendente humano, ficar irritado, ou mencionar cancelamento/reclamação: encerre sua atuação e informe que um atendente humano assumirá em instantes. Máximo de 2 perguntas por mensagem. Identifique-se como assistente virtual se perguntarem.

5. **Knowledge Base:** faça upload do documento do passo 1 (a versão 2026 aceita PDF/DOCX e tabelas CSV — se tiver tabela de faixas de crédito, suba como CSV).
6. **Wait time / delay de resposta:** 15–20 segundos (parece digitação humana; resposta em 1 segundo grita "robô").
7. **Modo de operação:** comece em **Suggestive** (o bot sugere, humano aprova) por 3–5 dias; depois de validar qualidade, mude para **Auto-pilot** limitado às etapas de triagem.

## 3. Regras de handoff (transferência para humano)

Configure as condições de parada do bot + workflow de apoio:

| O bot PARA e chama humano quando... | Como |
|---|---|
| Lead pede atendente / demonstra irritação | Instrução na persona + intent de handoff |
| Pergunta de valor, taxa, negociação | Instrução na persona |
| Lead completa a triagem (produto + objetivo + prazo coletados) | Bot oferece agendamento; workflow notifica SDR com resumo |
| 6+ mensagens sem resolução | Configuração de limite de mensagens do agente |
| Horário comercial + SDR disponível | SDR pode assumir qualquer conversa a qualquer momento — a mensagem manual **pausa o bot** naquela conversa |

Integre com o pipeline: ajuste o **W1** ([módulo 06](06-workflows.md)) para que a coleta do bot preencha `Produto` e crie a oportunidade — bot que conversa mas não atualiza o CRM não está trabalhando.

## 4. Treinar e melhorar (rotina quinzenal, 20 min)

1. Leia 10 conversas reais do bot (Conversations → filtro pelo agente).
2. Anote: respostas erradas/duras, perguntas sem resposta, momentos onde o handoff demorou.
3. Atualize a base de conhecimento (adicione a pergunta que faltou, corrija a resposta) e re-upload.
4. Objeção nova recorrente → entra também no [playbook doc 05](../05-scripts.md) (roleplay do time).

## ✅ Teste de validação do módulo

Faça você mesmo, de outro número, os 5 testes:

- [ ] "Oi, quero saber de consórcio de imóvel" → bot acolhe, pergunta objetivo/prazo, oferece agendamento.
- [ ] "Qual a taxa de vocês?" → bot NÃO inventa número; direciona para o especialista.
- [ ] "Em quanto tempo serei contemplado?" → bot explica sorteio/lance SEM prometer prazo.
- [ ] "Quero falar com uma pessoa" → bot para e SDR é notificado.
- [ ] Mensagem às 23h → bot responde e agenda notificação para o SDR de manhã.

**Próximo módulo:** [08 — Voice AI](08-voice-ai.md).

## Fontes

- [Setting up Conversation AI — portal oficial](https://help.gohighlevel.com/support/solutions/articles/155000004401-setting-up-conversation-ai) · [Conversation AI Bot Explained](https://help.gohighlevel.com/support/solutions/articles/155000001335-conversation-ai-bot-explained) · [Advanced Settings](https://help.gohighlevel.com/support/solutions/articles/155000004415-advanced-settings-overview-conversation-ai) · [Appointment Booking com Conversation AI](https://help.gohighlevel.com/support/solutions/articles/155000000210-appointment-booking-in-conversation-ai) · [Guia de setup 2026](https://getautomized.com/gohighlevel-conversation-ai-setup/) · [Boas práticas de treino](https://www.gohighlevel.ai/blog/gohighlevel-conversation-ai)
