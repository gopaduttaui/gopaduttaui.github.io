const grid=document.querySelector('#project-grid');
const categories=['design','motion','ui','branding','branding','design','design','branding','motion'];
const descriptors=['Social media design','Motion graphics','E-commerce UI','Brand identity','Brand identity','Vector illustration','Social media design','Logo design','2D animation'];
const ordered=[3,4,1,0,2,8,5,6,7];
function renderProjects(filter='all'){
  const list=ordered.map(i=>({...portfolioProjects[i],category:categories[i],descriptor:descriptors[i],number:String(i+1).padStart(2,'0')})).filter(p=>filter==='all'||p.category===filter);
  grid.innerHTML=list.map(p=>`<article class="project"><a class="project-media" href="${p.url}" target="_blank" rel="noopener noreferrer" aria-label="View ${p.name} on Behance"><img src="${p.image}" alt="Cover artwork for ${p.name}" loading="lazy"><span class="project-arrow" aria-hidden="true">↗</span></a><div class="project-info"><div><h3>${p.name}</h3><span>${p.descriptor} · View full project on Behance</span></div><span class="project-number">${p.number}</span></div></article>`).join('');
}
renderProjects();
document.querySelectorAll('.filters button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn))});renderProjects(btn.dataset.filter)}));
document.querySelector('#year').textContent=new Date().getFullYear();
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.site-header nav');toggle.addEventListener('click',()=>{let open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
const tools=[['Adobe Photoshop','Ps','#142a37','#42baf5','Design & image editing'],['Adobe Illustrator','Ai','#362114','#ff9c33','Vector design'],['Adobe After Effects','Ae','#241b40','#bea6ff','Motion graphics'],['Adobe Premiere Pro','Pr','#251f3b','#bdacff','Video editing'],['Adobe Animate CC','An','#402315','#ff974f','2D animation'],['Figma','Fg','#282722','#e87a61','Interface design'],['Canva','Cv','#173744','#72dcda','Quick design workflows']];
const icon='<svg viewBox="0 0 48 48" role="presentation" aria-hidden="true"><rect x="3" y="3" width="42" height="42" rx="9" fill="none" stroke="currentColor" stroke-width="2"/><text x="24" y="32" text-anchor="middle" font-family="Arial,sans-serif" font-size="19" font-weight="700" fill="currentColor">{initial}</text></svg>';
document.querySelector('#tool-grid').innerHTML=tools.map(([name,initial,bg,color,kind])=>`<div class="tool"><div class="tool-icon" style="--tool-bg:${bg};--tool-color:${color}">${icon.replace('{initial}',initial)}</div><div><span>${name}</span><strong>${kind}</strong></div></div>`).join('');

const introStage=document.querySelector('.portrait-stage');
const replayButton=document.querySelector('.replay-intro');
if(introStage&&replayButton){replayButton.addEventListener('click',()=>{const portrait=introStage.querySelector('.gopa-portrait');for(const el of [portrait]){el.style.animation='none';void el.offsetWidth;el.style.animation='';}})}
