const P=[
{id:1,n:"Paracetamol",s:"Paracetamol",pa:"Paracetamol",d:"500 mg",pres:"Caja de 20 tabletas",cat:"Dolor y fiebre",marca:"Genérico",rx:0,pr:180,c:"#17454A",
 uso:"Baja la fiebre y alivia el dolor leve a moderado, como el dolor de cabeza, muscular o de muelas.",
 como:"Se toma por vía oral con un vaso de agua. Respeta el tiempo mínimo entre tomas y la dosis máxima diaria que indica el prospecto.",
 adv:"No lo combines con otros productos que también contengan paracetamol. Consulta antes de usarlo si tienes enfermedad del hígado o tomas alcohol con frecuencia."},
{id:2,n:"Ibuprofeno",s:"Ibuprofeno",pa:"Ibuprofeno",d:"400 mg",pres:"Caja de 20 tabletas",cat:"Dolor y fiebre",marca:"Genérico",rx:0,pr:260,c:"#3C6E71",
 uso:"Alivia el dolor, baja la inflamación y la fiebre. Se usa en dolor de espalda, cólicos menstruales y golpes.",
 como:"Tómalo con alimentos para cuidar el estómago. Usa la menor cantidad posible durante el menor tiempo posible, como indica el prospecto.",
 adv:"No lo uses si tienes úlcera o sangrado de estómago, ni en el embarazo avanzado. Consulta antes si tienes asma, problemas del riñón o del corazón."},
{id:3,n:"Loratadina",s:"Loratadina",pa:"Loratadina",d:"10 mg",pres:"Caja de 10 tabletas",cat:"Alergias",marca:"Genérico",rx:0,pr:150,c:"#7A6A3F",
 uso:"Calma los síntomas de la alergia: estornudos, picazón de nariz u ojos, secreción y ronchas en la piel.",
 como:"Normalmente se toma una vez al día, con o sin comida. Sigue las indicaciones del prospecto de tu presentación.",
 adv:"Consulta con tu médico si estás embarazada, das de lactar o tienes enfermedad del hígado. Es poco probable que dé sueño, pero ten precaución si lo notas."},
{id:4,n:"Omeprazol",s:"Omeprazol",pa:"Omeprazol",d:"20 mg",pres:"Caja de 14 cápsulas",cat:"Digestivo",marca:"Genérico",rx:0,pr:320,c:"#8A4B3A",
 uso:"Reduce el ácido del estómago. Se usa para la acidez frecuente y el reflujo.",
 como:"Suele tomarse en ayunas, antes del desayuno, con agua. Traga la cápsula entera.",
 adv:"Si necesitas tomarlo por más de unas semanas, consulta a tu médico. Avisa si tienes dificultad para tragar, vómitos con sangre o pérdida de peso sin causa."},
{id:5,n:"Suero oral",s:"Suero oral",pa:"Sales de rehidratación oral",d:"Sobres",pres:"Caja de 5 sobres",cat:"Hidratación",marca:"Hidralyte",rx:0,pr:210,c:"#2E6F8E",
 uso:"Repone agua y sales que se pierden con la diarrea, el vómito o la fiebre alta. Es útil en niños y adultos.",
 como:"Disuelve cada sobre en la cantidad exacta de agua potable que indica el empaque. No añadas más agua ni azúcar. Ofrece sorbos pequeños y frecuentes.",
 adv:"Si hay vómitos que no paran, sangre en las heces, sueño excesivo o signos de deshidratación en un bebé, acude al médico."},
{id:6,n:"Amoxicilina",s:"Amoxicilina",pa:"Amoxicilina",d:"500 mg",pres:"Caja de 21 cápsulas",cat:"Infecciones",marca:"Genérico",rx:1,pr:540,c:"#5A4E7C",
 uso:"Antibiótico para infecciones causadas por bacterias, por ejemplo de garganta, oído, vías urinarias o pulmones. No sirve para gripe ni resfriado.",
 como:"Toma exactamente lo que indicó tu médico y termina todo el tratamiento, aunque te sientas mejor.",
 adv:"No la uses si eres alérgico a la penicilina. Suspende y consulta si aparecen ronchas, hinchazón de cara o dificultad para respirar."},
{id:7,n:"Salbutamol",s:"Salbutamol",pa:"Salbutamol",d:"100 mcg",pres:"Inhalador de 200 dosis",cat:"Respiratorio",marca:"Ventolín",rx:1,pr:690,c:"#2F5D8A",
 uso:"Abre las vías respiratorias con rapidez. Alivia la falta de aire, la tos y el silbido del pecho en asma.",
 como:"Se inhala con la técnica que te enseñó tu médico o farmacéutico. Agita el inhalador antes de usarlo. Pregúntanos si quieres repasar cómo hacerlo.",
 adv:"Si lo necesitas con más frecuencia de lo normal o no te alivia, busca atención médica pronto. Puede causar temblor o palpitaciones."},
{id:8,n:"Losartán",s:"Losartán",pa:"Losartán potásico",d:"50 mg",pres:"Caja de 30 tabletas",cat:"Corazón y presión",marca:"Genérico",rx:1,pr:420,c:"#6B3F55",
 uso:"Baja la presión arterial alta y protege el corazón y los riñones.",
 como:"Se toma una vez al día, a la misma hora, con o sin comida. No lo suspendas por tu cuenta aunque te sientas bien.",
 adv:"No debe usarse en el embarazo. Consulta a tu médico si tomas suplementos de potasio, diuréticos o tienes enfermedad del riñón."}
];
const $=s=>document.querySelector(s);
const money=n=>"RD$ "+n.toLocaleString("es-DO");
const pack=p=>`<svg viewBox="0 0 120 120" aria-hidden="true"><rect x="20" y="24" width="80" height="74" rx="6" fill="${p.c}"/><rect x="20" y="24" width="80" height="18" rx="6" fill="#fff" opacity=".22"/><text x="60" y="72" text-anchor="middle" font-family="Fraunces,Georgia,serif" font-size="12" fill="#fff">${p.s}</text><text x="60" y="88" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="10" fill="#fff" opacity=".85">${p.d}</text></svg>`;
const norm=s=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
const st={cat:"Todos",rx:"todos",marca:"Todas",q:""};
const cats=["Todos",...new Set(P.map(p=>p.cat))];
const marcas=["Todas",...new Set(P.map(p=>p.marca))];
function filters(){
  $("#filters").innerHTML=cats.map(c=>`<button class="chip" aria-pressed="${st.cat===c}" data-cat="${c}">${c}</button>`).join("")+
  `<span class="sep"></span>`+
  [["todos","Todos"],["otc","Venta libre"],["rx","Con receta"]].map(([k,l])=>`<button class="chip" aria-pressed="${st.rx===k}" data-rx="${k}">${l}</button>`).join("")+
  `<span class="sep"></span><label>Marca <select id="marca">${marcas.map(m=>`<option ${m===st.marca?"selected":""}>${m}</option>`).join("")}</select></label>`;
}
function match(p,q){const t=norm([p.n,p.pa,p.cat,p.uso].join(" "));return norm(q).split(/\s+/).filter(Boolean).every(w=>t.includes(w))}
function list(){
  const r=P.filter(p=>(st.cat==="Todos"||p.cat===st.cat)&&(st.rx==="todos"||(st.rx==="rx")===!!p.rx)&&(st.marca==="Todas"||p.marca===st.marca)&&match(p,st.q));
  $("#list").innerHTML=r.length?r.map(p=>`<button class="row" data-id="${p.id}">${pack(p)}<div><h3>${p.n} ${p.d}</h3><p>${p.pres}. ${p.uso.split(". ")[0].replace(/\.$/,"")}.</p></div><div class="meta"><b>${money(p.pr)}</b><span class="tag ${p.rx?"rx":"otc"}">${p.rx?"Requiere receta médica":"Venta libre"}</span></div></button>`).join(""):`<p class="empty">No encontramos nada con esos filtros. Prueba con otra palabra o quita algún filtro, o llámanos y te ayudamos.</p>`;
}
function open(id){
  const p=P.find(x=>x.id==id);
  $("#sheet").innerHTML=`<button class="close" id="x">Cerrar</button>
  <div class="sheet-head">${pack(p)}<div><h2 id="d-name">${p.n} ${p.d}</h2><div>${p.pa} · ${p.pres}</div><span class="tag ${p.rx?"rx":"otc"}">${p.rx?"Requiere receta médica":"Venta libre"}</span></div></div>
  <dl><dt>¿Para qué se usa?</dt><dd>${p.uso}</dd><dt>Cómo se toma</dt><dd>${p.como}</dd><dt>Advertencias principales</dt><dd>${p.adv}</dd></dl>
  <div class="buy" id="buy"><div><b style="font-size:22px">${money(p.pr)}</b>${p.rx?`<br><span class="muted">Necesitarás enviar tu receta al pedirlo</span>`:""}</div><button class="btn" id="add">Agregar al pedido</button></div>
  <p class="note">Esta información es orientativa y no sustituye la consulta con un médico o farmacéutico. Lee siempre el prospecto de tu presentación.</p>`;
  $("#dlg").showModal();$("#x").onclick=()=>$("#dlg").close();$("#add").onclick=()=>add(p.id);
}
const sug=$("#sug"),q=$("#q");
q.addEventListener("input",()=>{
  st.q=q.value;list();
  const r=q.value.trim()?P.filter(p=>match(p,q.value)).slice(0,5):[];
  sug.innerHTML=r.map(p=>`<li><button data-id="${p.id}"><span>${p.n} ${p.d}</span><small>${p.cat}</small></button></li>`).join("");
  sug.hidden=!r.length;q.setAttribute("aria-expanded",!!r.length);
});
sug.addEventListener("click",e=>{const b=e.target.closest("button");if(b){sug.hidden=true;open(b.dataset.id)}});
document.addEventListener("click",e=>{if(!e.target.closest(".search"))sug.hidden=true});
q.addEventListener("keydown",e=>{if(e.key==="Escape")sug.hidden=true});
$("#filters").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;if(b.dataset.cat)st.cat=b.dataset.cat;if(b.dataset.rx)st.rx=b.dataset.rx;filters();list()});
$("#filters").addEventListener("change",e=>{if(e.target.id==="marca"){st.marca=e.target.value;list()}});
$("#list").addEventListener("click",e=>{const b=e.target.closest(".row");if(b)open(b.dataset.id)});
$("#dlg").addEventListener("click",e=>{if(e.target===e.currentTarget)e.currentTarget.close()});

/* Pedido */
const WA="18095508839"; /* WhatsApp de la farmacia, con código de país */
const cart={},info={tipo:"retiro"};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const count=()=>Object.values(cart).reduce((a,b)=>a+b,0);
const total=()=>Object.entries(cart).reduce((a,[id,q])=>a+P.find(p=>p.id==id).pr*q,0);
const badge=()=>{$("#cnt").textContent=count()};
function add(id){
  cart[id]=(cart[id]||0)+1;badge();
  $("#buy").innerHTML=`<b>Agregado a tu pedido</b><div style="display:flex;gap:10px;flex-wrap:wrap"><button class="chip" id="more">Seguir viendo</button><button class="btn" id="go">Ver mi pedido</button></div>`;
  $("#more").onclick=()=>$("#dlg").close();
  $("#go").onclick=()=>{$("#dlg").close();openCart()};
}
function openCart(){
  const ids=Object.keys(cart),rx=ids.some(id=>P.find(p=>p.id==id).rx),dom=info.tipo==="domicilio";
  $("#cart").innerHTML=`<button class="close" id="cx">Cerrar</button><h2 id="c-title">Mi pedido</h2>`+(ids.length?
  `<ul class="list">${ids.map(id=>{const p=P.find(x=>x.id==id);return `<li class="citem"><div><b>${p.n} ${p.d}</b><br><span class="muted">${p.pres} · ${money(p.pr)}</span></div><div class="qty"><button aria-label="Quitar uno de ${p.n}" data-q="-1" data-id="${id}">−</button><span>${cart[id]}</span><button aria-label="Agregar uno de ${p.n}" data-q="1" data-id="${id}">+</button></div></li>`}).join("")}</ul>
  <p class="tot"><span>Total</span><b>${money(total())}</b></p>
  ${rx?`<p class="note rxnote">Tu pedido incluye medicamentos con receta. Envía una foto legible de la receta por WhatsApp junto con el pedido; sin ella no podemos entregarlos.</p>`:""}
  <form id="oform"><label>Nombre<input name="nombre" required autocomplete="name" value="${esc(info.nombre||"")}"></label>
  <label>Teléfono<input name="tel" type="tel" required autocomplete="tel" value="${esc(info.tel||"")}"></label>
  <fieldset><legend>¿Cómo lo recibes?</legend><label><input type="radio" name="tipo" value="retiro" ${dom?"":"checked"}> Retiro en tienda</label><label><input type="radio" name="tipo" value="domicilio" ${dom?"checked":""}> Entrega a domicilio</label></fieldset>
  <label id="dir" ${dom?"":"hidden"}>Dirección de entrega<input name="dir" ${dom?"required":""} value="${esc(info.dir||"")}"></label>
  <button class="btn" type="submit">Pedir ahora</button></form>`
  :`<p class="empty">Tu pedido está vacío. Abre un medicamento y toca “Agregar al pedido”.</p><button class="btn" id="cx2">Ver catálogo</button>`);
  if(!$("#cdlg").open)$("#cdlg").showModal();
}
$("#cartbtn").onclick=openCart;
$("#cart").addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b)return;
  if(b.id==="cx"||b.id==="cx2"||b.id==="cx3")$("#cdlg").close();
  if(b.dataset.q){const id=b.dataset.id;cart[id]+=+b.dataset.q;if(cart[id]<1)delete cart[id];badge();openCart()}
});
$("#cart").addEventListener("input",e=>{if(e.target.name)info[e.target.name]=e.target.value});
$("#cart").addEventListener("change",e=>{if(e.target.name==="tipo"){const d=e.target.value==="domicilio";$("#dir").hidden=!d;$("#dir input").required=d}});
$("#cart").addEventListener("submit",e=>{
  e.preventDefault();
  const ids=Object.keys(cart),rx=ids.some(id=>P.find(p=>p.id==id).rx);
  const lines=ids.map(id=>{const p=P.find(x=>x.id==id);return `• ${cart[id]} × ${p.n} ${p.d} (${p.pres}) - ${money(p.pr*cart[id])}`});
  const msg=`Hola, quiero hacer un pedido en Farmacia Alameda:\n${lines.join("\n")}\nTotal: ${money(total())}\nNombre: ${info.nombre}\nTeléfono: ${info.tel}\n`+(info.tipo==="domicilio"?"Entrega a domicilio: "+info.dir:"Retiro en tienda")+(rx?"\nTe envío la receta de los medicamentos que la requieren.":"");
  const url="https://wa.me/"+WA+"?text="+encodeURIComponent(msg);
  window.open(url,"_blank","noopener");
  $("#cart").innerHTML=`<button class="close" id="cx3">Cerrar</button><h2 id="c-title">Pedido listo para enviar</h2><p>Se abrió WhatsApp con tu pedido. Envía el mensaje para confirmarlo${rx?" y adjunta la foto de tu receta":""}. Te responderemos con la disponibilidad y el tiempo de entrega.</p><p class="muted">¿No se abrió? <a href="${url}" target="_blank" rel="noopener">Abrir WhatsApp</a></p>`;
  Object.keys(cart).forEach(k=>delete cart[k]);badge();
});
filters();list();