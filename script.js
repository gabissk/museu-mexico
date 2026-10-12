const menuBotao=document.querySelector('.menu-botao');
const menu=document.querySelector('.menu');
if(menuBotao&&menu){menuBotao.addEventListener('click',()=>{const aberto=menu.classList.toggle('aberto');menuBotao.setAttribute('aria-expanded',String(aberto));menuBotao.textContent=aberto?'×':'☰';});}
const formBusca=document.querySelector('#form-busca');
if(formBusca){formBusca.addEventListener('submit',e=>{e.preventDefault();const termo=document.querySelector('#campo-busca').value.trim().toLowerCase();if(!termo)return;window.location.href='categorias.html?q='+encodeURIComponent(termo);});}
const bancos={
tradicoes:{titulo:'Festas e tradições',perguntas:[
['Qual é uma das imagens mais conhecidas do Día de los Muertos?',['Ovos pintados','Altares com flores e oferendas','Árvores de Natal','Lanternas de papel'],1,'Altares podem reunir fotos, flores, velas e alimentos em memória de pessoas falecidas.'],
['Em qual estado mexicano acontece a famosa Guelaguetza?',['Oaxaca','Yucatán','Sonora','Chihuahua'],0,'A Guelaguetza destaca tradições e danças de comunidades de Oaxaca.'],
['Las Posadas são tradicionalmente celebradas em qual período?',['Em fevereiro','Em julho','Em dezembro','Em setembro'],2,'Las Posadas são celebrações tradicionais do período natalino.']]},
religiao:{titulo:'Religião e crenças',perguntas:[
['Qual religião teve grande expansão durante a colonização espanhola?',['Catolicismo','Xintoísmo','Hinduísmo','Taoismo'],0,'O catolicismo se expandiu durante o período colonial, encontrando tradições locais.'],
['Nossa Senhora de Guadalupe é uma figura importante principalmente em qual tradição?',['Budista','Católica','Nórdica antiga','Egípcia antiga'],1,'Nossa Senhora de Guadalupe tem grande importância religiosa e cultural para muitos mexicanos.'],
['O que significa sincretismo religioso?',['Proibir todas as religiões','Substituir toda cultura local','Encontro e combinação de tradições religiosas','Separar música e dança'],2,'Sincretismo descreve encontros e combinações entre tradições religiosas.']]},
povos:{titulo:'Povos indígenas',perguntas:[
['Qual destas civilizações antigas se desenvolveu na região maia?',['Maias','Vikings','Romanos','Persas'],0,'A civilização maia se desenvolveu em áreas que hoje pertencem ao México e a outros países da América Central.'],
['Qual era a capital dos mexicas, construída em uma ilha do lago Texcoco?',['Machu Picchu','Tenochtitlán','Cusco','Teotihuacán'],1,'Tenochtitlán foi o centro político dos mexicas.'],
['Qual afirmação sobre os povos indígenas do México é correta?',['Todos falam a mesma língua','Existem apenas no passado','Suas culturas e línguas continuam vivas','Não influenciam a cultura atual'],2,'Diversos povos indígenas mantêm suas línguas, tradições e comunidades até hoje.']]},
cultura:{titulo:'Cultura mexicana',perguntas:[
['Qual música é associada a grupos com trompetes, violinos e guitarrón?',['Mariachi','Flamenco','K-pop','Reggae'],0,'O mariachi é uma tradição musical mexicana reconhecida internacionalmente.'],
['O milho tem qual papel na cultura alimentar mexicana?',['É pouco utilizado','É um alimento fundamental','É usado apenas em sobremesas','Não tem relação histórica'],1,'O milho tem importância histórica e cotidiana em muitas cozinhas mexicanas.'],
['La Catrina é especialmente associada a qual celebração?',['Carnaval de Veneza','Ano Novo Lunar','Día de los Muertos','Oktoberfest'],2,'La Catrina tornou-se uma imagem popular associada ao Día de los Muertos.']]}
};
let temaAtual='',indice=0,pontos=0,respondida=false;
const area=document.querySelector('#area-quiz');
if(area){
const cards=document.querySelectorAll('.quiz-card'),titulo=document.querySelector('#quiz-titulo'),etiqueta=document.querySelector('#quiz-etiqueta'),contador=document.querySelector('#quiz-contador'),pergunta=document.querySelector('#pergunta'),opcoes=document.querySelector('#opcoes'),feedback=document.querySelector('#feedback'),proxima=document.querySelector('#proxima'),fim=document.querySelector('#fim-quiz'),pontuacao=document.querySelector('#pontuacao'),progresso=document.querySelector('#progresso');
function comecar(tema){temaAtual=tema;indice=0;pontos=0;cards.forEach(c=>c.hidden=true);area.hidden=false;fim.hidden=true;etiqueta.textContent='QUIZ MIRA';titulo.textContent=bancos[tema].titulo;mostrar();area.scrollIntoView({behavior:'smooth',block:'start'});}
function mostrar(){const q=bancos[temaAtual].perguntas[indice];respondida=false;contador.textContent=`Pergunta ${indice+1} de ${bancos[temaAtual].perguntas.length}`;pergunta.textContent=q[0];opcoes.innerHTML='';feedback.textContent='';feedback.className='';proxima.hidden=true;progresso.style.width=`${indice/bancos[temaAtual].perguntas.length*100}%`;q[1].forEach((texto,i)=>{const b=document.createElement('button');b.className='opcao';b.textContent=texto;b.addEventListener('click',()=>responder(i));opcoes.appendChild(b);});}
function responder(escolhida){if(respondida)return;respondida=true;const q=bancos[temaAtual].perguntas[indice];[...opcoes.children].forEach((b,i)=>{b.disabled=true;if(i===q[2])b.classList.add('correta');if(i===escolhida&&i!==q[2])b.classList.add('errada');});if(escolhida===q[2]){pontos++;feedback.textContent='✓ Você acertou! '+q[3];feedback.className='certo';}else{feedback.textContent='✕ Não foi dessa vez. '+q[3];feedback.className='errado';}proxima.hidden=false;proxima.textContent=indice===bancos[temaAtual].perguntas.length-1?'Ver resultado →':'Próxima pergunta →';}
function terminar(){pergunta.hidden=true;opcoes.hidden=true;feedback.hidden=true;contador.hidden=true;proxima.hidden=true;fim.hidden=false;progresso.style.width='100%';pontuacao.textContent=`Você acertou ${pontos} de ${bancos[temaAtual].perguntas.length}!`;}
cards.forEach(c=>c.addEventListener('click',()=>comecar(c.dataset.tema)));
proxima.addEventListener('click',()=>{if(indice<bancos[temaAtual].perguntas.length-1){indice++;mostrar();}else terminar();});
function resetar(){pergunta.hidden=false;opcoes.hidden=false;feedback.hidden=false;contador.hidden=false;comecar(temaAtual);}
document.querySelector('#reiniciar').addEventListener('click',resetar);
document.querySelector('#voltar-quizzes').addEventListener('click',()=>{area.hidden=true;cards.forEach(c=>c.hidden=false);});
}
