---
name: Sommar Capital
description: Corretora autorizada de consórcio e capital de giro — estratégias para aquisição de patrimônio sem pagar juros.
colors:
  navy-deep: "#1A2535"
  navy: "#3D5173"
  navy-dark: "#2C3D55"
  gold: "#C9A558"
  gold-dark: "#A07830"
  gold-light: "#D9C080"
  offwhite: "#F0F2F5"
  offwhite-dk: "#E2E6EC"
  white: "#FFFFFF"
  text: "#1A1A2E"
  text-mid: "#4A4A5A"
  text-light: "#6B6B7E"
typography:
  display:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "clamp(52px, 7vw, 84px)"
    fontWeight: 900
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "clamp(28px, 3.5vw, 42px)"
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "24px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "11px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.28em"
rounded:
  sm: "4px"
  md: "6px"
  pill: "100px"
spacing:
  sm: "16px"
  md: "32px"
  lg: "64px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy-deep}"
    rounded: "{rounded.md}"
    padding: "12px 28px"
  button-primary-hover:
    backgroundColor: "{colors.gold-dark}"
    textColor: "{colors.navy-deep}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.gold}"
    rounded: "{rounded.md}"
    padding: "11px 26px"
  button-outline-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "rgba(255,255,255,0.85)"
    rounded: "{rounded.md}"
    padding: "13px 28px"
  card-product:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "32px 28px"
  card-benefit:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "32px 28px"
  input-default:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
  input-focus:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
---

# Design System: Sommar Capital

## 1. Overview

**Creative North Star: "A Carta Assinada"**

A Carta Assinada é a metáfora que governa cada decisão visual: um documento financeiro bem preenchido, onde tudo está no lugar certo, cada campo tem sua função, e nada foi inserido por decoração. A letra de crédito que o cliente assina para finalmente ter o que planejou. O design não exibe; certifica.

A identidade parte de dois polos visuais trabalhando em tensão produtiva: o navy profundo (#1A2535 a #3D5173) como âncora de credibilidade e seriedade, e o dourado brassado (#C9A558) como o único elemento que brilha — reservado para ação e dado-chave. Sections claras (branco + off-white fria #F0F2F5) alternam com sections escuras (navy-deep) para criar ritmo sem precisar de ilustração. A tipografia mistura Montserrat pesadíssimo (900) para impacto e Libre Baskerville para ancoragem serifa nas headlines de seção, um par que comunica "moderno que sabe que construir patrimônio é assunto sério".

Este sistema rejeita explicitamente: layouts burocráticos com grids uniformes de banco tradicional, poluição visual de corretoras baratas (banners sobre banners, destaques sobre destaques), e o cenário fintech-startup de 2022 (gradientes roxo-rosa, ilustrações flat excessivamente amigáveis). Rejeita também eyebrows uppercase em toda seção como andaime — quando o ouro aparece é como sinal, não como decoração.

**Key Characteristics:**
- Navy profundo como estrutura, dourado como sinal, não decoração
- Sombras suaves sempre presentes nos cards, nunca pesadas ou teatrais
- Serif (Libre Baskerville) reservado para headlines de seção e statements narrativos
- Transição padrão de .24s ease — funcional, nunca dramático
- Número específico beats adjetivo: design construído em torno de dados concretos
- Alternância de backgrounds (branco / offwhite / navy) como ritmo, não como ornamento

## 2. Colors: A Paleta da Credencial

Duas famílias com papéis absolutamente distintos: o azul-marinho como estrutura e o dourado como chancela. Nada converge para warm-neutral genérico.

### Primary
- **Slate Profundo** (`#1A2535`): Fundo do header, seções escuras (capital de giro, modais, hero backgrounds). O pano de fundo da confiança. Onde o gold brilha mais.
- **Azul Credencial** (`#3D5173`): Hover de navegação, highlights de benefício, a cor institucional em segundo plano. Identidade de marca sem chamar atenção.
- **Azul Intermediário** (`#2C3D55`): Hover states de elementos navy, borders sobre fundos escuros.

### Secondary
- **Dourado Brasão** (`#C9A558`): O único acento quente do sistema. CTAs primários, highlights de títulos (classe `.hl`), marcadores de lista, ícone ativo, dado-chave. **Cada aparição do dourado é uma intenção; sua raridade é sua autoridade.**
- **Dourado Desgastado** (`#A07830`): Hover do botão gold, maturação do acento. Nunca como cor primária.
- **Dourado Suave** (`#D9C080`): Apenas para efeitos de brilho muito sutis, raramente aplicado.

### Neutral
- **Branco Limpo** (`#FFFFFF`): Surface primária de cards, formulários, painéis de conteúdo. Nunca warm-tinted.
- **Offwhite Fria** (`#F0F2F5`): Background de seções alternadas (needs, tabs, about). Levemente azulada — fria como a seriedade do produto.
- **Cinza Divisor** (`#E2E6EC`): Borders, divisores, estado padrão de inputs. Nunca como fundo de seção.
- **Tinta Profunda** (`#1A1A2E`): Cor de texto principal — quase preto com inflexão azul, casa com o navy.
- **Tinta Média** (`#4A4A5A`): Texto de suporte, descrições em cards, parágrafos secundários.
- **Tinta Suave** (`#6B6B7E`): Placeholders, labels de escala, metadados de baixo peso.

### Named Rules
**A Regra do Sinal Dourado.** O gold (#C9A558) aparece em ≤3 pontos por seção: o CTA, o dado-mais-importante, e eventuais marcadores. Se mais de 3 elementos dourados estão visíveis de uma vez, um deles não é dourado — é ruído.

**A Regra da Seção Escura.** Sections em navy-deep (#1A2535) existem para momentos de peso: capital de giro, proposta de valor principal, footer. Não são decorativas. Cada seção escura carrega uma única mensagem central. Nunca duas sections escuras consecutivas.

## 3. Typography

**Display Font:** Montserrat (Google Fonts, 100–900)
**Body Font:** Montserrat (mesma família, peso 400–600)
**Headline Font:** Libre Baskerville (Google Fonts, 400/700/700 italic)

**Character:** Montserrat carrega toda a carga de UI, navegação, body e dados numéricos — sua geometria limpa sustenta densidade de informação sem cansaço. Libre Baskerville entra exclusivamente nos títulos de seção e headings narrativos: a voz do advisor que conhece a história por trás do número. A combinação funciona porque não disputa — são instrumentos diferentes na mesma peça.

### Hierarchy
- **Display** (Montserrat 900, clamp(52px, 7vw, 84px), line-height 0.96, tracking -0.04em): Hero headlines. Comprimido ao máximo sem colapsar. Fonte heroica, não decorativa. Máximo de 8 palavras por headline.
- **Headline** (Libre Baskerville 700, clamp(28px, 3.5vw, 42px), line-height 1.14, tracking -0.02em): Títulos de seção (section-title, h2 de about, h2 de capital de giro). A voz do consultor. Nunca em uppercase.
- **Title** (Montserrat 800, 24px, line-height 1.2, tracking -0.025em): Subtítulos dentro de sections (tab headings, h3 de produtos). Peso máximo sem recorrer ao serif.
- **Body** (Montserrat 400–500, 14–18px, line-height 1.6–1.7): Texto corrido, parágrafos de seção, descrições de produto. Body de 16px para sections principais, 14px para conteúdo dentro de cards. Sempre em dark-on-light ou light-on-dark com contraste ≥4.5:1.
- **Label** (Montserrat 800, 11px, line-height 1, tracking 0.28em, UPPERCASE): Eyebrows de seção, tags de categoria, badges de produto. Reservado: um por seção no máximo.
- **Caption** (Montserrat 600–700, 12–13px, tracking 0.10–0.16em, UPPERCASE): Labels de estatísticas (stat-label, highlight-label, comparison-label). O dado tem um número; a legenda tem uma caption.

### Named Rules
**A Regra do Âncora Serif.** Libre Baskerville aparece somente em headlines de seção (h2-level) e em statements de posicionamento de peso. Nunca em UI, labels, ou corpo de card. Se um elemento parece "pedir serif", é porque ele merece ser um headline — não porque qualquer texto deve ter serifa.

**A Regra do Número em Bold.** Qualquer dado numérico que fundamenta o argumento (0,89%, R$ 133K, 0%) recebe font-weight ≥700 e fica no gold em contexto escuro ou no text (#1A1A2E) com destaque tipográfico em contexto claro. O número é o argumento; o design deve apresentá-lo, não enterrá-lo.

## 4. Elevation

O sistema usa sombras de camada suave e constante — não estado-dependente. Cards, painéis e formulários flutuam ligeiramente acima de seus backgrounds por padrão; o hover amplifica discretamente.

A filosofia é de **separação tonal amplificada por sombra**: a alternância de backgrounds (branco → offwhite → navy) já cria hierarquia primária; as sombras confirmam qual superficie está "em cima" sem dramatizar.

### Shadow Vocabulary
- **Ambient** (`0 2px 8px rgba(61,81,115,.08)`): Cards em repouso (need-cards, product-cards, benefit-cards). Sempre presente. Quase invisível no branco, perceptível sobre offwhite.
- **Lifted** (`0 6px 24px rgba(61,81,115,.12)`): Estado de hover em cards interativos, dropdowns de navegação. A resposta ao interesse do usuário.
- **Elevated** (`0 16px 48px rgba(61,81,115,.14)`): Modais, overlays, elementos de máxima prioridade. O topo da pilha.

O tom de sombra é derivado do navy (#3D5173 → rgba) — nunca rgba(0,0,0,x). Sombras pretas parecem de template; sombras em navy são da marca.

### Named Rules
**A Regra do Navy-Sombra.** Todas as sombras são derivadas de `rgba(61,81,115, opacity)` — a componente RGB do `--navy`. Proibido: `box-shadow: 0 4px 12px rgba(0,0,0,.15)`. Sombra preta é sem marca; sombra navy é Sommar.

## 5. Components

### Buttons
O sistema tem 4 variantes; cada uma é um nível de comprometimento visual diferente.

- **Shape:** Cantos suavemente arredondados (6px) — profissionais, não corporativos. Nunca circular, nunca quadrado.
- **Primary (btn-gold):** Background `#C9A558`, texto `#1A2535`, padding 12px 28px (14px 34px na versão lg), font-weight 700, letter-spacing 0.06em. Hover: background `#A07830`, translateY(-1px). O único botão que brilha — reservado para a ação que converte (simulação, WhatsApp).
- **Outline (btn-outline):** Border 1.5px `#C9A558`, texto `#C9A558`, fundo transparente. Hover: fill gold. Para CTAs secundários sobre fundo claro.
- **Ghost (btn-ghost):** Border 1.5px `rgba(255,255,255,.3)`, texto `rgba(255,255,255,.85)`. Exclusivo para uso sobre fundos escuros (hero, seções navy). Nunca sobre branco.
- **Navy Outline (btn-outline-navy):** Border 1.5px `#3D5173`, texto `#3D5173`. Para ações terciárias sobre fundo claro (Ver mais, links de blog).

### Cards / Containers
Cards são o vocabulário primário da seção de produtos e benefícios.

- **Corner Style:** 6px — mesmo raio dos botões, consistência sem redundância.
- **Background:** `#FFFFFF` sobre offwhite, `rgba(255,255,255,.04)` sobre navy-deep.
- **Shadow Strategy:** ambient shadow (0 2px 8px) em repouso; lifted (0 6px 24px) no hover. Border padrão: 1px `#E2E6EC` (invisível em white, visível em offwhite).
- **Hover border:** 1px `#C9A558` — o dourado aparece na borda como convite, não como decoração.
- **Internal Padding:** 32px 28px para product/benefit cards; 24px 22px para cards menores (need-cards).
- **Featured variant:** `product-card-featured` usa border gold permanente + badge ESPECIALIDADE. Máximo um por grid.

### Inputs / Fields
- **Style:** Border 1.5px `#E2E6EC` (offwhite-dk), background branco, radius 4px. Corpo de texto 14px, label 13px font-weight 600.
- **Focus:** Border-color muda para `#3D5173` (navy) — confirmação de atenção, não alarme.
- **Placeholder:** `#6B6B7E` (text-light) — contraste ≥4.5:1 obrigatório. Nunca mais suave que isso.
- **Error / Disabled:** não especificado no sistema atual — adicionar quando necessário.

### Navigation
- **Style:** Header fixo em navy-deep (#1A2535), height 68px. Border-bottom 1px `rgba(201,165,88,.12)` — um fio dourado quase invisível que separa o header do conteúdo.
- **Nav links:** Montserrat 13px 600, `rgba(255,255,255,.8)`, hover: white + background `rgba(255,255,255,.08)`. Nunca sublinhados.
- **Dropdown:** Posição absoluta, navy-deep, border gold, sombra md. Hover em links = gold. Transição opacity + translateY(-6px) → translateY(0).
- **CTAs no header:** btn-outline (WhatsApp) + btn-gold (Fazer simulação). A hierarquia de ação é óbvia.
- **Mobile:** Hambúrguer 3 linhas → X. Menu full-width em navy-deep sob o header.

### Signature Components

**Hero Tag:** Pill (100px) com background `rgba(201,165,88,.15)` e border `rgba(201,165,88,.3)`. Texto dourado uppercase, 12px, 700, tracking 0.20em. A etiqueta de categoria no hero — um by-design, não um template.

**`.hl` (Highlight de Título):** `color: var(--gold); font-style: italic`. Aplicado a fragmentos-chave dentro de headlines do hero (ex: "sem juros?", "aluguel", "patrimônio"). Reforça a pergunta-chave sem precisar de fundo ou tamanho maior. Máximo uma ocorrência por slide/seção.

**Stat Card:** Background offwhite, padding 20px 24px, número em 32px 900 navy, label em 12px uppercase tracking 0.10em. Variante gold: navy-deep background, número em gold, label em `rgba(201,165,88,.6)`.

**CG Data Card:** O único componente "drenched" do sistema — navy-deep com borda gold, número central em 64px 900 gold, divisor horizontal em 40px. Usado exclusivamente na seção de capital de giro. Não replicar em outros contextos.

**Modal:** White surface 460px max-width, padding 40px, shadow-lg, backdrop blur(4px) em `rgba(10,14,24,.7)`. Enter: opacity + translateY(12px→0). O formulário mais importante do site deve se sentir como um documento sério — mas acessível.

## 6. Do's and Don'ts

### Do:
- **Do** usar `#C9A558` (gold) no máximo em 3 pontos por seção: CTA primário, dado mais importante, marcador de lista. Mais que isso é ruído.
- **Do** usar Libre Baskerville exclusivamente para headlines de seção (h2-level) e statements de posicionamento. Todo o resto é Montserrat.
- **Do** garantir contraste ≥4.5:1 em todo texto de corpo. `#6B6B7E` sobre branco é o limite mínimo — qualquer texto mais claro que isso é ilegível.
- **Do** usar `rgba(61,81,115, opacity)` como base para todas as sombras. Sombra navy é da marca; sombra preta é de template.
- **Do** alternar backgrounds branco/offwhite/navy para ritmo de seção. A cor do fundo carrega o peso emocional da seção.
- **Do** reservar seções navy-deep para o momento de maior peso: capital de giro, hero dark, CTA final. Nunca duas consecutivas.
- **Do** apresentar números com fonte-weight ≥700. O dado é o argumento; o peso é o sinal de que vale a pena ler.
- **Do** usar `.hl` (gold italic) para a pergunta ou dado central de um headline. Máximo uma vez por headline.

### Don't:
- **Don't** usar `border-left` maior que 1px como acento colorido em cards ou alertas. Nunca. Reescrever com tint de fundo, border completa, ou ícone leading.
- **Don't** usar `background-clip: text` com gradiente. Gradient text é decorativo, sem semântica. Usar solid color.
- **Don't** colocar eyebrow uppercase em cada seção como andaime de scaffolding. Um eyebrow por seção é voz deliberada; um em toda seção é gramática de IA. Usar hierarchia tipográfica no lugar.
- **Don't** criar grids de cards idênticos (mesmo ícone + heading + texto, repetido infinitamente). O card "Cartas Contempladas" tem badge ESPECIALIDADE por um motivo — diferenciação visual precisa de estrutura diferente.
- **Don't** parecer banco tradicional genérico: paleta azul/verde padrão, layout burocrático com grids uniformes e linguagem distante. Bradesco pré-2020 é o anti-modelo.
- **Don't** parecer corretora de seguros barata: visual poluído com muitos banners, tipografia gritante, múltiplas promoções em destaque competindo por atenção. A Sommar é consultoria de patrimônio, não oferta de seguro.
- **Don't** adicionar sombras pretas (`rgba(0,0,0,x)`). Sombras pretas são genéricas; o sistema usa exclusivamente sombras em navy.
- **Don't** usar glassmorphism como padrão. O único blur permitido é o backdrop-filter do modal (`blur(4px)` sobre overlay escuro) — e mesmo assim é funcional, não decorativo.
- **Don't** usar texto em all-caps para corpo de texto ou parágrafos. Uppercase é reservado para labels ≤4 palavras: eyebrows, badges, stat-labels, captions.
- **Don't** inventar uma paleta warm-neutral (beige, areia, papel) para parecer "sofisticado". O sistema usa off-white fria (#F0F2F5) — levemente azulada, nunca amarelada.
