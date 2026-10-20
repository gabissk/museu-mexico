// Ajuste pontual da imagem da matéria CUL-08, sem substituir o cadastro inteiro de matérias.
(function(){
  const article=(window.MIRA_ARTICLES||[]).find(item=>item.id==='CUL-08');
  if(!article)return;
  article.image={
    id:'CUL-08',
    title:'Capa de A History of Mexican Literature',
    caption:'Capa de A History of Mexican Literature, obra coletiva editada por Ignacio M. Sánchez Prado, Anna M. Nogar e José Ramón Ruisánchez Serra.',
    page:'https://www.cambridge.org/core/books/a-history-of-mexican-literature/AD6518CC5B4DD000B445CA0EE73F2957',
    url:'capa_A_History_of_Mexican_Literature.jpg',
    credit:'Divulgação / Cambridge University Press',
    license:'Capa editorial; direitos autorais da editora',
    alt:'Capa do livro A History of Mexican Literature, publicado pela Cambridge University Press.'
  };
})();
