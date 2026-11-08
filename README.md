# InfoHub FAMINAS — Horas Complementares

Página setorial baseada no **Guia de Orientações: Atividades Complementares**, disponibilizado pela FAMINAS.

## Executar
Abra `index.html` com Live Server no VS Code (recomendado porque `js/app.js` é módulo ES). Não há banco de dados nem frameworks.

## Origem dos dados
- Guia institucional (cópia em `assets/GUIA-DE-ORIENTACOES_ATIVIDADES-COMPLEMENTARES.pdf`).
- Categorias e limites: página 8.
- Envio de requerimentos: páginas 9–15.
- Consulta de horas: páginas 4–7.
- Capturas do guia nas imagens do tutorial.

## Atenção
A calculadora é apenas estimativa local e não persiste dados. Não verifica o limite de 12 horas por dia, nem autenticidade, enquadramento ou validação dos certificados. A carga total depende da matriz do curso.

## Preservação do template
Arquivos `css/variables.css`, `css/base.css`, `css/layout.css`, `css/modais.css` e `js/modal-controller.js`, além do cabeçalho e rodapé, foram mantidos. Personalizações somente em `index.html` (hero, metadados e centro), `css/custom.css` e `js/app.js`.

## Publicação
Suba todos os arquivos na raiz do repositório GitHub e ative Settings > Pages > Deploy from a branch > main > /(root).
