# Patch final pontual — foto da literatura + chamada dos quizzes

Este ZIP contém somente quatro arquivos para a raiz do repositório MIRA.

- `artigo.html` — carrega `literatura-imagem.js` depois de `articles.js` e antes de `script.js`. Essa era a ligação que faltava para a correção da capa ser aplicada antes de a matéria ser desenhada.
- `literatura-imagem.js` — aplica a imagem local à matéria `CUL-08` (Literatura mexicana).
- `capa_A_History_of_Mexican_Literature.jpg` — arquivo de imagem servido localmente.
- `index.html` — remove apenas “Em breve,” da chamada dos quizzes na página inicial.

## Aplicação
Extraia os arquivos e envie-os para a raiz do repositório. Substitua `index.html` e `artigo.html`; adicione/substitua `literatura-imagem.js` e a imagem. Não precisa substituir `articles.js`, `script.js`, `style.css` nem a logo.

Depois da publicação, teste `artigo.html?id=CUL-08` e a chamada dos quizzes na página inicial. Se o navegador mantiver a versão antiga em cache, atualize a página novamente após alguns minutos.
