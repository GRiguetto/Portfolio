/* ==========================================================
   ATALHOS
   $    -> document.querySelector
   D    -> os dados de js/dados.js
   root -> <html>, onde ficam as variáveis CSS (--x, --y, --ins)
   ========================================================== */
   const $ = (s) => document.querySelector(s),
   D = DADOS,
   root = document.documentElement;
 
 // el('p', 'classe', 'texto')
 const el = (t, c, x) => {
   const e = document.createElement(t);
   if (c) e.className = c;
   if (x) e.textContent = x;
   return e;
 };
 
 // título (h2) + conteúdo + sussurro escondido
 const sec = (id, t, body, i) => {
   const s = el('section');
   s.id = id;
   s.append(
     el('h2', '', t),
     body,
     el('span', 'sus', D.sussurros[i % D.sussurros.length])
   );
   $('#m').append(s);
 };
 
 
 /* ==========================================================
    TOPO (título da aba, nome, cargo, frase e rodapé)
    ========================================================== */
 document.title = D.nome + ' | Portfólio';
 $('#h-papel').textContent = D.papel;
 $('#h-nome').textContent = D.nome;
 $('#h-frase').textContent = D.frase;
 $('#rodape').textContent = D.rodape;
 
 
 /* ==========================================================
    SEÇÃO: SOBRE
    ========================================================== */
 const so = el('div');
 D.sobre.forEach(p => so.append(el('p', '', p)));
 sec('sobre', 'Sobre', so, 0);
 
 
 /* ==========================================================
    SEÇÃO: ARQUIVOS 
    ========================================================== */
 const lp = el('div');
 
 D.projetos.forEach(p => {
   // Cabeçalho clicável: nome do projeto + ano
   const a = el('article', 'arq'),
     b = el('button', '', p.nome);
   b.setAttribute('aria-expanded', 'false');
   b.append(el('small', '', p.ano));
 
   // Conteúdo que abre: resumo + etiquetas de tecnologia
   const c = el('div', 'corpo'),
     i = el('div', 'in'),
     t = el('ul', 'selos');
   p.stack.forEach(x => t.append(el('li', '', x)));
   i.append(el('p', '', p.resumo), t);
 
   // Link do projeto (só aparece se você preencher "link" em dados.js)
   if (p.link) {
     const l = el('a', 'lnk', 'Ver o projeto');
     l.href = p.link;
     l.target = '_blank';
     l.rel = 'noopener';
     i.append(l);
   }
 
   c.append(i);
   a.append(b, c);
 
   // Clique: abre/fecha o arquivo
   b.onclick = () => {
     const o = a.classList.toggle('aberto');
     b.setAttribute('aria-expanded', o);
   };
 
   lp.append(a);
 });
 
 sec('arquivos', 'Arquivos', lp, 1);
 
 
 /* ==========================================================
    SEÇÃO: BESTIÁRIO (habilidades)
    O nível (1 a 5) vira a variável --v, que o CSS usa
    para desenhar a barrinha vermelha
    ========================================================== */
 const hs = el('div', 'bes');
 
 D.habilidades.forEach(g => {
   const d = el('div'),
     u = el('ul');
 
   g.itens.forEach(([n, v]) => {
     const l = el('li', '', n);
     l.style.setProperty('--v', v);
     l.title = 'Nível ' + v + ' de 5';
     u.append(l);
   });
 
   d.append(el('h3', '', g.grupo), u);
   hs.append(d);
 });
 
 sec('bestiario', 'Bestiário', hs, 2);
 
 
 /* ==========================================================
    SEÇÃO: DIÁRIO (trajetória / linha do tempo)
    ========================================================== */
 const tl = el('ol', 'tl');
 
 D.trajetoria.forEach(x => {
   const li = el('li');
   li.append(
     el('time', '', x.quando),
     el('h3', '', x.titulo),
     el('p', '', x.texto)
   );
   tl.append(li);
 });
 
 sec('diario', 'Diário', tl, 3);
 
 
 /* ==========================================================
    SEÇÃO: INVOCAÇÃO (contato)
    ========================================================== */
 const ct = el('div');
 ct.append(el('p', '', D.contato.texto));
 
 // Formulário: ao enviar, abre o app de e-mail com a mensagem pronta
 const f = el('form', 'inv');
 f.innerHTML = '<label>Seu nome<input name="n" required></label><label>Sua mensagem<textarea name="m" rows="4" required></textarea></label><button class="btn">Enviar mensagem</button>';
 
 f.onsubmit = e => {
   e.preventDefault();
   const d = new FormData(f);
   location.href =
     'mailto:' + D.contato.email +
     '?subject=' + encodeURIComponent('Contato pelo portfólio: ' + d.get('n')) +
     '&body=' + encodeURIComponent(d.get('m'));
 };
 
 // Links (GitHub, LinkedIn etc.)
 const ln = el('p', 'links');
 
 D.contato.links.forEach(([n, u]) => {
   const a = el('a', 'lnk', n);
   a.href = u;
   a.target = '_blank';
   a.rel = 'noopener';
   ln.append(a);
 });
 
 ct.append(f, ln);
 sec('contato', 'Invocação', ct, 4);
 
 
 /* ==========================================================
    LANTERNA
    A luz segue o cursor e revela os sussurros escondidos.
    mx e my guardam a posição do cursor (os esporos também usam)
    ========================================================== */
 let mx = innerWidth / 2,
   my = innerHeight / 2;
 
 addEventListener('pointermove', e => {
   mx = e.clientX;
   my = e.clientY;
   root.style.setProperty('--x', mx + 'px');
   root.style.setProperty('--y', my + 'px');
 
   // Sussurro a menos de 200px do cursor ganha a classe "on" (aparece)
   document.querySelectorAll('.sus').forEach(s => {
     const r = s.getBoundingClientRect();
     s.classList.toggle(
       'on',
       Math.hypot(r.left + r.width / 2 - mx, r.top + r.height / 2 - my) < 200
     );
   });
 });
 
 
 /* ==========================================================
    SANIDADE
    Cai de 99 para 33 conforme você rola a página.
    --ins (0 a 1) alimenta o glitch do nome no CSS.
    Depois de 80% da página, os títulos começam a tremer.
    ========================================================== */
 const sn = $('#sn'),
   san = $('#san');
 
 const sc = () => {
   // p = quanto da página já foi rolado (0 a 1)
   const p = Math.min(1, scrollY / ((document.body.scrollHeight - innerHeight) || 1));
   root.style.setProperty('--ins', p.toFixed(2));
   san.style.setProperty('--p', (100 - p * 67) + '%');
   sn.textContent = Math.round(99 - p * 67);
   document.body.classList.toggle('treme', p > .8);
 };
 
 addEventListener('scroll', sc, { passive: true });
 sc();
 
 
 /* ==========================================================
    ESPOROS NO AR
    Partículas no canvas #po. Ficam mais visíveis perto do cursor.
    Quem pediu menos movimento no sistema vê só um quadro parado.
    ========================================================== */
 const cv = $('#po'),
   g = cv.getContext('2d'),
   mm = matchMedia('(prefers-reduced-motion:reduce)');
 let W, H, P = [];
 
 // Ajusta o canvas à tela e recria as partículas
 // (a quantidade é no máximo 90, menos em telas pequenas)
 const rs = () => {
   W = cv.width = innerWidth;
   H = cv.height = innerHeight;
   P = Array.from({ length: Math.min(90, W / 14) }, () => ({
     x: Math.random() * W,        // posição horizontal
     y: Math.random() * H,        // posição vertical
     r: Math.random() * 1.6 + .3, // tamanho
     v: Math.random() * .25 + .05, // velocidade de subida
     o: Math.random() * .5 + .1   // opacidade
   }));
 };
 
 rs();
 addEventListener('resize', rs);
 
 // Loop de animação: sobe as partículas e redesenha a cada quadro
 (function f() {
   g.clearRect(0, 0, W, H);
 
   P.forEach(p => {
     p.y -= p.v;
     p.x += Math.sin(p.y / 60) * .15;
 
     // Saiu pelo topo, Volta por baixo
     if (p.y < -5) {
       p.y = H + 5;
       p.x = Math.random() * W;
     }
 
     // Brilha mais quando está a menos de 200px do cursor
     const d = Math.hypot(p.x - mx, p.y - my);
     g.fillStyle = `rgba(216,208,191,${d < 200 ? p.o + .4 : p.o * .5})`;
     g.beginPath();
     g.arc(p.x, p.y, p.r, 0, 7);
     g.fill();
   });
 
   if (!mm.matches) requestAnimationFrame(f);
 })();