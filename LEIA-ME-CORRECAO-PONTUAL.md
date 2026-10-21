CORREÇÃO PONTUAL MIRA — 21/10/2026

O que esta correção faz:
1. Corrige a imagem da matéria CUL-08 (Literatura mexicana) no catálogo de dados usado tanto pelos cards de Cultura quanto pela página da matéria. O arquivo capa_A_History_of_Mexican_Literature.jpg já existe no repositório e deve permanecer na raiz.
2. Retira do corpo visível das 37 matérias o bloco final “Para continuar explorando:” e os códigos/títulos que o acompanhavam. A seção “Leia também”, que já gera links clicáveis a partir do campo related, continua funcionando.
3. Não altera logo, textos das matérias fora desse bloco, quizzes nem comportamento do menu mobile.

COMO APLICAR
- No GitHub, abra o repositório gabissk/museu-mexico.
- Substitua somente o arquivo script.js pelo script.js deste pacote e salve/commit a alteração.
- Não precisa substituir articles.js nem artigo.html. O script.js corrige CUL-08 antes de renderizar os cards e a matéria.
- Confirme que capa_A_History_of_Mexican_Literature.jpg continua na raiz do repositório (ele já está lá no repositório verificado).

AJUSTE OPCIONAL PARA COMPUTADOR
O arquivo AJUSTE-DESKTOP-OPCIONAL.css.txt contém CSS para colar no FINAL de style.css. Ele só entra em vigor a partir de 1001px e aumenta a largura máxima do conteúdo a partir de 1200px. O breakpoint mobile de até 760px não é alterado. Esse ajuste é opcional; se preferir não mexer no visual do computador agora, ignore o arquivo.

VERIFICAÇÕES FEITAS NO CÓDIGO
- JavaScript passou na checagem de sintaxe (node --check).
- A rotina remove o bloco final de “Para continuar explorando” em 37/37 matérias do catálogo examinado.
- A correção de imagem usa o nome do arquivo que existe no repositório.

Limite: não tenho como afirmar que a página publicada foi alterada até o script.js ser commitado no GitHub e a versão publicada ser conferida no navegador. Não é uma alteração feita diretamente no repositório.
