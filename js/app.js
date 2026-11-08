/** InfoHub Horas Complementares: lógica setorial sem armazenamento */
import { initModalController } from './modal-controller.js';
document.addEventListener('DOMContentLoaded', () => {
  initModalController();
  const limits = [100,100,100,100,60,100,60,100,60,80,100,40];
  const labels = ['Publicações','Projetos de extensão','Eventos acadêmicos','Cursos presenciais','Cursos EAD','Iniciação à docência','Representação estudantil','Participação em ligas acadêmicas','Idiomas e informática','Domínios conexos','Estágios não obrigatórios','Outras atividades mediante análise'];
  const totals = Array(limits.length).fill(0);
  const form=document.getElementById('hc-form'), msg=document.getElementById('hc-message');
  const fmt=n=>`${Number(n.toFixed(2)).toLocaleString('pt-BR')} h`;
  const render=()=>{
    const raw=totals.reduce((a,b)=>a+b,0), counted=totals.reduce((a,b,i)=>a+Math.min(b,limits[i]),0);
    document.getElementById('hc-raw').textContent=fmt(raw);
    document.getElementById('hc-counted').textContent=fmt(counted);
    const rows=totals.map((v,i)=>v>0?`<tr><th scope="row">${labels[i]}</th><td>${fmt(v)}</td><td>${fmt(Math.min(v,limits[i]))}</td></tr>`:'').join('');
    document.getElementById('hc-results').innerHTML=rows||'<tr><td colspan="3">Nenhuma atividade adicionada.</td></tr>';
  };
  form.addEventListener('submit',e=>{
    e.preventDefault();const idx=Number(document.getElementById('hc-category').value),value=Number(document.getElementById('hc-hours').value);
    if(!Number.isInteger(idx)||idx<0||idx>=limits.length||!Number.isFinite(value)||value<=0){msg.textContent='Informe uma categoria e um número válido de horas.';return;}
    totals[idx]+=value;msg.textContent=`Adicionadas ${fmt(value)} em ${labels[idx]}. Valores acima do teto da categoria não entram na estimativa.`;
    document.getElementById('hc-hours').value='';render();
  });
  document.getElementById('hc-clear').addEventListener('click',()=>{totals.fill(0);msg.textContent='Cálculo limpo.';render();});
  render();
});
