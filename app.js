/* =========================================================
   AURACORE — shared data + cart logic (used by index + product pages)
   ========================================================= */

/* ================= CONFIG — edit these ================= */
const CONFIG = {
  // Sign up free at formspree.io, create a form, paste its endpoint here:
  formspree: "https://formspree.io/f/xvzjdraz",
  // Fallback email — used for a pre-filled mailto if Formspree isn't set:
  email: "becker.gei21@outlook.com",
  instagram: "https://instagram.com/autovb.WRX"
};

const AURA_SKU = "AVB-ELC-AURA";
const LINK_SKU = "AVB-ACC-LINK";

/* ================= PRODUCT DATA =================
   Each product:
     sku, name, cat, section (lineup|interior|system), slug (URL id),
     fits (fitment line), unit (e.g. "pair"), price, img (card/hero thumb),
     desc, options, photoKey + photos (live variant swap in configurator).
   Growth-ready fields (leave empty until you have content — the product
   page hides each section automatically when empty):
     gallery: ["images/x.jpg", ...]     extra photos
     video:   "https://www.youtube.com/embed/ID"   or ""  (embed URL)
     reviews: [{who:"Name", stars:5, body:"..."}]
     details: "Longer HTML/plain description shown in a Details section"
*/
const BUTTON_PHOTOS_TEMPLATE = {
  "Red":"", "Green":"", "Yellow":"", "Blue":"", "White":""
};

const PRODUCTS = [
  {
    sku:"AVB-RFL-FEN", name:"Fender Reflectors", cat:"Reflectors", section:"lineup",
    slug:"fender-reflectors", fits:"2022–2026 Subaru WRX", unit:"pair",
    price:40, img:"images/fender-thumb.jpg",
    desc:"Precision 3D-printed fender reflector set. Drop-in replacement with factory-tight tolerances. Sold as a pair — mounting clips included.",
    details:"",
    gallery:[], video:"", reviews:[],
    photoKey:["Backing Color","Lens Type"],
    photos:{
      "White|Clear":"images/fender-white-clear.jpg",
      "White|Frosted":"images/fender-white-frosted.jpg",
      "White|Tinted":"images/fender-white-tinted.jpg",
      "Black|Clear":"images/fender-black-clear.jpg",
      "Black|Frosted":"images/fender-black-frosted.jpg",
      "Black|Tinted":"images/fender-black-tinted.jpg"
    },
    options:[
      {label:"LED Type", choices:[
        {name:"No LED", price:40, sku:"AVB-RFL-FEN-NL"},
        {name:"White LED", price:75, sku:"AVB-RFL-FEN-WL"},
        {name:"RGBW Smart", price:150, sku:"AVB-RFL-FEN-RG"}
      ]},
      {label:"Backing Color", choices:["White","Black"]},
      {label:"Lens Type", choices:["Clear","Frosted","Tinted"]}
    ]
  },
  {
    sku:"AVB-RFL-RR", name:"Rear Reflectors", cat:"Reflectors", section:"lineup",
    slug:"rear-reflectors", fits:"2022–2026 Subaru WRX", unit:"pair",
    price:40, img:"images/rear-thumb.jpg",
    desc:"OEM-fit rear reflector set with factory-profile housings. Sold as a pair.",
    details:"",
    gallery:[], video:"", reviews:[],
    photoKey:["Backing Color","Lens Type"],
    photos:{
      "White|Clear":"images/rear-white-clear.jpg",
      "White|Frosted":"images/rear-white-frosted.jpg",
      "White|Tinted":"images/rear-white-tinted.jpg",
      "Black|Clear":"images/rear-black-clear.jpg",
      "Black|Frosted":"images/rear-black-frosted.jpg",
      "Black|Tinted":"images/rear-black-tinted.jpg"
    },
    options:[
      {label:"LED Type", choices:[
        {name:"No LED", price:40, sku:"AVB-RFL-RR-NL"},
        {name:"White LED", price:75, sku:"AVB-RFL-RR-WL"},
        {name:"RGBW Smart", price:150, sku:"AVB-RFL-RR-RG"}
      ]},
      {label:"Backing Color", choices:["White","Black"]},
      {label:"Lens Type", choices:["Clear","Frosted","Tinted"]}
    ]
  },
  {
    sku:"AVB-RFL-RV", name:"Vent Inserts", cat:"Reflectors", section:"lineup",
    slug:"vent-inserts", fits:"2022–2026 Subaru WRX", unit:"pair",
    price:40, img:"images/vent-thumb.jpg",
    desc:"Rear vent insert set that turns the WRX's signature vent apertures into a statement. Subtle factory-plus look, or full lighting.",
    details:"",
    gallery:[], video:"", reviews:[],
    photoKey:["Backing Color","Lens Type"],
    photos:{
      "White|Clear":"images/vent-white-clear.jpg",
      "White|Frosted":"images/vent-white-frosted.jpg",
      "White|Tinted":"images/vent-white-tinted.jpg",
      "Black|Clear":"images/vent-black-clear.jpg",
      "Black|Frosted":"images/vent-black-frosted.jpg",
      "Black|Tinted":"images/vent-black-tinted.jpg"
    },
    options:[
      {label:"LED Type", choices:[
        {name:"No LED", price:40, sku:"AVB-RFL-RV-NL"},
        {name:"White LED", price:75, sku:"AVB-RFL-RV-WL"},
        {name:"RGBW Smart", price:150, sku:"AVB-RFL-RV-RG"}
      ]},
      {label:"Backing Color", choices:["White","Black"]},
      {label:"Lens Type", choices:["Clear","Frosted","Tinted"]}
    ]
  },
  {
    sku:"AVB-LGT-TRUNK", name:"Trunk Light", cat:"Lighting", section:"interior",
    slug:"trunk-light", fits:"WRX · Outback · BRZ",
    price:30, img:"images/trunk-cool-white-6000k.jpg",
    desc:"Fully soldered trunk light kit — bulb extension, wire run, and LED strip. Plugs into the factory socket. Cool White 6000K photo is real; other colors are AI-generated previews.",
    promo:"Order a made-to-order color and send us a photo of it installed — we'll refund $5 off your order. First order of each color only.",
    details:"",
    gallery:[], video:"", reviews:[],
    photoKey:["Color"],
    photos:{
      "Blue":"images/trunk-blue.jpg",
      "Orange":"images/trunk-orange.jpg",
      "Ice Blue":"images/trunk-ice-blue.jpg",
      "Purple":"images/trunk-purple.jpg",
      "Red":"images/trunk-red.jpg",
      "Green":"images/trunk-green.jpg",
      "Cool White 6000K":"images/trunk-cool-white-6000k.jpg",
      "Natural White 4000K":"images/trunk-natural-white-4000k.jpg",
      "Warm White 3000K":"images/trunk-warm-white-3000k.jpg",
      "Warm White 2700K":"images/trunk-warm-white-2700k.jpg"
    },
    options:[
      {label:"Color", sections:[
        {title:"In Stock", choices:["Blue"]},
        {title:"Made to Order", choices:["Orange","Ice Blue","Purple","Red","Green","Cool White 6000K","Natural White 4000K","Warm White 3000K","Warm White 2700K"]}
      ]}
    ]
  },
  {
    sku:"AVB-BTN-UP", name:"Buttons — Upper Row", cat:"Buttons", section:"interior",
    slug:"buttons-upper-row", fits:"WRX · Ascent · Impreza · Outback",
    price:15, img:"images/btn-upper-thumb.jpg",
    desc:"Custom printed button housing with an illuminated LED switch, ready to install in the upper dash row.",
    details:"",
    gallery:[], video:"", reviews:[],
    photoKey:["LED Color"],
    photos:{...BUTTON_PHOTOS_TEMPLATE, "Red":"images/btn-upper-red.jpg", "Green":"images/btn-upper-green.jpg", "Yellow":"images/btn-upper-yellow.jpg", "Blue":"images/btn-upper-blue.jpg", "White":"images/btn-upper-white.jpg"},
    options:[
      {label:"LED Color", choices:["Red","Green","Yellow","Blue","White"]}
    ]
  },
  {
    sku:"AVB-BTN-LO", name:"Buttons — Lower Row", cat:"Buttons", section:"interior",
    slug:"buttons-lower-row", fits:"WRX · Ascent · Impreza · Outback",
    price:15, img:"images/btn-lower-thumb.jpg",
    desc:"Custom printed button housing with an illuminated LED switch, sized for the lower dash row.",
    details:"",
    gallery:[], video:"", reviews:[],
    photoKey:["LED Color"],
    photos:{...BUTTON_PHOTOS_TEMPLATE, "Red":"images/btn-lower-red.jpg", "Green":"images/btn-lower-green.jpg", "Yellow":"images/btn-lower-yellow.jpg", "Blue":"images/btn-lower-blue.jpg", "White":"images/btn-lower-white.jpg"},
    options:[
      {label:"LED Color", choices:["Red","Green","Yellow","Blue","White"]}
    ]
  },
  {
    sku:AURA_SKU, name:"AuraCore Controller", cat:"Electronics", section:"system",
    slug:"auracore-controller", fits:"All AURACORE lighting",
    price:50, img:"",
    desc:"Custom AuraCore PCB in a 3D-printed housing. Drives all AURACORE addressable RGBW lighting — one controller runs your whole setup.",
    requires:"Required for any RGBW Smart product.",
    delayed:"Backordered — current builds ship in about 4 weeks.",
    details:"",
    gallery:[], video:"", reviews:[]
  },
  {
    sku:"AVB-ELC-HRN-AURA", name:"AuraCore Inline Harness", cat:"Electronics", section:"system",
    slug:"auracore-inline-harness", fits:"2022–2026 Subaru WRX",
    price:20, img:"",
    desc:"Plug-and-play harness that sits inline with the factory connector. Fully reversible — zero splicing, zero cutting.",
    delayed:"Backordered — current builds ship in about 4 weeks.",
    details:"",
    gallery:[], video:"", reviews:[]
  },
  {
    sku:"AVB-ELC-HRN-REV", name:"Reverse-Light Harness", cat:"Electronics", section:"system",
    slug:"reverse-light-harness", fits:"2022–2026 Subaru WRX",
    price:20, img:"",
    desc:"Plug-in harness for reverse-triggered white LEDs. Pin connectors included.",
    delayed:"Backordered — current builds ship in about 4 weeks.",
    details:"",
    gallery:[], video:"", reviews:[]
  }
];

/* Link Two Pieces — not shown in the grid; offered at checkout
   when the order has 2+ reflector sets. */
const LINK_PRODUCT = {
  sku:LINK_SKU, name:"Link Two Pieces", price:5,
  desc:"We pre-connect two of your reflector sets so they run as one continuous unit — connector and install included."
};

/* Harness SKUs (full products in the grid) offered as add-ons too */
const HARNESS_REV_SKU = "AVB-ELC-HRN-REV";
const HARNESS_AURA_SKU = "AVB-ELC-HRN-AURA";

/* Free shipping threshold */
const FREE_SHIP_MIN = 100;

/* ================= HELPERS ================= */
const $ = id => document.getElementById(id);
const fmt = n => "$" + n.toFixed(2);
function productBySlug(slug){ return PRODUCTS.find(p=>p.slug===slug) || null; }
function productHref(p){ return "product.html?p=" + p.slug; }

function optionChoiceList(opt){
  if(opt.sections) return opt.sections.flatMap(s=>s.choices);
  return opt.choices;
}
function choiceName(c){ return typeof c === "string" ? c : c.name; }
function findChoice(product, label, name){
  const opt = (product.options||[]).find(o=>o.label===label);
  if(!opt) return null;
  return optionChoiceList(opt).find(c=>choiceName(c)===name) || null;
}
function selectedPrice(p, sel){
  for(const label in sel){
    const c = findChoice(p, label, sel[label]);
    if(c && typeof c === "object" && c.price != null) return c.price;
  }
  return p.price;
}
function selectedSku(p, sel){
  for(const label in sel){
    const c = findChoice(p, label, sel[label]);
    if(c && typeof c === "object" && c.sku) return c.sku;
  }
  return p.sku;
}
function minPrice(p){
  let prices = [p.price];
  (p.options||[]).forEach(o=>optionChoiceList(o).forEach(c=>{
    if(typeof c === "object" && c.price != null) prices.push(c.price);
  }));
  return Math.min(...prices);
}
function hasVariablePrice(p){
  return (p.options||[]).some(o=>optionChoiceList(o).some(c=>typeof c==="object" && c.price!=null));
}

/* ================= PRODUCT CARD (shared across catalog pages) ================= */
function cardHTML(p){
  return `
    <a class="card reveal" href="${productHref(p)}" aria-label="${p.name}">
      <div class="thumb">
        ${p.img ? `<img src="${p.img}" alt="${p.name}" loading="lazy">`
                : `<span class="ph">Photo coming soon</span>`}
      </div>
      <div class="card-body">
        <span class="fits">${p.fits}</span>
        <div class="card-title">
          <h3>${p.name}</h3>
          <span class="arrowbtn" aria-hidden="true">→</span>
        </div>
        <p class="desc">${p.desc}</p>
        ${p.requires ? `<span class="note req">${p.requires}</span>` : ``}
        ${p.delayed ? `<span class="note delayed">${p.delayed}</span>` : ``}
        <div class="price-line">
          ${hasVariablePrice(p) ? `<span class="from">From </span>` : ``}${fmt(minPrice(p))}${p.unit ? ` <span class="unit">/ ${p.unit}</span>` : ``}
        </div>
      </div>
    </a>`;
}
function renderGrid(el, products){
  if(el) el.innerHTML = products.map(cardHTML).join("");
}

/* ================= CART STATE ================= */
const CART_STORAGE_KEY = "autovb_cart";
function loadCart(){
  try{
    const saved = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  }catch{ return []; }
}
function saveCart(){
  try{ localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart)); }catch{}
}
let cart = loadCart();

function updateCartCount(){
  const el = $("cartCount");
  if(el) el.textContent = cart.reduce((s,i)=>s+i.qty,0);
  saveCart();
}
function addToCart(item){
  cart.push(item);
  syncRequiredItems();
  updateCartCount();
}

/* ============ required-item logic (AuraCore) ============ */
function isRGBW(item){ return item.options && item.options["LED Type"]==="RGBW Smart"; }
function isWhiteLED(item){ return item.options && item.options["LED Type"]==="White LED"; }
function cartHasRGBW(){ return cart.some(isRGBW); }
function cartHasWhiteLED(){ return cart.some(isWhiteLED); }
function reflectorCount(){
  return cart.filter(i=>i.sku.startsWith("AVB-RFL")).reduce((s,i)=>s+i.qty,0);
}
function syncRequiredItems(){
  const hasAura = cart.some(i=>i.sku===AURA_SKU);
  if(cartHasRGBW() && !hasAura){
    const aura = PRODUCTS.find(p=>p.sku===AURA_SKU);
    cart.push({ sku:aura.sku, name:aura.name, price:aura.price, qty:1, options:{}, auto:true });
  }
  if(!cartHasRGBW()){
    cart = cart.filter(i=>!(i.sku===AURA_SKU && i.auto));
  }
  if(reflectorCount() < 2){
    cart = cart.filter(i=>i.sku!==LINK_SKU);
  }
}

/* ================= TOAST ================= */
let toastTimer = null;
function showToast(msg){
  const el = $("toast");
  if(!el) return;
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> el.classList.remove("show"), 2200);
}

/* ================= DRAWER ================= */
function openDrawer(){
  renderCart();
  const ov = $("overlay"), dr = $("drawer");
  if(ov) ov.classList.add("open");
  if(dr) dr.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeDrawer(){
  const ov = $("overlay"), dr = $("drawer");
  if(ov) ov.classList.remove("open");
  if(dr) dr.classList.remove("open");
  document.body.style.overflow = "";
}
function lineItemHTML(i, idx){
  const opts = Object.entries(i.options).map(([k,v])=>`${k}: ${v}`).join(" · ");
  const locked = i.sku===AURA_SKU && cartHasRGBW();
  return `
    <div class="line-item">
      <div>
        <div class="n">${i.name}</div>
        <div class="o">${opts || "—"}</div>
        ${locked
          ? `<span class="lock">Required for RGBW items — already have one? Say so in notes.</span>`
          : `<div class="li-controls">
              <div class="li-qty">
                <button data-act="dec" data-idx="${idx}" aria-label="Decrease quantity" ${i.qty<=1?"disabled":""}>−</button>
                <span>${i.qty}</span>
                <button data-act="inc" data-idx="${idx}" aria-label="Increase quantity" ${i.qty>=20?"disabled":""}>+</button>
              </div>
              <button class="rm" data-idx="${idx}">Remove</button>
            </div>`}
      </div>
      <div class="p">${fmt(i.price*i.qty)}</div>
    </div>`;
}
function bindLineItems(container){
  container.querySelectorAll(".rm").forEach(b=>{
    b.onclick = ()=>{
      cart.splice(+b.dataset.idx,1);
      syncRequiredItems();
      updateCartCount(); renderCart(); renderCheckout();
    };
  });
  container.querySelectorAll(".li-qty button").forEach(b=>{
    b.onclick = ()=>{
      const item = cart[+b.dataset.idx];
      if(!item) return;
      if(b.dataset.act === "inc") item.qty = Math.min(20, item.qty + 1);
      else item.qty = Math.max(1, item.qty - 1);
      syncRequiredItems();
      updateCartCount(); renderCart(); renderCheckout();
    };
  });
}
function renderShipNote(el){
  if(!el) return;
  if(!cart.length){ el.className = "shipnote"; el.textContent = ""; return; }
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  if(total >= FREE_SHIP_MIN){
    el.className = "shipnote on unlocked";
    el.textContent = "✓ Free shipping unlocked";
  } else {
    el.className = "shipnote on";
    el.textContent = `Add ${fmt(FREE_SHIP_MIN - total)} more for free shipping`;
  }
}
function getAddonOffers(){
  const offers = [];
  if(reflectorCount() >= 2 && !cart.some(i=>i.sku===LINK_SKU)) offers.push(LINK_PRODUCT);
  if(cartHasWhiteLED() && !cart.some(i=>i.sku===HARNESS_REV_SKU)){
    const h = PRODUCTS.find(p=>p.sku===HARNESS_REV_SKU);
    offers.push({ sku:h.sku, name:h.name, price:h.price,
      desc:"Plug-in trigger so your White LED lights up in reverse — no splicing." });
  }
  if(cartHasRGBW() && !cart.some(i=>i.sku===HARNESS_AURA_SKU)){
    const h = PRODUCTS.find(p=>p.sku===HARNESS_AURA_SKU);
    offers.push({ sku:h.sku, name:h.name, price:h.price,
      desc:"Plug-and-play power for your AuraCore — sits inline with the factory connector, fully reversible." });
  }
  return offers;
}
function renderAddonOffers(container){
  if(!container) return;
  const offers = getAddonOffers();
  container.innerHTML = offers.map(o => `
    <div class="addon-card">
      <div>
        <div class="t">${o.name} — ${fmt(o.price)}</div>
        <div class="d">${o.desc}</div>
      </div>
      <button class="addon-add" data-sku="${o.sku}">+ Add</button>
    </div>`).join("");
  container.querySelectorAll(".addon-add").forEach(btn=>{
    btn.onclick = ()=>{
      const o = offers.find(x=>x.sku===btn.dataset.sku);
      cart.push({ sku:o.sku, name:o.name, price:o.price, qty:1, options:{} });
      syncRequiredItems();
      updateCartCount(); renderCheckout(); renderCart();
    };
  });
}
function renderCart(){
  const wrap = $("cartItems");
  if(!wrap) return;
  if(!cart.length){
    wrap.innerHTML = `<div class="empty">Your order is empty.<br>Add parts from the catalog to get started.</div>`;
    if($("subtotalRow")) $("subtotalRow").style.display = "none";
    renderShipNote($("shipNote"));
    if($("cartAddon")) $("cartAddon").innerHTML = "";
    return;
  }
  wrap.innerHTML = cart.map((i,idx)=>lineItemHTML(i,idx)).join("");
  bindLineItems(wrap);
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  if($("subtotalVal")) $("subtotalVal").textContent = fmt(total);
  if($("subtotalRow")) $("subtotalRow").style.display = "flex";
  renderShipNote($("shipNote"));
  renderAddonOffers($("cartAddon"));
}

/* renderCheckout lives on the index page; provide a safe no-op fallback
   so shared cart mutations don't error on the product page. */
if(typeof window.renderCheckout !== "function"){
  window.renderCheckout = function(){};
}

/* ================= SHARED HEADER / DRAWER WIRING ================= */
function goToCheckout(){
  if(!cart.length) return;
  location.href = "checkout.html";
}
function wireShared(){
  if($("openDrawer")) $("openDrawer").onclick = openDrawer;
  if($("closeDrawer")) $("closeDrawer").onclick = closeDrawer;
  if($("footOrder")) $("footOrder").onclick = e=>{ e.preventDefault(); openDrawer(); };
  if($("overlay")) $("overlay").onclick = ()=>{ closeDrawer(); };
  if($("toCheckout")) $("toCheckout").onclick = goToCheckout;
  document.addEventListener("keydown", e=>{ if(e.key==="Escape"){ closeDrawer(); } });
  updateCartCount();
}

/* ================= SHARED CHROME (header / footer / drawer) =================
   Injected on every page so the nav, cart, and footer stay identical. */
const NAV_LINKS = [
  {label:"Products",      href:"shop.html"},
  {label:"The System",    href:"system.html", hideSm:true},
  {label:"Install Guides",href:"guides.html"}
];
const CART_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`;

function headerHTML(active){
  return `<header class="topbar" id="siteHeader">
    <a class="logo" href="index.html">AUTOVB<span class="grad">.WRX</span></a>
    <nav class="topnav">
      ${NAV_LINKS.map(n=>`<a class="navlink${n.hideSm?' hide-sm':''}${active===n.href?' active':''}" href="${n.href}">${n.label}</a>`).join("")}
      <button class="cartbtn" id="openDrawer" aria-label="Open your order">${CART_ICON}<span class="count" id="cartCount">0</span></button>
    </nav>
  </header>`;
}
function footerHTML(){
  return `<footer>
    <div class="foot-inner">
      <div>
        <span class="logo">AUTOVB<span class="grad">.WRX</span></span>
        <p>Small-batch 3D-printed parts and lighting for Subaru, by AUTOVB. Orders are invoiced directly — prices and lead times confirmed before you pay anything.</p>
        <p>Every part is printed and oriented for maximum strength, so some edges won't look "perfect" up close — those edges are never visible once installed.</p>
      </div>
      <div class="foot-links">
        <h4>Links</h4>
        <a href="shop.html">Shop all parts</a>
        <a href="system.html">The System</a>
        <a href="guides.html">Instructions database</a>
        <a href="https://instagram.com/autovb.WRX" target="_blank" rel="noopener">Instagram</a>
        <a href="#" id="footOrder">Your order</a>
      </div>
    </div>
    <div class="foot-bottom">© AUTOVB.WRX · Not affiliated with Subaru Corporation.</div>
  </footer>`;
}
function chromeHTML(){
  return `<div class="overlay" id="overlay"></div>
  <div class="drawer" id="drawer" role="dialog" aria-modal="true" aria-labelledby="dTitle">
    <div class="drawer-head"><h2 id="dTitle">Your Order</h2><button class="xbtn" id="closeDrawer" aria-label="Close">×</button></div>
    <div class="drawer-body">
      <div id="cartItems"></div>
      <div class="subtotal" id="subtotalRow" style="display:none"><span>Estimated total</span><span id="subtotalVal"></span></div>
      <div class="shipnote" id="shipNote"></div>
      <div id="cartAddon"></div>
    </div>
    <div class="drawer-foot"><button class="sendbtn" id="toCheckout">Continue to checkout</button><p class="finehint">Shipping info collected at checkout. Invoice sent after we confirm.</p></div>
  </div>
  <div class="toast" id="toast"></div>`;
}
function initHeaderScroll(){
  const header = $("siteHeader");
  if(!header || !document.body.classList.contains("has-hero")) return;
  const hero = document.querySelector(".hero");
  const apply = ()=>{
    const threshold = hero ? Math.max(60, hero.offsetHeight - 80) : 60;
    header.classList.toggle("over-hero", window.scrollY < threshold);
  };
  apply();
  window.addEventListener("scroll", apply, {passive:true});
  window.addEventListener("resize", apply);
}
function mountChrome(active){
  document.body.insertAdjacentHTML("afterbegin", headerHTML(active));
  document.body.insertAdjacentHTML("beforeend", footerHTML() + chromeHTML());
  wireShared();
  initHeaderScroll();
}

/* ================= SCROLL REVEAL =================
   Add class "reveal" to any element; it fades/rises in when it enters the
   viewport. Call initReveal() after a page renders its content. Uses a
   scroll/resize position check (robust everywhere) plus a safety timeout so
   content is NEVER left hidden if something goes wrong. */
function initReveal(){
  const els = [...document.querySelectorAll(".reveal:not(.in)")];
  if(!els.length) return;
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion:reduce)").matches;
  if(reduce){ els.forEach(e=>e.classList.add("in")); return; }

  // gentle per-parent stagger (grid cascades)
  const seen = new Map();
  els.forEach(e=>{
    const key = e.parentElement;
    const i = (seen.get(key) || 0);
    seen.set(key, i + 1);
    e.style.transitionDelay = Math.min(i * 55, 275) + "ms";
  });

  const check = ()=>{
    const vh = window.innerHeight || document.documentElement.clientHeight;
    let remaining = false;
    els.forEach(e=>{
      if(e.classList.contains("in")) return;
      const r = e.getBoundingClientRect();
      if(r.top < vh * 0.9 && r.bottom > 0) e.classList.add("in");
      else remaining = true;
    });
    if(!remaining){
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    }
  };
  check(); // reveal whatever is already on screen
  window.addEventListener("scroll", check, {passive:true});
  window.addEventListener("resize", check);
  // safety net: if scroll events never arrive, don't leave anything hidden
  setTimeout(()=>els.forEach(e=>e.classList.add("in")), 4000);
}
