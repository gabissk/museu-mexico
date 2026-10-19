# MIRA — integração editorial e imagens

Esta versão substitui o cadastro antigo de matérias pelos 35 registros do documento editorial oficial. Textos, títulos, subtítulos, IDs, fontes e referências cruzadas foram extraídos do Markdown. As imagens são carregadas por URL remota do Wikimedia Commons e ligadas pelo ID exato.

## Importante sobre as imagens
O catálogo recebido classifica as imagens como candidatas. A integração preserva crédito, licença informada, legenda e página de origem, mas não as declara aprovadas. A rede deste ambiente não permitiu testar os endereços remotos; por isso, links e carregamento real de cada imagem ainda precisam ser verificados em navegador conectado. Imagens que falharem exibem um aviso no artigo.

## Arquivos
- `articles.js`: cadastro integral das 35 matérias e metadados das imagens.
- `script.js`: renderização de artigos, imagens, cards e busca clicável.
- `style.css`: estilos complementares para imagens e créditos.
- `creditos-imagens.html`: página com atribuições, licenças informadas e links de origem.
- `RELATORIO_INTEGRACAO.json`: resumo de validação dos IDs.

Faça backup do repositório antes de substituir arquivos. Envie os arquivos extraídos à raiz do repositório GitHub Pages, mantendo a estrutura plana existente.
