# 04 — Qualificação de Leads (BANT adaptado a consórcio)

Qualificar é decidir **onde a equipe investe tempo**. Closer só recebe lead qualificado — isso protege a agenda de quem fecha e garante que o lead receba a conversa certa. O framework é o BANT adaptado ao nosso produto.

## BANT da Sommar

| Letra | Pergunta que respondemos | Como investigar (perguntas abertas) | Campo no GHL |
|---|---|---|---|
| **B** — Budget | A parcela cabe no orçamento? Qual valor de carta faz sentido? | "Pra esse objetivo, qual valor de parcela mensal ficaria confortável hoje?" / "Você já tem algum valor de entrada/lance reservado?" | `Parcela confortável`, `Faixa de crédito` |
| **A** — Authority | Quem decide? | "Essa decisão você toma sozinho ou junto com alguém — cônjuge, sócio?" → se houver co-decisor, **incluir na call de simulação** | `Decisor` |
| **N** — Need | Qual o objetivo real por trás do produto? | "O que te fez buscar consórcio agora?" / "Esse imóvel é pra morar, alugar ou revender?" / "O capital de giro é pra quê: estoque, frota, obra?" | `Produto` + anotação |
| **T** — Timeline | Pra quando? | "Se tudo der certo, quando você quer estar com o bem na mão?" | `Prazo do objetivo` |

**Regra:** os 4 campos preenchidos = lead move para etapa "Qualificado". Não force os 4 numa mensagem só — é conversa, não interrogatório. Duas a três trocas de mensagem ou uma ligação de 10 min resolvem.

## O Timeline decide o produto (matriz de roteamento)

A resposta do **T** é a mais importante da qualificação, porque muda a oferta:

| Prazo do objetivo | Oferta prioritária | Racional para o cliente |
|---|---|---|
| **Imediato (0–3 meses)** | **Carta contemplada** | Crédito disponível agora, sem esperar sorteio; paga-se ágio, mas resolve a urgência |
| **Curto (3–12 meses)** | Cota nova **com estratégia de lance** | Simulação com lance embutido/fixo; expectativa realista de contemplação |
| **Flexível (12 meses+)** | Cota nova (menor custo total) | Planejamento sem juros; parcela encaixada no orçamento; lance opcional acelera |
| Empresário com dívida cara rodando | **Capital de giro** (cota nova ou contemplada conforme urgência) | Substituir crédito a juros altos por taxa de administração |

> Lead que chega pedindo "carta contemplada" com orçamento de cota nova: não empurrar o produto pedido — qualificar a urgência real primeiro. Às vezes a pressa é ansiedade, não prazo.

## Lead scoring no GHL

Pontuação automática para o SDR priorizar a fila (configuração no [doc 09](09-setup-gohighlevel.md)):

| Sinal | Pontos |
|---|---|
| Origem = Indicação | +30 |
| Origem = Site — Simulação (pediu simulação) | +20 |
| Faixa de crédito 300K+ | +20 |
| Prazo imediato ou curto | +15 |
| Respondeu em < 1h ao primeiro contato | +10 |
| Abriu/respondeu follow-up da cadência | +5 por interação |
| Sem resposta após 3 toques | −15 |

**Fila do SDR = ordem de score, não ordem de chegada** (exceto SLA de lead novo, que vale para todos).

## Desqualificação honesta

Sem perfil = dizer com respeito e sair. Perfis que desqualificamos:

- **Sem orçamento mínimo:** parcela confortável não paga nem a menor cota da tabela → orientar e marcar `Sem orçamento` (entra em nutrição de longo prazo, não é descarte).
- **Procura emprego/renda extra**, achou que consórcio era investimento com resgate imediato → explicar em 2 linhas e marcar `Sem perfil`.
- **Urgência de dinheiro em espécie hoje** (dívida atrasada, emergência): consórcio não resolve — não vender errado. Cancelamento e estorno custam mais que a venda.

Vender para quem não tem perfil é comprar cancelamento no mês 2 (ver [doc 07](07-pos-venda.md)).
