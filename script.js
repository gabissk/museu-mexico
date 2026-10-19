document.addEventListener('DOMContentLoaded',()=>{
 const menuBtn=document.querySelector('.menu-botao'), menu=document.querySelector('.menu');
 document.querySelectorAll('a[href]').forEach(link=>{const href=link.getAttribute('href');if(href && !href.startsWith('#') && !/^(https?:|mailto:|tel:|javascript:)/i.test(href)){link.setAttribute('href',href.replace(/^\.\//,''));}});
 if(menuBtn&&menu){menuBtn.addEventListener('click',()=>{const open=menu.classList.toggle('aberto');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.textContent=open?'×':'☰';});}
 const arts=window.MIRA_ARTICLES||[];
 const params=new URLSearchParams(location.search); const articleId=params.get('id');
 if(document.getElementById('artigo-conteudo')){
  const target=document.getElementById('artigo-conteudo'); const a=arts.find(x=>x.id===articleId);
  if(!a){target.innerHTML='<a class="voltar" href="index.html">← Voltar ao início</a><h1>Matéria não encontrada</h1><p>Confira o link e tente novamente.</p>';}
  else{
   const cats={'historia':['historia.html','História'],'povos-indigenas':['povos-indigenas.html','Povos Indígenas'],'religiao':['religiao.html','Religião'],'cultura':['cultura.html','Cultura'],'simbolos-patrimonio':['simbolos-patrimonio.html','Símbolos e Patrimônio']};
   const [catUrl,catName]=cats[a.category]||['index.html','Início'];
   const body=a.body.map(p=>'<p>'+escapeHTML(p).replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')+'</p>').join('');
   const sources=(a.sources||[]).map(s=>'<li><a href="'+escapeAttr(s.url)+'" target="_blank" rel="noopener noreferrer">'+escapeHTML(s.label)+'</a></li>').join('');
   const related=(a.related||[]).map(id=>{const r=arts.find(x=>x.id===id);return r?'<a href="artigo.html?id='+r.id+'">'+escapeHTML(r.title)+' →</a>':''}).join('<br>');
   target.innerHTML='<a class="voltar" href="'+catUrl+'">← Voltar para '+catName+'</a><p class="artigo-categoria">'+catName+' · '+a.id+'</p><h1>'+escapeHTML(a.title)+'</h1><p class="artigo-subtitulo">'+escapeHTML(a.subtitle||'')+'</p><div class="artigo-corpo">'+body+'</div>'+(a.imageNote?'<div class="aviso-imagem"><strong>Sugestão de imagem:</strong> '+escapeHTML(a.imageNote)+ '</div>':'')+'<section class="artigo-meta"><h2>Fontes e créditos</h2>'+(sources?'<ul>'+sources+'</ul>':'<p>As fontes específicas desta matéria ainda precisam ser acrescentadas.</p>')+'<p><strong>Crédito da imagem:</strong> '+escapeHTML(a.credit||'Verifique autor e licença do arquivo antes de publicar.')+'</p><p class="nota-licenca">As sugestões de imagem não são imagens já licenciadas. Confirme autor, licença e atribuição no arquivo escolhido.</p></section>'+(related?'<section class="relacionadas"><h2>Leia também</h2>'+related+'</section>':'');
   document.title=a.title+' | MIRA';
  }
 }
 const form=document.getElementById('form-busca'), input=document.getElementById('campo-busca'), results=document.getElementById('resultados-busca');
 if(form&&input&&results){form.addEventListener('submit',e=>{e.preventDefault();const q=input.value.trim().toLocaleLowerCase('pt-BR');if(!q){results.hidden=true;return;}const found=arts.filter(a=>(a.title+' '+a.subtitle+' '+a.body.join(' ')).toLocaleLowerCase('pt-BR').includes(q));results.hidden=false;results.innerHTML='<h2>Resultados da pesquisa</h2>'+(found.length?found.map(a=>'<a href="./artigo.html?id='+encodeURIComponent(a.id)+'"><strong>'+escapeHTML(a.title)+'</strong><br><small>'+escapeHTML(a.subtitle||a.category)+'</small></a>').join(''):'<p>Nenhuma matéria encontrada. Tente outra palavra.</p>');results.scrollIntoView({behavior:'smooth',block:'start'});});}
 function escapeHTML(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
 function escapeAttr(s){return escapeHTML(s);}
});
