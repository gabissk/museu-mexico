# MIRA — integração do editorial completo e limpeza dos avisos de imagem

Esta versão usa o arquivo de matérias completas (`Museu_Mexico_Materias_Completas(1).zip`) e o catálogo de imagens alinhado às 37 matérias. O conteúdo editorial é armazenado em `articles.js` sem resumir o corpo; títulos, subtítulos e IDs foram preservados.

Os avisos genéricos de “candidata”, “confirmar antes de publicar” e status de revisão foram retirados das páginas. Os créditos, as informações de licença/uso e os links de origem continuam visíveis.

## Verificações realizadas
- 37 matérias com IDs únicos.
- Correspondência exata entre os IDs das matérias e os 37 registros de imagem.
- JavaScript estruturado para renderizar intertítulos, parágrafos, listas e curiosidades do editorial completo.
- Busca consulta o texto integral e seus resultados são links clicáveis.

## Limitação
Não foi possível verificar os links remotos nem o carregamento real das imagens em navegador conectado neste ambiente.
