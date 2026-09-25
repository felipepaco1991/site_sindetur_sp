# Landing pages integradas

- `/associe-se`: conteúdo do projeto `LP_Associação`, com o formulário de associação já existente no site.
- `/contribuicao`: conteúdo do projeto `LP_Constribuicao`, incluindo abas, FAQ, tabelas históricas de 2024 e preparação de e-mail.

As páginas usam o cabeçalho e o rodapé compartilhados do site. Os botões de associação e contribuição, tanto no desktop quanto no celular, apontam para essas rotas internas.

## Manutenção

Os componentes da associação ficam em `src/components/associacao/`. A contribuição está em `src/pages/Contribuicao.jsx`. Os estilos em `src/styles/` estão limitados às respectivas páginas. As imagens novas ficam em `public/images/associacao/` e `public/images/contribuicao/`; as fotos da diretoria reutilizam `public/images/diretoria/`.

Foram mantidos os conteúdos e valores dos projetos locais. Alterações de valores comerciais devem ser feitas nos componentes correspondentes; a contribuição mantém as tabelas de 2024 identificadas como históricas.

## Formulários

- Associação: usa `submitAssociationForm`, com anexos, no endpoint `/api/forms/associe-se`. O envio depende do Worker e de `VITE_FORMS_API_BASE_URL`, conforme o README principal.
- Contribuição: gera um link `mailto:contribuicao@sindetursp.org.br`. O visitante revisa e envia pelo próprio aplicativo de e-mail; não há envio automático nesse formulário.

## Publicação

O build é o mesmo do site: `npm run build`. A hospedagem deve servir `index.html` ao acessar diretamente `/associe-se` e `/contribuicao`, como nas demais rotas do BrowserRouter.

Caso os domínios antigos sejam desativados, configure redirecionamentos HTTP 301 na hospedagem de cada domínio para as respectivas páginas do site principal. Essa configuração é externa ao projeto e não é aplicada pelo build.
