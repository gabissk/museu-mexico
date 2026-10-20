# Patch pontual do site MIRA — quizzes e foto da literatura mexicana

Este pacote contém **somente os arquivos que precisam ser adicionados ou substituídos** no repositório atual. Não inclui a logo nem substitui `articles.js` ou os demais arquivos gerais do site.

## Arquivos incluídos

- `quizzes.html` — substitui a página provisória de quizzes pela interface dos 25 quizzes.
- `quizzes-data.js` — contém as 125 perguntas e gabaritos extraídos do arquivo revisado fornecido.
- `quizzes.js` — controla seleção de respostas, feedback verde/vermelho, pontuação, resultado e nova tentativa.
- `literatura-imagem.js` — altera somente a imagem associada à matéria `CUL-08` em tempo de carregamento, sem substituir o cadastro inteiro das matérias.
- `capa_A_History_of_Mexican_Literature.jpg` — arquivo local da capa usada na matéria.

## Como aplicar

1. Envie os arquivos deste pacote para a **raiz do repositório**, substituindo `quizzes.html` e adicionando os quatro arquivos novos.
2. **Não substitua** `articles.js`, `script.js`, `style.css`, `logo-mira.png` nem qualquer outro arquivo que não esteja neste pacote.
3. Aguarde a publicação do GitHub Pages e teste a página Quiz, um quiz até o resultado e a matéria de Literatura mexicana.

## O que foi integrado

- Os 25 títulos, as 125 perguntas, as alternativas e o gabarito foram integrados a partir de `Quizzes_Museu_Mexico_25_Revisado.md`.
- O quiz mostra a resposta correta em verde e, se a resposta selecionada estiver errada, essa opção em vermelho. Ao fim, mostra a pontuação e permite tentar novamente.
- O ajuste de imagem mira exclusivamente `CUL-08` (Literatura mexicana). O texto da matéria e os outros 36 registros não são modificados.
- A imagem da logo e os estilos gerais do site não foram incluídos nem modificados.

## Nota sobre a capa

O pacote de imagem informa como crédito sugerido “Divulgação / Cambridge University Press” e aponta para a página oficial do livro. O arquivo é servido localmente pelo site para evitar depender de um endereço remoto da imagem. A informação de direitos foi descrita como direitos autorais da editora; não foi atribuída uma licença Creative Commons.
