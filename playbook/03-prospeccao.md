# 03 — Prospecção: Geração de Leads

Máquina de vendas sem lead é máquina parada. Trabalhamos 5 canais, em ordem de prioridade atual. Cada canal alimenta o mesmo pipeline ([doc 02](02-funil-e-pipeline.md)) com a `Origem` correta.

## 1. Inbound — Site + SEO (canal principal)

O site (sommarcapital.com.br) já tem dois pontos de captura que abrem o WhatsApp com mensagem pré-preenchida:

- **Simulação em 3 passos** → mensagem chega com produto + faixa de crédito ("Interesse: Imóvel — R$ 300K a R$ 800K"). Lead mais quente: pediu simulação.
- **Formulário "fale no WhatsApp"** → chega com produto de interesse. Lead morno: quer saber mais.

**Como operar:** chatbot IA do GHL faz a triagem imediata (SLA < 5 min), SDR assume em < 30 min. Origem = `Site — Simulação` ou `Site — WhatsApp`.

**Como crescer o canal:** o blog já tem artigos (como funciona consórcio, consórcio de imóveis como investimento, capital de giro com garantia real). Cadência mínima: **1 artigo/mês** respondendo pergunta real de lead (fonte: objeções da semana — doc 05). Todo artigo termina com CTA para a simulação. Conteúdo constrói autoridade e traz lead educado, que fecha mais rápido.

## 2. Instagram (@sommarcapital)

Rede onde nosso público está. Papel: **gerar conversa no direct e mandar para o funil**, não vender no feed.

- Ritmo mínimo: 3 posts/semana (1 educativo: "consórcio × financiamento"; 1 prova social: contemplação/depoimento; 1 CTA: simulação) + stories diários quando houver assembleia/contemplação.
- Todo direct respondido pelo mesmo fluxo do site (GHL centraliza a caixa de entrada). Origem = `Instagram`.
- Anúncio pago (quando houver verba): campanha de mensagem para WhatsApp, segmentada por interesse (imóveis / empreendedores para capital de giro). Ver métricas de custo por lead no doc 08 antes de escalar verba.

## 3. Indicações (maior taxa de conversão, custo zero)

Cliente satisfeito é o melhor SDR. O pedido de indicação é **etapa do processo de pós-venda** (doc 07), não improviso:

- Pedir no momento de pico de satisfação: contemplação, faturamento tranquilo, aniversário de contrato bem-sucedido.
- Meta: **2 pedidos de indicação por cliente ativo por ano** (registrados como tarefa no GHL).
- Indicação recebida entra no pipeline com Origem = `Indicação` e tratamento prioritário (mencionar quem indicou na abordagem).

## 4. Outbound — Capital de Giro B2B

Único produto onde prospecção ativa fria compensa: empresários têm dor clara (crédito caro) e são identificáveis.

- **Lista:** empresas locais/regionais com frota, comércio em expansão, indústrias pequenas — fontes: rede de contatos, associações comerciais, LinkedIn.
- **Cadência outbound** (executada pelo SDR, máx. 10 novas empresas/semana para não canibalizar o inbound): D0 WhatsApp/ligação de apresentação → D2 conteúdo relevante (artigo capital de giro) → D7 última tentativa. Sem resposta = tag `outbound-frio`, tenta de novo em 90 dias.
- Abordagem consultiva, nunca panfletagem: "empresas como a sua estão trocando crédito a 2,5% a.m. por consórcio com garantia real — faz sentido eu te mostrar os números?"

## 5. Reativação de base

Leads perdidos com motivo "Sumiu" ou "Sem urgência" não são lixo — são pipeline futuro.

- **Fluxo trimestral automático no GHL** (tag `reativação`): mensagem de valor (reajuste de tabela, resultado de assembleia, história de contemplação) + pergunta aberta. Ver template no doc 06.
- **Voice AI do GHL** para varrer base antiga por ligação (quando configurado): roteiro curto de requalificação, transferindo interessados para o SDR.
- Reaquecido volta ao pipeline na etapa "Primeiro contato", Origem = `Reativação`.

## Divisão de responsabilidade

| Canal | Executa | Cadência |
|---|---|---|
| Site/SEO (conteúdo) | Gestor (pode terceirizar redação) | 1 artigo/mês |
| Instagram | Gestor + SDR (directs) | 3 posts/semana |
| Indicações | Closer pede, SDR aborda | contínuo (gatilhos do doc 07) |
| Outbound B2B | SDR | 10 empresas/semana |
| Reativação | Automação GHL + SDR | trimestral |
