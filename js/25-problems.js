'use strict';
/* 25-problems.js — Экран выбора режима и решебник задач по темам курса. */

const PROBLEM_TOPICS = [
  {
    chapter:'Введение в стереометрию',
    title:'§1. Многогранники и их изображения',
    tasks:[
      { title:'Куб: элементы',
        text:'Дан куб ABCDA₁B₁C₁D₁. Перечислите его грани, рёбра и вершины. Сколько их?',
        shape:'cube',
        hint:'У куба 6 граней (нижняя, верхняя и четыре боковые), каждое ребро принадлежит двум граням.',
        res:'Вершин — 8, рёбер — 12, граней — 6. Грани: ABCD, A₁B₁C₁D₁, ABB₁A₁, BCC₁B₁, CDD₁C₁, DAA₁D₁.' },
      { title:'Тетраэдр: грани',
        text:'Дан тетраэдр DABC. Сколько у него граней и какую форму они имеют? Постройте все рёбра.',
        shape:'tetra',
        hint:'Тетраэдр — простейший многогранник: все четыре его грани — треугольники.',
        res:'4 треугольные грани (ABC, DAB, DBC, DCA), 6 рёбер, 4 вершины.' },
      { title:'Призма: основания и боковые грани',
        text:'Дана правильная треугольная призма ABCA₁B₁C₁. Чем являются её основания и боковые грани?',
        shape:'prism3',
        hint:'Основания — равные многоугольники в параллельных плоскостях; боковые грани — прямоугольники.',
        res:'Основания — равные треугольники ABC и A₁B₁C₁; боковые грани ABB₁A₁, BCC₁B₁, CAA₁C₁ — прямоугольники.' }
    ]
  },
  {
    chapter:'Введение в стереометрию',
    title:'§2. Аксиомы стереометрии',
    tasks:[
      { title:'Прямая лежит в плоскости грани',
        text:'Дан куб ABCDA₁B₁C₁D₁. Точки A и B лежат в плоскости грани ABCD. Что можно сказать о прямой AB?',
        shape:'cube',
        hint:'Аксиома 2: если две точки прямой лежат в плоскости, то и вся прямая лежит в этой плоскости.',
        construct:[{t:'plane',a:'A',b:'B',c:'C'},{t:'line',a:'A',b:'B'}],
        res:'По A2 прямая AB целиком лежит в плоскости ABCD.' },
      { title:'Три точки задают плоскость',
        text:'Дан куб. Через вершины A, B и D₁ проведите плоскость. Сколько таких плоскостей существует?',
        shape:'cube',
        hint:'Через три точки, не лежащие на одной прямой, проходит ровно одна плоскость (A1).',
        construct:[{t:'plane',a:'A',b:'B',c:'D₁'}],
        res:'Точки A, B, D₁ не лежат на одной прямой, поэтому плоскость (ABD₁) единственна (A1).' }
    ]
  },
  {
    chapter:'Введение в стереометрию',
    title:'§3. Следствия из аксиом',
    tasks:[
      { title:'Плоскость через прямую и точку',
        text:'Дан куб. Через прямую AB и точку C₁ проведите плоскость. Обоснуйте её единственность.',
        shape:'cube',
        hint:'Следствие 1: через прямую и не лежащую на ней точку проходит единственная плоскость.',
        construct:[{t:'line',a:'A',b:'B'},{t:'plane',a:'A',b:'B',c:'C₁'}],
        res:'C₁ не лежит на AB, поэтому плоскость (ABC₁) — единственная (следствие 1).' },
      { title:'Плоскость через две пересекающиеся прямые',
        text:'Дан куб. Диагонали AC и BD нижней грани пересекаются в её центре. Проведите через них плоскость.',
        shape:'cube',
        hint:'Следствие 2: через две пересекающиеся прямые проходит единственная плоскость.',
        construct:[{t:'line',a:'A',b:'C'},{t:'line',a:'B',b:'D'},{t:'plane',a:'A',b:'B',c:'C'}],
        res:'Прямые AC и BD пересекаются и лежат в плоскости ABCD — это и есть единственная искомая плоскость.' }
    ]
  },
  {
    chapter:'Введение в стереометрию',
    title:'§4. Построение сечений многогранников плоскостью',
    tasks:TASKS
  },
  {
    chapter:'Глава 2. Параллельность прямых и плоскостей',
    title:'§1. Параллельные прямые в пространстве',
    tasks:[
      { title:'Параллельные боковые рёбра куба',
        text:'Дан куб ABCDA₁B₁C₁D₁. Докажите, что прямые AA₁ и CC₁ параллельны.',
        shape:'cube',
        hint:'Прямые лежат в одной плоскости — диагональном сечении ACC₁A₁ — и не пересекаются.',
        construct:[{t:'line',a:'A',b:'A₁'},{t:'line',a:'C',b:'C₁'},{t:'plane',a:'A',b:'C',c:'C₁'}],
        res:'AA₁ и CC₁ лежат в плоскости ACC₁A₁ и не имеют общих точек, значит AA₁ ∥ CC₁.' },
      { title:'Параллельные рёбра оснований',
        text:'Дан куб. Докажите, что AB ∥ A₁B₁ и AB ∥ D₁C₁.',
        shape:'cube',
        hint:'AB и A₁B₁ — соответственные рёбра параллельных граней ABCD и A₁B₁C₁D₁.',
        construct:[{t:'seg',a:'A',b:'B'},{t:'seg',a:'A₁',b:'B₁'},{t:'seg',a:'D₁',b:'C₁'}],
        res:'AB ∥ A₁B₁ как рёбра параллельных граней, а A₁B₁ ∥ D₁C₁, значит AB ∥ D₁C₁.' }
    ]
  },
  {
    chapter:'Глава 2. Параллельность прямых и плоскостей',
    title:'§2. Параллельность прямой и плоскости',
    tasks:[
      { title:'Ребро параллельно грани',
        text:'Дан куб. Докажите, что прямая AB параллельна плоскости A₁B₁C₁.',
        shape:'cube',
        hint:'Признак: прямая параллельна плоскости, если она параллельна некоторой прямой этой плоскости.',
        construct:[{t:'seg',a:'A',b:'B'},{t:'plane',a:'A₁',b:'B₁',c:'C₁'},{t:'seg',a:'A₁',b:'B₁'}],
        res:'AB ∥ A₁B₁, а A₁B₁ ⊂ (A₁B₁C₁), значит AB ∥ (A₁B₁C₁).' },
      { title:'Средняя линия параллельна плоскости',
        text:'Дан куб, M — середина AB, N — середина AD. Докажите, что MN параллельна плоскости ABCD.',
        shape:'cube', mids:[{label:'M',a:'A',b:'B'},{label:'N',a:'A',b:'D'}],
        hint:'MN — средняя линия треугольника ABD, поэтому MN ∥ BD, а BD лежит в плоскости ABCD.',
        construct:[{t:'seg',a:'M',b:'N'},{t:'line',a:'B',b:'D'},{t:'plane',a:'A',b:'B',c:'C'}],
        res:'MN ∥ BD ⊂ (ABCD), значит MN ∥ (ABCD).' }
    ]
  },
  {
    chapter:'Глава 2. Параллельность прямых и плоскостей',
    title:'§3. Скрещивающиеся прямые',
    tasks:[
      { title:'Скрещивающиеся рёбра куба',
        text:'Дан куб ABCDA₁B₁C₁D₁. Докажите, что прямые AA₁ и BC скрещиваются.',
        shape:'cube',
        hint:'Прямые не параллельны и не пересекаются, значит не лежат в одной плоскости.',
        construct:[{t:'line',a:'A',b:'A₁'},{t:'line',a:'B',b:'C'}],
        res:'AA₁ и BC не параллельны и общих точек не имеют — они скрещиваются.' },
      { title:'Противоположные рёбра тетраэдра',
        text:'Дан тетраэдр DABC. Докажите, что прямые AB и CD скрещиваются.',
        shape:'tetra',
        hint:'Если бы AB и CD лежали в одной плоскости, все четыре вершины были бы в ней — но тетраэдр не плоский.',
        construct:[{t:'line',a:'A',b:'B'},{t:'line',a:'C',b:'D'}],
        res:'AB и CD не параллельны и не пересекаются, значит скрещиваются.' }
    ]
  },
  {
    chapter:'Глава 2. Параллельность прямых и плоскостей',
    title:'§4. Угол между прямыми',
    tasks:[
      { title:'Угол между скрещивающимися рёбрами',
        text:'Дан куб ABCDA₁B₁C₁D₁, ребро равно 1. Найдите угол между прямыми AB₁ и BC₁.',
        shape:'cube',
        hint:'Перенесите BC₁ параллельно в точку A — получится AD₁. Треугольник AB₁D₁ равносторонний.',
        construct:[{t:'seg',a:'A',b:'B₁'},{t:'seg',a:'B',b:'C₁'},{t:'seg',a:'A',b:'D₁'}],
        res:'Угол равен 60°: в равностороннем треугольнике AB₁D₁ все углы по 60°.' },
      { title:'Перпендикулярные прямые',
        text:'Дан куб. Найдите угол между диагоналями граней AC и B₁D₁.',
        shape:'cube',
        hint:'Перенесите B₁D₁ в BD: угол между AC и BD в квадрате равен 90°.',
        construct:[{t:'seg',a:'A',b:'C'},{t:'seg',a:'B₁',b:'D₁'},{t:'seg',a:'B',b:'D'}],
        res:'Угол равен 90°: диагонали квадрата перпендикулярны, а параллельный перенос сохраняет угол.' }
    ]
  },
  {
    chapter:'Глава 2. Параллельность прямых и плоскостей',
    title:'§5. Параллельность плоскостей',
    tasks:[
      { title:'Параллельные основания',
        text:'Дан куб. Докажите, что плоскости ABCD и A₁B₁C₁D₁ параллельны.',
        shape:'cube',
        hint:'Две пересекающиеся прямые AB и AD одной плоскости параллельны прямым A₁B₁ и A₁D₁ другой.',
        construct:[{t:'plane',a:'A',b:'B',c:'C'},{t:'plane',a:'A₁',b:'B₁',c:'C₁'},{t:'seg',a:'A',b:'B'},{t:'seg',a:'A₁',b:'B₁'}],
        res:'AB ∥ A₁B₁ и AD ∥ A₁D₁ ⇒ (ABCD) ∥ (A₁B₁C₁D₁).' },
      { title:'Параллельные сечения куба',
        text:'Дан куб ABCDA₁B₁C₁D₁. Докажите, что плоскости (AB₁C) и (A₁DC₁) параллельны.',
        shape:'cube',
        hint:'AB₁ ∥ DC₁ и B₁C ∥ A₁D — две пересекающиеся прямые одной плоскости параллельны двум прямым другой.',
        construct:[{t:'plane',a:'A',b:'B₁',c:'C'},{t:'plane',a:'A₁',b:'D',c:'C₁'}],
        res:'AB₁ ∥ DC₁ и B₁C ∥ A₁D ⇒ (AB₁C) ∥ (A₁DC₁).' }
    ]
  },
  {
    chapter:'Глава 3. Перпендикулярность прямой и плоскости. Перпендикулярность плоскостей',
    title:'§1. Перпендикулярность прямой и плоскости',
    tasks:[
      { title:'Ребро перпендикулярно основанию',
        text:'Дан куб. Докажите, что AA₁ перпендикулярна плоскости ABCD.',
        shape:'cube',
        hint:'Признак: прямая перпендикулярна плоскости, если она перпендикулярна двум пересекающимся прямым этой плоскости.',
        construct:[{t:'seg',a:'A',b:'A₁'},{t:'plane',a:'A',b:'B',c:'D'},{t:'seg',a:'A',b:'B'},{t:'seg',a:'A',b:'D'}],
        res:'AA₁ ⟂ AB и AA₁ ⟂ AD, значит AA₁ ⟂ (ABCD).' },
      { title:'Высота правильной пирамиды',
        text:'Дана правильная пирамида SABCD с вершиной S над центром O основания. Докажите, что SO перпендикулярна плоскости ABCD.',
        shape:'pyramid4',
        hint:'Постройте диагонали AC и BD — они пересекаются в центре O основания.',
        construct:[{t:'line',a:'A',b:'C'},{t:'line',a:'B',b:'D'},{t:'plane',a:'A',b:'B',c:'C'}],
        res:'SO ⟂ AC и SO ⟂ BD ⇒ SO ⟂ (ABCD) по признаку перпендикулярности прямой и плоскости.' }
    ]
  },
  {
    chapter:'Глава 3. Перпендикулярность прямой и плоскости. Перпендикулярность плоскостей',
    title:'§2. Перпендикуляр и наклонная. Расстояние от точки до плоскости',
    tasks:[
      { title:'Перпендикуляр, наклонная и проекция',
        text:'Дан куб. Из вершины A₁ проведены перпендикуляр к плоскости ABCD и наклонная A₁C. Укажите перпендикуляр, наклонную и её проекцию.',
        shape:'cube',
        hint:'Перпендикуляр из A₁ падает в A; проекция наклонной A₁C — это AC.',
        construct:[{t:'seg',a:'A₁',b:'A'},{t:'seg',a:'A₁',b:'C'},{t:'seg',a:'A',b:'C'},{t:'plane',a:'A',b:'B',c:'C'}],
        res:'Перпендикуляр — A₁A, наклонная — A₁C, её проекция — AC; расстояние от A₁ до (ABCD) равно AA₁.' },
      { title:'Наклонная к плоскости',
        text:'Дан куб с ребром 2. Найдите расстояние от C₁ до плоскости ABCD и длину наклонной AC₁.',
        shape:'cube',
        hint:'Перпендикуляр из C₁ падает в C, проекция наклонной — диагональ AC = a√2.',
        construct:[{t:'seg',a:'C₁',b:'C'},{t:'seg',a:'A',b:'C₁'},{t:'plane',a:'A',b:'B',c:'C'}],
        res:'Расстояние CC₁ = 2; наклонная AC₁ = √((2√2)² + 2²) = √12 = 2√3.' }
    ]
  },
  {
    chapter:'Глава 3. Перпендикулярность прямой и плоскости. Перпендикулярность плоскостей',
    title:'§3. Угол между прямой и плоскостью',
    tasks:[
      { title:'Угол диагонали куба с основанием',
        text:'Дан куб с ребром 1. Найдите угол между диагональю AC₁ и плоскостью основания ABCD.',
        shape:'cube',
        hint:'Наклонная AC₁, перпендикуляр C₁C, проекция AC = √2. Тогда tg φ = CC₁ / AC.',
        construct:[{t:'seg',a:'A',b:'C₁'},{t:'seg',a:'C',b:'C₁'},{t:'seg',a:'A',b:'C'},{t:'plane',a:'A',b:'B',c:'C'}],
        res:'tg φ = 1/√2, значит φ = arctan(1/√2) ≈ 35,26°.' },
      { title:'Угол наклонной с гранью',
        text:'Дан куб с ребром 1. Найдите угол между AC₁ и плоскостью грани BCC₁B₁.',
        shape:'cube',
        hint:'Проекция AC₁ на плоскость BCC₁ — отрезок BC₁.',
        construct:[{t:'seg',a:'A',b:'C₁'},{t:'seg',a:'B',b:'C₁'},{t:'plane',a:'B',b:'C',c:'C₁'}],
        res:'tg φ = AB / BC₁ = 1/√2, значит φ ≈ 35,26°.' }
    ]
  },
  {
    chapter:'Глава 3. Перпендикулярность прямой и плоскости. Перпендикулярность плоскостей',
    title:'§4. Двугранный угол. Перпендикулярность плоскостей',
    tasks:[
      { title:'Двугранный угол куба',
        text:'Дан куб. Найдите двугранный угол между плоскостями ABC и ABB₁ (ребро AB).',
        shape:'cube',
        hint:'Линейный угол — угол между BC и BB₁ в плоскости, перпендикулярной AB.',
        construct:[{t:'plane',a:'A',b:'B',c:'C'},{t:'plane',a:'A',b:'B',c:'B₁'},{t:'seg',a:'B',b:'C'},{t:'seg',a:'B',b:'B₁'}],
        res:'BC ⟂ AB, BB₁ ⟂ AB и BC ⟂ BB₁, значит линейный угол равен 90° и плоскости перпендикулярны.' },
      { title:'Перпендикулярность соседних граней',
        text:'Дан куб. Докажите, что плоскости ABCD и ABB₁A₁ перпендикулярны.',
        shape:'cube',
        hint:'Плоскость ABB₁A₁ содержит прямую BB₁, перпендикулярную плоскости ABCD.',
        construct:[{t:'plane',a:'A',b:'B',c:'C'},{t:'plane',a:'A',b:'B',c:'B₁'},{t:'seg',a:'B',b:'B₁'}],
        res:'BB₁ ⟂ (ABCD) и BB₁ ⊂ (ABB₁A₁), значит (ABCD) ⟂ (ABB₁A₁).' }
    ]
  }
];

let curTopicIdx = 0;
let curProblem = null;

/* ---------- переключение режимов ---------- */
function showMode(mode){
  const home=document.getElementById('home');
  const app=document.getElementById('app');
  const probs=document.getElementById('problems');
  if(home) home.hidden = mode!=='home';
  if(app) app.hidden = mode!=='build';
  if(probs) probs.hidden = mode!=='problems';
  if(mode==='build'){
    if(typeof resize==='function') resize();
    if(typeof draw==='function') draw();
  }else{
    hideProblemBar();
  }
  if(mode==='problems') renderProblems();
}
function initHome(){
  document.querySelectorAll('#home .homeCard').forEach(b=>{
    b.addEventListener('click',()=>showMode(b.dataset.mode));
  });
  const hb=document.getElementById('homeBtn');
  if(hb) hb.addEventListener('click',()=>{ hideProblemBar(); showMode('home'); });
  const ph=document.getElementById('probHome');
  if(ph) ph.addEventListener('click',()=>showMode('home'));
  wireProblemBar();
  showMode('home');
}

/* ---------- панель текущей задачи над сценой ---------- */
function wireProblemBar(){
  const close=document.getElementById('pbClose');
  if(close) close.addEventListener('click',hideProblemBar);
  const hint=document.getElementById('pbHint');
  if(hint) hint.addEventListener('click',()=>{ if(curProblem) flash(curProblem.hint||'Нет подсказки'); });
  const ans=document.getElementById('pbAns');
  if(ans) ans.addEventListener('click',()=>{ if(curProblem){ loadTask(curProblem,true); showProblemBar(curProblem,true); } });
  const tasks=document.getElementById('pbTasks');
  if(tasks) tasks.addEventListener('click',()=>showMode('problems'));
}
function hideProblemBar(){
  curProblem=null;
  const b=document.getElementById('problemBar');
  if(b) b.hidden=true;
}
const pbEsc = s => String(s==null?'':s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
function showProblemBar(task, reveal){
  curProblem=task;
  const bar=document.getElementById('problemBar');
  const t=document.getElementById('pbTitle');
  const x=document.getElementById('pbText');
  if(t) t.textContent=task.title||'Задача';
  if(x){
    let h=pbEsc(task.text);
    if(reveal && task.res) h+='<div style="margin-top:6px;color:#4ade80"><b>Ответ:</b> '+pbEsc(task.res)+'</div>';
    x.innerHTML=h;
  }
  if(bar) bar.hidden=false;
}
/* открыть задачу в 3D-режиме; reveal — сразу построить решение */
function openProblem(task, reveal){
  hideProblemBar();
  showMode('build');
  loadTask(task, reveal);
  showProblemBar(task, reveal);
}

/* ---------- решебник ---------- */
function renderProblems(){
  const list=document.getElementById('topicList');
  if(!list) return;
  list.innerHTML='';
  let lastChap=null;
  PROBLEM_TOPICS.forEach((t,i)=>{
    if(t.chapter!==lastChap){
      const h=document.createElement('div'); h.className='topicChap'; h.textContent=t.chapter;
      list.appendChild(h); lastChap=t.chapter;
    }
    const b=document.createElement('button');
    b.type='button'; b.className='topicItem'+(i===curTopicIdx?' on':'');
    b.innerHTML='<span>'+t.title+'</span><span class="cnt">'+t.tasks.length+'</span>';
    b.addEventListener('click',()=>renderTopic(i));
    list.appendChild(b);
  });
  renderTopic(curTopicIdx);
}
function renderTopic(i){
  curTopicIdx=i;
  const items=document.querySelectorAll('#topicList .topicItem');
  items.forEach((b,k)=>b.classList.toggle('on',k===i));
  const t=PROBLEM_TOPICS[i];
  const c=document.getElementById('probContent');
  if(!c) return;
  c.innerHTML='<div class="probChapLine">'+t.chapter+'</div><h2>'+t.title+'</h2>';
  t.tasks.forEach((task,ti)=>{
    const d=document.createElement('div'); d.className='task';
    d.innerHTML='<h3>'+(ti+1)+'. '+(task.title||'Задача')+'</h3><p>'+task.text+'</p>'+
      '<div class="amt">'+
        '<button class="btn sm pri" data-a="solve">Решать в 3D</button>'+
        '<button class="btn sm" data-a="hint">Подсказка</button>'+
        '<button class="btn sm grn" data-a="ans">Показать ответ</button>'+
      '</div><div class="hintline" hidden>'+(task.hint||'Нет подсказки')+'</div>'+
      '<div class="ans">'+(task.res||'')+'</div>';
    d.querySelector('[data-a=solve]').addEventListener('click',()=>openProblem(task,false));
    d.querySelector('[data-a=hint]').addEventListener('click',()=>{
      const hl=d.querySelector('.hintline'); hl.hidden=!hl.hidden;
    });
    d.querySelector('[data-a=ans]').addEventListener('click',()=>{ d.classList.add('sh'); openProblem(task,true); });
    c.appendChild(d);
  });
  const main=document.getElementById('probMain');
  if(main) main.scrollTop=0;
}
