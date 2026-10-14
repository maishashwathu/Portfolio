'use strict';
(() => {
  const projects = window.portfolioProjects;
  const root = document.getElementById('projects');
  const svg = body => `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${body}</svg>`;
  const line = (x1,y1,x2,y2,color='#6b8b57',width=2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}"/>`;
  const circle = (x,y,r,fill='#b4d68b') => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`;
  const label = (x,y,text,size=10,color='#a9bc99') => `<text x="${x}" y="${y}" fill="${color}" font-size="${size}" font-family="monospace">${text}</text>`;
  function artwork(type) {
    if(type==='molecule'||type==='polymer') {
      const shift=type==='polymer'?25:0;
      let b='<rect width="600" height="240" fill="#18251b"/>';
      for(let i=0;i<9;i++) b+=line(i*75,0,i*75,240,'#29362a',.4);
      const points=[[200,100],[255,68],[310,100],[310,163],[255,195],[200,163]];
      points.forEach((p,i)=>{const n=points[(i+1)%6];b+=line(p[0],p[1]-shift,n[0],n[1]-shift);});
      b+=line(310,100-shift,372,72)+line(372,72,430,109)+line(430,109,430,174)+line(430,174,373,207)+line(373,207,310,163-shift)+line(200,100-shift,143,67)+line(200,163-shift,139,197);
      [...points.map(p=>[p[0],p[1]-shift]),[372,72],[430,109],[430,174],[373,207],[143,67],[139,197]].forEach((p,i)=>{b+=circle(p[0],p[1],i%3===0?13:7,i%3===0?'#b5d98b':'#62835c');});
      b+=label(45,205,type==='polymer'?'REPEAT. REPRESENT. PREDICT.':'ATOMS → GRAPHS → EMBEDDINGS',9);
      return svg(b);
    }
    if(type==='audio') {
      let b='<rect width="600" height="240" fill="#17211c"/>';
      for(let i=0;i<76;i++){const h=15+Math.abs(Math.sin(i*1.7)*Math.cos(i*.13))*125;b+=`<rect x="${42+i*7}" y="${125-h/2}" width="3" height="${h}" fill="${i%4===0?'#d0c28a':'#79a883'}" opacity="${.45+Math.abs(Math.sin(i))*.5}"/>`;}
      return svg(b+line(40,125,565,125,'#b7c98e',.5)+label(42,207,'FREQUENCY / TIME / IDENTITY',9));
    }
    if(type==='market') {
      let b='<rect width="600" height="240" fill="#24251b"/>';
      for(let y=55;y<210;y+=37)b+=line(40,y,565,y,'#46503b',.5);
      for(let k=0;k<3;k++){let d='';for(let i=0;i<72;i++){const y=155-k*31+Math.sin(i*.7+k)*9+Math.cos(i*2.4)*6-(i===44?55:0);d+=(i?' L':'M')+(40+i*7.2)+' '+y;}b+=`<path d="${d}" fill="none" stroke="${['#bbd28b','#c6ad75','#688d75'][k]}" stroke-width="1.7"/>`;}
      b+=line(357,40,357,195,'#cbbb80',1)+circle(357,40,3,'#cbbb80')+label(370,51,'DEVIATION',8)+label(42,217,'ILLUSTRATIVE SIGNAL / NOT MARKET DATA',8);
      return svg(b);
    }
    if(type==='text') {
      let b='<rect width="600" height="240" fill="#24251d"/>';
      for(let j=0;j<5;j++){for(let i=0;i<8;i++){const w=20+((i*17+j*13)%28);b+=`<rect x="${85+i*53}" y="${60+j*26}" width="${w}" height="7" rx="1" fill="${(i+j)%5===0?'#bfd78e':'#555c47'}"/>`;}}
      b+='<rect x="239" y="103" width="128" height="30" fill="none" stroke="#b4d287" stroke-dasharray="4 3"/>';
      return svg(b+label(85,211,'TEXT → FEATURES → CLASSIFICATION',9));
    }
    if(type==='energy') {
      let b='<rect width="600" height="240" fill="#19251d"/>';
      for(let r=0;r<4;r++)for(let c=0;c<24;c++){b+=`<rect x="${82+c*19}" y="${59+r*30}" width="15" height="21" rx="1" fill="${(c+r*3)%7<3?'#9cbb75':'#304735'}"/>`;}
      return svg(b+label(82,200,'00:00',8)+label(484,200,'24:00',8)+label(82,225,'SIMULATED APPLIANCE SCHEDULE',9));
    }
    return svg('<rect width="600" height="240" fill="#242a1d"/>'+label(70,120,'∑',65,'#b9d289')+label(205,160,'x²',55,'#9db282')+label(340,100,'π',65,'#c6b680')+label(450,165,'√',65,'#93b391')+label(80,208,'SMALL CHALLENGES. BIG DISCOVERIES.',9));
  }
  projects.forEach(p => {
    const card=document.createElement('article');card.className='project-card';card.dataset.category=p.filter;
    card.innerHTML=`<div class="project-visual">${artwork(p.visual)}<span class="project-id">EXPERIMENT / ${p.id}</span><span class="visual-tag">${p.category}</span></div><div class="project-content"><p class="project-category">${p.category}</p><h3>${p.title}</h3><p class="project-description">${p.description}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="project-bottom"><button class="case-button" data-id="${p.id}" aria-label="Read case study: ${p.slug}">Read field notes <span aria-hidden="true">↗</span></button><a href="https://github.com/maishashwathu/${p.slug}" target="_blank" rel="noopener" aria-label="View ${p.slug} source on GitHub">GitHub ↗</a></div></div>`;
    root.appendChild(card);
  });
  document.querySelectorAll('.filter').forEach(button => button.addEventListener('click',()=>{
    const filter=button.dataset.filter;
    document.querySelectorAll('.filter').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
    let count=0;
    root.querySelectorAll('.project-card').forEach(card=>{card.hidden=filter!=='all'&&card.dataset.category!==filter;if(!card.hidden)count++;});
    document.getElementById('project-count').textContent=`${count} PROJECT${count===1?'':'S'}`;
  }));
  const dialog=document.getElementById('case-study');
  let opener;
  root.addEventListener('click',event=>{
    const button=event.target.closest('.case-button');if(!button)return;
    const p=projects.find(x=>x.id===button.dataset.id);opener=button;
    document.getElementById('case-content').innerHTML=`<p class="project-category">${p.category}</p><h2 id="case-title">${p.title}</h2><p>${p.summary}</p><div class="result"><strong>${p.result}</strong><p>${p.resultNote}</p></div><h3>Inside the experiment</h3><ul>${p.methods.map(x=>`<li>${x}</li>`).join('')}</ul><h3>What the result means</h3><p>${p.limitation}</p><div class="tags">${p.tags.map(x=>`<span>${x}</span>`).join('')}</div><a class="button primary" href="https://github.com/maishashwathu/${p.slug}" target="_blank" rel="noopener">Explore repository ↗</a>${p.extra?`<p><a class="text-link" href="https://github.com/maishashwathu/${p.slug}/${p.extra.path}" target="_blank" rel="noopener">${p.extra.label} ↗</a></p>`:''}`;
    dialog.showModal();dialog.scrollTop=0;document.body.classList.add('dialog-open');
  });
  document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');opener?.focus();});
  const toggle=document.querySelector('.menu-toggle'),nav=document.getElementById('navigation');
  function closeMenu(){toggle.setAttribute('aria-expanded','false');nav.classList.remove('open');}
  toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();toggle.focus();}});
  document.getElementById('copy-email').addEventListener('click',async event=>{
    const button=event.currentTarget,status=document.getElementById('copy-status');
    try{await navigator.clipboard.writeText('shashwatjain8733@gmail.com');button.textContent='Copied ✓';status.textContent='Email address copied to clipboard.';setTimeout(()=>button.textContent='Copy email',2500);}catch{button.textContent='shashwatjain8733@gmail.com';status.textContent='Copy unavailable. Email address is displayed below the contact links.';}
  });
  document.getElementById('year').textContent=new Date().getFullYear();
})();
