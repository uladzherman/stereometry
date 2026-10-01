'use strict';
/* 21-tasks.js — Задания тренажёра и их загрузка. */
/* ============================ ЗАДАНИЯ ============================ */
const TASKS = [
  { title:'Куб: сечение через A, C и B₁',
    text:'Дан куб ABCDA₁B₁C₁D₁. Постройте сечение куба плоскостью, проходящей через вершины A, C и B₁. Какой фигурой является сечение?',
    shape:'cube', mids:[], answer:['A','C','B₁'],
    hint:'Соедините A и C (диагональ нижней грани), затем A с B₁ и C с B₁. Все три отрезка — диагонали граней, значит они равны.',
    res:'Равносторонний треугольник A C B₁.' },
  { title:'Куб: сечение через A, B и C₁',
    text:'Дан куб ABCDA₁B₁C₁D₁. Постройте сечение плоскостью (ABC₁). Какая фигура получится?',
    shape:'cube', mids:[], answer:['A','B','C₁'],
    hint:'AB ∥ D₁C₁ и AB = D₁C₁, поэтому сечение — параллелограмм. Все углы прямые (AB ⊥ BC₁).',
    res:'Прямоугольник ABC₁D₁, его площадь равна a²√2.' },
  { title:'Куб: диагональное сечение ACC₁',
    text:'Дан куб. Постройте сечение плоскостью, проходящей через A, C и C₁. Найдите вид и площадь сечения при ребре 2.',
    shape:'cube', mids:[], answer:['A','C','C₁'],
    hint:'Плоскость содержит ребро CC₁ и диагональ AC нижней грани; противоположное ребро — AA₁.',
    res:'Прямоугольник ACC₁A₁: стороны 2 и 2√2, площадь 4√2 ≈ 5,657.' },
  { title:'Куб: сечение через середины AB, AD, AA₁',
    text:'Дан куб. Постройте сечение плоскостью, проходящей через середины рёбер AB, AD и AA₁.',
    shape:'cube', mids:[{label:'M',a:'A',b:'B'},{label:'N',a:'A',b:'D'},{label:'K',a:'A',b:'A₁'}],
    answer:['M','N','K'],
    hint:'Точки M, N, K попарно лежат в гранях, выходящих из A. Плоскость MNK отсекает от куба маленький треугольник — все три стороны равны половине диагонали грани.',
    res:'Равносторонний треугольник MNK со стороной a√2/2.' },
  { title:'Куб: сечение через A, C₁ и середину BB₁',
    text:'Дан куб ABCDA₁B₁C₁D₁, точка M — середина ребра BB₁. Постройте сечение плоскостью (AMC₁).',
    shape:'cube', mids:[{label:'M',a:'B',b:'B₁'}],
    answer:['A','M','C₁'],
    hint:'Плоскость пересекает ребро DD₁ в точке, симметричной M. Сечение — ромб с диагоналями AC₁ и MN.',
    res:'Ромб (в некоторых учебниках — параллелограмм AMC₁N, где N — середина DD₁).' },
  { title:'Куб: сечение через середины AB, BC, CC₁',
    text:'Дан куб ABCDA₁B₁C₁D₁. Точки M, N, K — середины рёбер AB, BC и CC₁. Постройте сечение плоскостью (MNK).',
    shape:'cube', mids:[{label:'M',a:'A',b:'B'},{label:'N',a:'B',b:'C'},{label:'K',a:'C',b:'C₁'}],
    answer:['M','N','K'],
    hint:'MN — средняя линия в грани ABCD (MN ∥ AC). Плоскость MNK отсекает от куба часть и пересекает ещё три ребра, давая замкнутую ломаную.',
    res:'Шестиугольник: плоскость параллельна диагонали AC и проходит через середины трёх рёбер.' },
  { title:'Тетраэдр: медиальное сечение',
    text:'Дан тетраэдр DABC. Постройте сечение плоскостью, проходящей через середины рёбер DA, DB и DC.',
    shape:'tetra', mids:[{label:'M',a:'D',b:'A'},{label:'N',a:'D',b:'B'},{label:'K',a:'D',b:'C'}],
    answer:['M','N','K'],
    hint:'MN, NK, KM — средние линии треугольников при вершине D. Каждая параллельна соответствующему ребру основания.',
    res:'Треугольник MNK, подобный ABC с коэффициентом 1/2; он параллелен грани ABC.' },
  { title:'Пирамида: сечение через середины SA и SD',
    text:'Дана пирамида SABCD. Постройте сечение плоскостью, проходящей через середины рёбер SA, SD и вершину C.',
    shape:'pyramid4', mids:[{label:'M',a:'S',b:'A'},{label:'N',a:'S',b:'D'}],
    answer:['M','N','C'],
    hint:'MN ∥ AD (средняя линия ΔSAD). Плоскость пересекает грань SAB по прямой из M, а C лежит в основании.',
    res:'Четырёхугольник MNCD — трапеция с основаниями MN и CD (MN = AD/2).' },
  { title:'Призма: сечение через A, B и C₁',
    text:'Дана правильная призма ABCA₁B₁C₁. Постройте сечение плоскостью, проходящей через вершины A, B и C₁.',
    shape:'prism3', mids:[], answer:['A','B','C₁'],
    hint:'Плоскость пересекает нижнюю грань по AB, а боковые грани — по отрезкам B C₁ и A C₁.',
    res:'Треугольник ABC₁.' },
  { title:'Куб: сечение через B, D и A₁',
    text:'Дан куб ABCDA₁B₁C₁D₁. Постройте сечение плоскостью, проходящей через вершины B, D и A₁.',
    shape:'cube', mids:[], answer:['B','D','A₁'],
    hint:'BD — диагональ нижней грани, BA₁ и DA₁ — диагонали боковых граней. Все три отрезка равны.',
    res:'Равносторонний треугольник BDA₁.' },
];

function taskIdByLabel(lb){
  const p=findPtByLabel(lb);
  return p?p.id:null;
}
/* построение решения: список отрезков/прямых/плоскостей по буквенным меткам */
function buildTaskConstruct(list){
  if(!list) return;
  for(const e of list){
    const a=taskIdByLabel(e.a), b=taskIdByLabel(e.b), c=e.c?taskIdByLabel(e.c):null;
    if(e.t==='seg' && a&&b) state.segments.push({id:uid(),a,b,color:'#4ade80',show:true,op:newOp()});
    else if(e.t==='line' && a&&b) state.lines.push({id:uid(),a,b,color:'#f59e0b',show:true,op:newOp()});
    else if(e.t==='plane' && a&&b&&c && planeFrom3(P(a).p,P(b).p,P(c).p))
      state.planes.push({id:uid(),a,b,c,show:true,op:newOp()});
  }
}
function loadTask(t, reveal){
  shapeSel.value=t.shape;
  if(t.size!=null){ const e=document.getElementById('pSize'); if(e) e.value=String(t.size); }
  if(t.height!=null){ const e=document.getElementById('pHeight'); if(e) e.value=String(t.height); }
  const solid=loadShape(t.shape);
  if(!solid) return null;
  const map=labelMap(solid);
  const ids=[];
  for(const m of (t.mids||[])){
    const a=map.get(m.a), b=map.get(m.b);
    if(a&&b){
      const p=centroid([P(a).p,P(b).p]);
      const np=addPoint(p,m.label,{color:'#7ee787'});
      ids.push(np.id);
    }
  }
  rebuildIndex();
  const ansIds = (t.answer||[]).map(lb=>{
    if(map.has(lb)) return map.get(lb);
    return ids.find(id=>P(id).label===lb);
  }).filter(Boolean);
  if(reveal){
    if(ansIds.length===3) addSection(solid.id, ansIds);
    buildTaskConstruct(t.construct);
    if(ansIds.length===3){ state.selection=ansIds.slice(); updateSelInfo(); }
  }
  renderObjList(); draw();
  return solid;
}

