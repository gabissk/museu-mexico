document.addEventListener('DOMContentLoaded',()=>{
 const arts=window.MIRA_ARTICLES||[];
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const cats={'historia':['historia.html','História'],'povos-indigenas':['povos-indigenas.html','Povos Indígenas'],'religiao':['religiao.html','Religião'],'cultura':['cultura.html','Cultura'],'simbolos-patrimonio':['simbolos-patrimonio.html','Símbolos e Patrimônio']};
 const menuBtn=document.querySelector('.menu-botao'), menu=document.querySelector('.menu');
 if(menuBtn&&menu){menuBtn.addEventListener('click',()=>{const open=menu.classList.toggle('aberto');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');menuBtn.textContent=open?'×':'☰';});}
 const renderMarkdown=md=>{
   const blocks=String(md||'').trim().split(/\n\s*\n/); let out='';
   for(let b of blocks){b=b.trim();if(!b)continue;
     if(/^#{2,4}\s/.test(b)){const m=b.match(/^(#{2,4})\s+([\s\S]*)$/);const n=Math.min(4,m[1].length+1);out+=`<h${n}>${inline(m[2])}</h${n}>`;continue;}
     if(/^>/.test(b)){out+='<blockquote>'+inline(b.replace(/^>\s?/gm,'').replace(/\n/g,' '))+'</blockquote>';continue;}
     if(/^[-*]\s/m.test(b)){const items=b.split('\n').filter(x=>/^[-*]\s/.test(x)).map(x=>'<li>'+inline(x.replace(/^[-*]\s+/,''))+'</li>').join('');out+='<ul>'+items+'</ul>';continue;}
     out+='<p>'+inline(b.replace(/\n/g,' '))+'</p>';
   } return out;
 };
 const inline=s=>esc(s).replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\*(.*?)\*/g,'<em>$1</em>').replace(/`([^`]+)`/g,'<code>$1</code>');
 document.querySelectorAll('a.materia-card[href*="artigo.html?id="]').forEach(card=>{
   const id=new URL(card.href,location.href).searchParams.get('id'), a=arts.find(x=>x.id===id);if(!a||!a.image?.url||card.querySelector('.imagem-card'))return;
   const img=document.createElement('img');img.className='imagem-card';img.src=a.image.url;img.alt=a.image.alt||a.title;img.loading='lazy';img.decoding='async';
   img.addEventListener('error',()=>{img.classList.add('imagem-indisponivel');img.alt='Imagem indisponível: '+(a.image.caption||a.title);img.removeAttribute('src');});card.prepend(img);
 });
 const params=new URLSearchParams(location.search),articleId=params.get('id'),target=document.getElementById('artigo-conteudo');
 if(target){const a=arts.find(x=>x.id===articleId);
  if(!a){target.innerHTML='<a class="voltar" href="index.html">← Voltar ao início</a><h1>Matéria não encontrada</h1><p>Confira o link e tente novamente.</p>';}
  else{
   const [catUrl,catName]=cats[a.category]||['index.html','Início'];
   const src=(a.sources||[]).map(s=>'<li><a href="'+esc(s.url)+'" target="_blank" rel="noopener noreferrer">'+esc(s.label)+'</a></li>').join('');
   const related=(a.related||[]).map(id=>{const r=arts.find(x=>x.id===id);return r?'<a href="artigo.html?id='+encodeURIComponent(r.id)+'">'+esc(r.title)+' →</a>':''}).filter(Boolean).join('<br>');
   const im=a.image||{};
   const imageHtml=im.url?'<figure class="artigo-imagem"><a href="'+esc(im.page||im.url)+'" target="_blank" rel="noopener noreferrer"><img src="'+esc(im.url)+'" alt="'+esc(im.alt||a.title)+'" loading="eager" decoding="async"></a><figcaption>'+esc(im.caption||a.title)+'<br><small>Crédito: '+esc(im.credit||'não informado no catálogo')+'. Licença/uso: '+esc(im.license||'não informado no catálogo')+'. <a href="'+esc(im.page||im.url)+'" target="_blank" rel="noopener noreferrer">Página original da imagem</a>.</small></figcaption></figure>':'<p class="aviso-imagem">Imagem não disponível no catálogo para esta matéria.</p>';
   target.innerHTML='<a class="voltar" href="'+catUrl+'">← Voltar para '+catName+'</a><p class="artigo-categoria">'+catName+' · '+a.id+'</p><h1>'+esc(a.title)+'</h1><p class="artigo-subtitulo">'+esc(a.subtitle)+'</p>'+imageHtml+'<div class="artigo-corpo">'+renderMarkdown(a.bodyMarkdown)+'</div>'+(src?'<section class="artigo-meta"><h2>Fontes e referências do texto</h2><ul>'+src+'</ul></section>':'')+'<section class="artigo-meta"><h2>Crédito e licença da imagem</h2><p><strong>Crédito:</strong> '+esc(im.credit||'não informado no catálogo')+'</p><p><strong>Licença/uso:</strong> '+esc(im.license||'não informado no catálogo')+'</p><p><a href="'+esc(im.page||im.url||'#')+'" target="_blank" rel="noopener noreferrer">Consultar a página original da imagem</a></p></section>'+(related?'<section class="relacionadas"><h2>Leia também</h2>'+related+'</section>':'');
   const imEl=target.querySelector('.artigo-imagem img');if(imEl)imEl.addEventListener('error',()=>{const fig=imEl.closest('figure');if(fig){imEl.remove();const p=document.createElement('p');p.textContent='Não foi possível carregar esta imagem. Consulte a página original pelo link dos créditos.';fig.prepend(p);}});
   document.title=a.title+' | MIRA';
  }
 }
 const form=document.getElementById('form-busca'),input=document.getElementById('campo-busca'),results=document.getElementById('resultados-busca');
 if(form&&input&&results){form.addEventListener('submit',e=>{e.preventDefault();const q=input.value.trim().toLocaleLowerCase('pt-BR');if(!q){results.hidden=true;results.innerHTML='';return;}const found=arts.filter(a=>(a.id+' '+a.title+' '+a.subtitle+' '+a.bodyMarkdown).toLocaleLowerCase('pt-BR').includes(q));results.hidden=false;results.innerHTML='<h2>Resultados da pesquisa ('+found.length+')</h2>'+(found.length?found.map(a=>'<a class="resultado-busca-link" href="artigo.html?id='+encodeURIComponent(a.id)+'"><strong>'+esc(a.title)+'</strong><br><small>'+esc(a.subtitle||a.category)+'</small><span aria-hidden="true"> → Abrir matéria</span></a>').join(''):'<p>Nenhuma matéria encontrada. Tente outra palavra.</p>');results.scrollIntoView({behavior:'smooth',block:'start'});});}
});
