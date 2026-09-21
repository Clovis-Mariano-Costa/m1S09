# M1S09 — Formulários HTML e Integração com JavaScript

Repositório de apoio à **Semana 9** do curso **Desenvolvimento Front-End [React] T4** (Módulo 1),
SENAI/SC. Professor: Lisandro Faria Pinheiro.

## Sobre esta semana

| Item | Descrição |
|---|---|
| Ementa | HTML e CSS — parte 2: Formulários HTML e integração de formulários com JavaScript |
| Datas | 22, 24 e 25 de setembro de 2026 (terça, quinta e sexta) |
| Carga horária | 9 horas síncronas, em 3 encontros de 3 horas |
| Pré-requisito | M1S08 — DOM, manipulação do documento e eventos (`addEventListener`, `.value`, `classList`, `createElement`/`appendChild`) |
| Projeto condutor | Formulário de orçamento da agência fictícia **VaiTorcer**, que evolui a cada encontro: estrutura → captura de dados → validação |

A sequência didática da semana segue: **estruturar → conectar (label/name) → capturar com JS → validar.**

## O que tem neste repositório

```
m1s09/
├── Conectando_DOM_Eventos_a_Formularios_M1S09.html
├── 22-09/   (Encontro 1 — Formulários HTML)
├── 24-09/   (Encontro 2 — Integrando formulários com JavaScript)
└── 25-09/   (Encontro 3 — Validação de formulários e revisão)
```

### `Conectando_DOM_Eventos_a_Formularios_M1S09.html`

Documento de transição entre a Semana 8 e a Semana 9. Não ensina conteúdo novo — mostra, com uma
tabela de equivalências e um exemplo prático, que tudo o que foi aprendido sobre DOM e eventos
(`addEventListener`, `.value`, `classList`, `innerHTML`, `createElement`/`appendChild`) é reaproveitado
diretamente nesta semana, agora aplicado a um `<form>`. Abra direto no navegador.

### Pastas de exercícios (`22-09/`, `24-09/`, `25-09/`)

Cada pasta reúne os exercícios práticos do encontro daquele dia, na ordem em que os tópicos aparecem
nos slides da semana. Cada exercício é uma **subpasta própria**, com os arquivos separados do jeito que
já usamos desde a Semana 07/08 (`index.html`, `style.css` e, quando o tópico exige JavaScript,
`script.js`) — abra com o Live Server do VS Code. Os arquivos têm comentários linha a linha explicando
o que cada trecho faz e por quê, pensados para quem está começando agora.

| Pasta | Encontro | Tópicos | Exercícios |
|---|---|---|---|
| [`22-09/`](22-09/README.md) | 1 — Formulários HTML | `<form>`, `label`/`input`, atributo `name`, tipos de `input`, `checkbox`/`radio`, `select`, `textarea`, `fieldset`/`legend`, estilização com CSS | 4 (sem `script.js` — o foco do dia é só HTML/CSS) |
| [`24-09/`](24-09/README.md) | 2 — Integrando com JavaScript | `addEventListener("submit")`, `evento.preventDefault()`, captura de valores (`.value`, `.checked`, `:checked`), eventos `input`/`change` | 4 |
| [`25-09/`](25-09/README.md) | 3 — Validação de formulários | Validação nativa (`required`, `type`, `min`/`max`) × validação com JavaScript (`if`/`return`), feedback visual com `classList` | 4 (o último junta as camadas de validação num formulário só) |

Cada pasta tem seu próprio `README.md` com a lista de exercícios e a ordem sugerida.

## Como usar

1. Comece pelo `Conectando_DOM_Eventos_a_Formularios_M1S09.html`, se quiser revisar a ponte com a
   Semana 8 antes de entrar no conteúdo novo.
2. Siga as pastas na ordem das datas (`22-09` → `24-09` → `25-09`) e, dentro de cada uma, a numeração
   dos exercícios — cada um usa o que o anterior já ensinou.
3. Use o Live Server do VS Code para abrir cada exercício (clique com o botão direito no `index.html`
   → "Open with Live Server").
