/* =========================================================
   AURACORE — shared data + cart logic (used by index + product pages)
   ========================================================= */

/* ================= CONFIG — edit these ================= */
const CONFIG = {
  // Sign up free at formspree.io, create a form, paste its endpoint here:
  formspree: "https://formspree.io/f/xvzjdraz",
  // Fallback email — used for a pre-filled mailto if Formspree isn't set:
  email: "becker.gei21@outlook.com",
  instagram: "https://instagram.com/autovb.WRX",
  // Reviews — the review sheet's Apps Script web app (review-photos-apps-script.gs).
  // It takes reviews with photos into the sheet's "Reviews" tab and serves the
  // approved ones (tick "Approved") back to product pages.
  reviews: {
    api: "https://script.google.com/macros/s/AKfycbxb5knAPLb1fdBr07V9qm-9aEtyoQ2NJai4AqPcJqwEr8qFnl_jLxz0_4RmUgco25lPDg/exec"
  }
};

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

/* Shared reflector options — every reflector set uses the same LED lineup.
   `lenses` limits which Lens Type choices show for that LED type;
   `soldOut` shows the choice grayed out and unselectable.
   `note` shows under the LED Type buttons when that choice is selected. */
function reflectorOptions(skuPrefix){
  return [
    {label:"LED Type", choices:[
      {name:"No LED",     price:40,  sku:skuPrefix+"-NL", lenses:["Clear","Tinted"]},
      {name:"White LED",  price:80,  sku:skuPrefix+"-WL", lenses:["Frosted","Tinted"]},
      {name:"RGBW",       price:200, sku:skuPrefix+"-RG", lenses:["Frosted","Tinted"],
       note:"Bluetooth app control included — change colors and effects right from your phone."},
      {name:"RGBW Smart", price:250, sku:skuPrefix+"-RS", lenses:["Frosted","Tinted"], soldOut:true}
    ]},
    {label:"Lens Type", choices:["Clear","Frosted","Tinted"]}
  ];
}

const PRODUCTS = [
  {
    sku:"AVB-RFL-FEN", name:"Fender Reflectors", cat:"Reflectors", section:"lineup",
    slug:"fender-reflectors", fits:"2022–2026 Subaru WRX", unit:"pair",
    price:40, img:"images/fender-thumb.jpg",
    desc:"Precision 3D-printed fender reflector set. Drop-in replacement with factory-tight tolerances. Sold as a pair — mounting clips included.",
    details:"",
    gallery:[], video:"", reviews:[],
    photoKey:["Lens Type"],
    photos:{
      "Clear":"images/fender-white-clear.jpg",
      "Frosted":"images/fender-white-frosted.jpg",
      "Tinted":"images/fender-black-tinted.jpg"
    },
    options: reflectorOptions("AVB-RFL-FEN")
  },
  {
    sku:"AVB-RFL-RR", name:"Rear Reflectors", cat:"Reflectors", section:"lineup",
    slug:"rear-reflectors", fits:"2022–2026 Subaru WRX", unit:"pair",
    price:40, img:"images/rear-thumb.jpg",
    desc:"OEM-fit rear reflector set with factory-profile housings. Sold as a pair.",
    details:"",
    gallery:[], video:"", reviews:[],
    photoKey:["Lens Type"],
    photos:{
      "Clear":"images/rear-white-clear.jpg",
      "Frosted":"images/rear-white-frosted.jpg",
      "Tinted":"images/rear-black-tinted.jpg"
    },
    options: reflectorOptions("AVB-RFL-RR")
  },
  {
    sku:"AVB-RFL-RV", name:"Vent Inserts", cat:"Reflectors", section:"lineup",
    slug:"vent-inserts", fits:"2022–2026 Subaru WRX", unit:"pair",
    price:40, img:"images/vent-thumb.jpg",
    desc:"Rear vent insert set that turns the WRX's signature vent apertures into a statement. Subtle factory-plus look, or full lighting.",
    details:"",
    gallery:[], video:"", reviews:[],
    photoKey:["Lens Type"],
    photos:{
      "Clear":"images/vent-white-clear.jpg",
      "Frosted":"images/vent-white-frosted.jpg",
      "Tinted":"images/vent-black-tinted.jpg"
    },
    options: reflectorOptions("AVB-RFL-RV")
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
    price:20, img:"images/btn-upper-thumb.jpg",
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
    price:20, img:"images/btn-lower-thumb.jpg",
    desc:"Custom printed button housing with an illuminated LED switch, sized for the lower dash row.",
    details:"",
    gallery:[], video:"", reviews:[],
    photoKey:["LED Color"],
    photos:{...BUTTON_PHOTOS_TEMPLATE, "Red":"images/btn-lower-red.jpg", "Green":"images/btn-lower-green.jpg", "Yellow":"images/btn-lower-yellow.jpg", "Blue":"images/btn-lower-blue.jpg", "White":"images/btn-lower-white.jpg"},
    options:[
      {label:"LED Color", choices:["Red","Green","Yellow","Blue","White"]}
    ]
  }
];

/* ================= GALLERY =================
   Customer photos only: every photo on an approved review shows in the
   "Gallery" section of product pages — the product's own photos first, then
   the rest of its section (all reflectors on any reflector page).
   To feature a photo of your own again, add it to GALLERY, e.g.
     { src:"images/gallery/jake-rear.jpg", product:"rear-reflectors",
       cap:"@jake.vb · 2023 WRX · White LED / Tinted" },
   Only use photos you have permission to post. */
const GALLERY = [
  /* your own photos — off for now, customer photos only
  { src:"images/fender-white-frosted.jpg", product:"fender-reflectors", cap:"Fender Reflectors · Frosted lens" },
  { src:"images/fender-black-tinted.jpg",  product:"fender-reflectors", cap:"Fender Reflectors · Tinted lens" },
  { src:"images/fender-white-clear.jpg",   product:"fender-reflectors", cap:"Fender Reflectors · Clear lens" },
  { src:"images/rear-white-frosted.jpg",   product:"rear-reflectors",   cap:"Rear Reflectors · Frosted lens" },
  { src:"images/rear-black-tinted.jpg",    product:"rear-reflectors",   cap:"Rear Reflectors · Tinted lens" },
  { src:"images/rear-white-clear.jpg",     product:"rear-reflectors",   cap:"Rear Reflectors · Clear lens" },
  { src:"images/vent-white-frosted.jpg",   product:"vent-inserts",      cap:"Vent Inserts · Frosted lens" },
  { src:"images/vent-black-tinted.jpg",    product:"vent-inserts",      cap:"Vent Inserts · Tinted lens" },
  { src:"images/vent-white-clear.jpg",     product:"vent-inserts",      cap:"Vent Inserts · Clear lens" }
  */
];
/* reviews = every approved review (all products), as returned by loadSheetReviews() */
function galleryFor(p, reviews){
  const bySlug = slug => productBySlug(slug) || {};
  const byName = name => PRODUCTS.find(x=>x.name.toLowerCase() === String(name).toLowerCase()) || {};
  const items = GALLERY.map(g=>({ src:g.src, full:g.src, cap:g.cap, slug:g.product, section:bySlug(g.product).section }));
  (reviews || []).forEach(r=>{
    const prod = byName(r.product);
    (r.photos || []).forEach(ph=> items.push({ src:ph.src || ph, full:ph.full || ph.src || ph,
      cap:[r.who, r.config || prod.name || r.product].filter(Boolean).join(" · "), slug:prod.slug, section:prod.section }));
  });
  const mine = items.filter(g=>g.slug===p.slug);
  return mine.length ? mine.concat(items.filter(g=>g.slug!==p.slug && g.section===p.section)) : [];
}

/* ================= REVIEWS =================
   Approved reviews come from the Google Sheet automatically (see
   CONFIG.reviews). You can also hard-code a review on a product as
   reviews:[ ... ] — e.g. one sent to you by DM. Format:
     { stars:5, title:"Fit is perfect", body:"…", who:"Jake M.",
       date:"Oct 2026", config:"White LED · Tinted", verified:true,
       photos:["images/reviews/jake-1.jpg"] }
   `verified` = you matched it to a real order. `photos` is optional. */

/* Escape text before putting it in the page — review text comes from the
   public, so it must never be able to inject HTML or scripts. */
function escapeHTML(v){
  return String(v == null ? "" : v).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
/* Customer photos live in Google Drive; these are their public image URLs.
   Ids come from the sheet and are checked to be plain Drive ids. */
function driveImg(id, w){ return "https://drive.google.com/thumbnail?id=" + id + "&sz=w" + w; }
function drivePhoto(id){ return /^[-\w]{20,}$/.test(id) ? { src:driveImg(id, 800), full:driveImg(id, 2000) } : null; }
/* Approved reviews, newest first. Never throws — if the sheet can't be
   reached, pages simply show their built-in reviews. */
let _sheetReviews = null;
function loadSheetReviews(){
  if(_sheetReviews) return _sheetReviews;
  const api = CONFIG.reviews && CONFIG.reviews.api;
  if(!api) return (_sheetReviews = Promise.resolve([]));
  _sheetReviews = fetch(api).then(r=>r.json()).then(d=>{
    if(!d || !d.ok || !Array.isArray(d.reviews)) return [];
    return d.reviews.map(x=>({
      product:String(x.product||""), stars:Math.max(1, Math.min(5, parseInt(x.rating,10) || 5)),
      title:String(x.headline||""), body:String(x.review||""), who:String(x.name||""),
      date:x.t ? new Date(x.t).toLocaleDateString("en-US",{month:"short", year:"numeric"}) : "",
      config:String(x.purchased||""), verified:true,
      photos:(x.photos||[]).map(drivePhoto).filter(Boolean)
    })).filter(r=>r.product && r.body);
  }).catch(()=>[]);
  return _sheetReviews;
}
/* Shrink a picked photo to a ~1600px JPEG (phones shoot 12MP+) → base64. */
function shrinkPhoto(file, max = 1600, quality = 0.85){
  return new Promise((resolve, reject)=>{
    const url = URL.createObjectURL(file), img = new Image();
    img.onload = ()=>{
      const k = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
      const c = document.createElement("canvas");
      c.width = Math.round(img.naturalWidth * k); c.height = Math.round(img.naturalHeight * k);
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      resolve(trimBars(c).toDataURL("image/jpeg", quality).split(",")[1]);
    };
    img.onerror = ()=>{ URL.revokeObjectURL(url); reject(new Error("unreadable")); };
    img.src = url;
  });
}
/* Cut solid black/white bars off the edges (screenshots, letterboxed photos).
   Leaves the photo alone if the bars aren't solid or it would lose too much. */
function trimBars(c){
  const w = c.width, h = c.height, d = c.getContext("2d").getImageData(0, 0, w, h).data;
  const at = (x, y)=>{ const i = (y * w + x) * 4; return [d[i], d[i+1], d[i+2]]; };
  const ref = at(0, 0), lum = (ref[0] + ref[1] + ref[2]) / 3;
  if(lum > 40 && lum < 215) return c;                       // corner isn't black or white: no bars
  const same = p => Math.abs(p[0]-ref[0]) + Math.abs(p[1]-ref[1]) + Math.abs(p[2]-ref[2]) < 36;
  const row = y => { for(let x = 0; x < w; x += 3) if(!same(at(x, y))) return false; return true; };
  const col = x => { for(let y = 0; y < h; y += 3) if(!same(at(x, y))) return false; return true; };
  let t = 0, b = h - 1, l = 0, r = w - 1;
  while(t < b && row(t)) t++;
  while(b > t && row(b)) b--;
  while(l < r && col(l)) l++;
  while(r > l && col(r)) r--;
  const nw = r - l + 1, nh = b - t + 1;
  if(nw * nh > w * h * 0.97 || nw < w * 0.25 || nh < h * 0.25) return c;
  const out = document.createElement("canvas");
  out.width = nw; out.height = nh;
  out.getContext("2d").drawImage(c, l, t, nw, nh, 0, 0, nw, nh);
  return out;
}
/* Send a review (with up to 3 photos) to the sheet's Apps Script. Throws if
   it isn't saved, so the form can say so. */
async function submitReview(data, files){
  const photos = [];
  for(const f of (files || []).slice(0, 3)) photos.push({ type:"image/jpeg", data:await shrinkPhoto(f) });
  const res = await fetch(CONFIG.reviews.api, { method:"POST", body:JSON.stringify(Object.assign({}, data, { photos })) });
  const out = await res.json();
  if(!out.ok) throw new Error(out.error || "rejected");
  return out;
}

/* Link Two Pieces — not shown in the grid; offered at checkout
   when the order has 2+ reflector sets. */
const LINK_PRODUCT = {
  sku:LINK_SKU, name:"Link Two Pieces", price:5,
  desc:"We pre-connect two of your reflector sets so they run as one continuous unit — connector and install included."
};

/* Shipping — US only. Lower 48 (+ DC): flat rate, free over FREE_SHIP_MIN.
   Alaska, Hawaii, territories and APO/FPO: one flat rate, never free (postage there runs ~$16+). */
const FREE_SHIP_MIN = 150;
const SHIP_RATE = 10;
const SHIP_RATE_FAR = 20;
const US_STATES = [["AL","Alabama"],["AK","Alaska"],["AZ","Arizona"],["AR","Arkansas"],["CA","California"],["CO","Colorado"],
  ["CT","Connecticut"],["DE","Delaware"],["DC","District of Columbia"],["FL","Florida"],["GA","Georgia"],["HI","Hawaii"],
  ["ID","Idaho"],["IL","Illinois"],["IN","Indiana"],["IA","Iowa"],["KS","Kansas"],["KY","Kentucky"],["LA","Louisiana"],
  ["ME","Maine"],["MD","Maryland"],["MA","Massachusetts"],["MI","Michigan"],["MN","Minnesota"],["MS","Mississippi"],
  ["MO","Missouri"],["MT","Montana"],["NE","Nebraska"],["NV","Nevada"],["NH","New Hampshire"],["NJ","New Jersey"],
  ["NM","New Mexico"],["NY","New York"],["NC","North Carolina"],["ND","North Dakota"],["OH","Ohio"],["OK","Oklahoma"],
  ["OR","Oregon"],["PA","Pennsylvania"],["RI","Rhode Island"],["SC","South Carolina"],["SD","South Dakota"],
  ["TN","Tennessee"],["TX","Texas"],["UT","Utah"],["VT","Vermont"],["VA","Virginia"],["WA","Washington"],
  ["WV","West Virginia"],["WI","Wisconsin"],["WY","Wyoming"],
  ["PR","Puerto Rico"],["GU","Guam"],["VI","U.S. Virgin Islands"],["AS","American Samoa"],["MP","Northern Mariana Islands"],
  ["AA","Armed Forces Americas (AA)"],["AE","Armed Forces Europe (AE)"],["AP","Armed Forces Pacific (AP)"]];
const FAR_STATES = new Set(["AK","HI","PR","GU","VI","AS","MP","AA","AE","AP"]);
let shipState = "";   /* set by the checkout's State field; "" = not picked yet (assume lower 48) */
const isFarState = st => FAR_STATES.has(st);
const shipCost = (subtotal, st) => isFarState(st) ? SHIP_RATE_FAR : (subtotal >= FREE_SHIP_MIN ? 0 : SHIP_RATE);

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
    if(typeof c === "object" && c.price != null && !c.soldOut) prices.push(c.price);
  }));
  return Math.min(...prices);
}
/* Lens choices allowed for the currently selected LED type (null = no limit). */
function allowedLenses(p, sel){
  const led = findChoice(p, "LED Type", sel["LED Type"]);
  return (led && led.lenses) || null;
}
/* Which choices of an option should be shown, given the current selection. */
function visibleChoices(p, opt, sel){
  const list = opt.choices || [];
  if(opt.label !== "Lens Type") return list;
  const allowed = allowedLenses(p, sel);
  return allowed ? list.filter(c=>allowed.includes(choiceName(c))) : list;
}
/* If the selected lens isn't allowed for the selected LED type, snap to the first allowed one. */
function normalizeSel(p, sel){
  const allowed = allowedLenses(p, sel);
  if(allowed && "Lens Type" in sel && !allowed.includes(sel["Lens Type"])){
    sel["Lens Type"] = allowed[0];
  }
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
/* Saved carts can outlive product changes. On load, drop anything that no
   longer exists (or is sold out / an invalid lens combo) and re-price the
   rest from the current catalog so a stale cart can't submit an old price. */
function sanitizeCart(items){
  const index = {};
  PRODUCTS.forEach(p=>{
    const led = (p.options||[]).find(o=>o.label==="LED Type");
    if(led){
      led.choices.forEach(c=>{ if(!c.soldOut) index[c.sku] = {price:c.price, led:c.name, lenses:c.lenses}; });
    } else {
      index[p.sku] = {price:p.price};
    }
  });
  index[LINK_SKU] = {price:LINK_PRODUCT.price};
  return items.filter(i=>{
    const v = i && index[i.sku];
    if(!v) return false;
    if(v.lenses && i.options && i.options["Lens Type"] && !v.lenses.includes(i.options["Lens Type"])) return false;
    i.price = v.price;
    if(v.led && i.options){
      i.options["LED Type"] = v.led;
      delete i.options["Backing Color"];   // option retired
    }
    return true;
  });
}
let cart = sanitizeCart(loadCart());

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

/* ============ dependent-item logic ============ */
function reflectorCount(){
  return cart.filter(i=>i.sku.startsWith("AVB-RFL")).reduce((s,i)=>s+i.qty,0);
}
function syncRequiredItems(){
  // Link add-on only makes sense with 2+ reflector sets
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
  return `
    <div class="line-item">
      <div>
        <div class="n">${i.name}</div>
        <div class="o">${opts || "—"}</div>
        <div class="li-controls">
          <div class="li-qty">
            <button data-act="dec" data-idx="${idx}" aria-label="Decrease quantity" ${i.qty<=1?"disabled":""}>−</button>
            <span>${i.qty}</span>
            <button data-act="inc" data-idx="${idx}" aria-label="Increase quantity" ${i.qty>=20?"disabled":""}>+</button>
          </div>
          <button class="rm" data-idx="${idx}">Remove</button>
        </div>
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
  if(isFarState(shipState)){
    el.className = "shipnote on";
    el.textContent = `Free shipping over ${fmt(FREE_SHIP_MIN)} covers the lower 48`;
  } else if(total >= FREE_SHIP_MIN){
    el.className = "shipnote on unlocked";
    el.textContent = "✓ Free shipping unlocked";
  } else {
    el.className = "shipnote on";
    el.textContent = `Add ${fmt(FREE_SHIP_MIN - total)} more for free shipping`;
  }
}
function cartTotal(){ return cart.reduce((s,i)=>s+i.price*i.qty,0); }
/* Items / Shipping / Estimated total — used by the cart drawer and the checkout */
function renderTotals(el){
  if(!el) return;
  if(!cart.length){ el.style.display = "none"; el.innerHTML = ""; return; }
  const sub = cartTotal(), ship = shipCost(sub, shipState);
  const where = isFarState(shipState) ? "Alaska, Hawaii &amp; U.S. territories"
    : shipState ? "Lower 48" : `Lower 48 · ${fmt(SHIP_RATE_FAR)} to AK, HI &amp; U.S. territories`;
  el.innerHTML = `<div class="trow"><span>Items</span><span>${fmt(sub)}</span></div>
    <div class="trow"><span>Shipping<small>${where}</small></span><span>${ship ? fmt(ship) : "Free"}</span></div>
    <div class="trow grand"><span>Estimated total</span><span>${fmt(sub + ship)}</span></div>`;
  el.style.display = "block";
}

/* Free-shipping nudge — on any order under the free-shipping line, offer the
   ONE add-on that best closes the gap:
     ≤ button price  → a button
     ≤ trunk price   → a trunk light
     otherwise       → another reflector set in the LED type they already
                       picked (defaulting to a spot they don't have yet),
                       or a button if they have no reflectors.
   Copy only says "ships free" when the add-on truly gets them there. */
const BUTTON_SKUS = ["AVB-BTN-UP","AVB-BTN-LO"];
const TRUNK_SKU = "AVB-LGT-TRUNK";
const NUDGE_ID = "ADDON-NUDGE";
function reflectorProducts(){ return PRODUCTS.filter(p=>p.sku.startsWith("AVB-RFL")); }
function ledChoice(product, ledName){ return findChoice(product, "LED Type", ledName); }
/* reflector spots (Fender / Rear / Vent) that aren't in the cart yet, in any LED type */
function openSpots(){
  const have = new Set(cart.map(i=>i.sku.split("-").slice(0,3).join("-")));   // AVB-RFL-FEN-WL -> AVB-RFL-FEN
  return reflectorProducts().filter(p=>!have.has(p.sku));
}

function freeShipNudge(){
  if(!cart.length) return null;
  const total = cartTotal();
  if(total >= FREE_SHIP_MIN || isFarState(shipState)) return null;
  const gap = FREE_SHIP_MIN - total;
  const btn = PRODUCTS.find(p=>p.sku===BUTTON_SKUS[0]);
  const trunk = PRODUCTS.find(p=>p.sku===TRUNK_SKU);

  let offer;
  if(btn && gap <= btn.price){
    offer = { kind:"button", price:btn.price, label:"Add a button", pitch:"Add a 3D-printed illuminated button" };
  } else if(trunk && gap <= trunk.price){
    offer = { kind:"trunk", price:trunk.price, label:"Add a trunk light", pitch:"Add our plug-in trunk light kit" };
  } else {
    const lastRefl = [...cart].reverse().find(i=>i.sku.startsWith("AVB-RFL") && i.options && i.options["LED Type"]);
    const choice = lastRefl && ledChoice(reflectorProducts()[0], lastRefl.options["LED Type"]);
    if(choice && !choice.soldOut && openSpots().length){
      offer = { kind:"set", led:choice.name, price:choice.price,
        label:`Add another ${choice.name} set`, pitch:`Match it on another spot — ${choice.name} reflectors` };
    } else if(btn){
      offer = { kind:"button", price:btn.price, label:"Add a button", pitch:"Add a 3D-printed illuminated button" };
    } else return null;
  }
  const after = total + offer.price;
  const free = after >= FREE_SHIP_MIN;
  return Object.assign(offer, {
    sku: NUDGE_ID,
    name: free ? `${offer.label}, ship free` : offer.label,
    desc: free ? `${offer.pitch} for ${fmt(offer.price)} and your order ships free.`
               : `${offer.pitch} for ${fmt(offer.price)} — you'll be ${fmt(FREE_SHIP_MIN - after)} from free shipping.`
  });
}

function getAddonOffers(){
  const offers = [];
  if(reflectorCount() >= 2 && !cart.some(i=>i.sku===LINK_SKU)) offers.push(LINK_PRODUCT);
  const nudge = freeShipNudge();
  if(nudge) offers.push(nudge);
  return offers;
}

/* pickers shown inside the nudge card */
const sel_ = (role, label, opts) =>
  `<select data-role="${role}" aria-label="${label}">${opts.map(([v,t])=>`<option value="${v}">${t}</option>`).join("")}</select>`;
function nudgePickerHTML(o){
  if(o.kind==="button"){
    const rows = BUTTON_SKUS.map(sku=>PRODUCTS.find(p=>p.sku===sku)).filter(Boolean);
    const colors = optionChoiceList(rows[0].options.find(x=>x.label==="LED Color")).map(choiceName);
    return `<div class="addon-selects">${sel_("product","Button row", rows.map(p=>[p.sku, p.name.replace(/^Buttons — /,"")]))}${sel_("color","Button LED color", colors.map(c=>[c, c+" LED"]))}</div>`;
  }
  if(o.kind==="trunk"){
    const trunk = PRODUCTS.find(p=>p.sku===TRUNK_SKU);
    const colors = optionChoiceList(trunk.options.find(x=>x.label==="Color")).map(choiceName);
    return `<div class="addon-selects">${sel_("color","Trunk light color", colors.map(c=>[c, c]))}</div>`;
  }
  if(o.kind==="set"){
    // only spots they don't already have, so nobody doubles up by accident
    const spots = openSpots();
    const lenses = ledChoice(spots[0], o.led).lenses || ["Frosted","Tinted"];
    return `<div class="addon-selects">${sel_("product","Reflector spot", spots.map(p=>[p.sku, p.name]))}${sel_("lens","Lens type", lenses.map(l=>[l, l+" lens"]))}</div>`;
  }
  return "";
}
function nudgeItem(o, card){
  const pick = role => { const el = card.querySelector(`[data-role="${role}"]`); return el ? el.value : null; };
  if(o.kind==="button"){
    const p = PRODUCTS.find(x=>x.sku===pick("product"));
    return { sku:p.sku, name:p.name, price:p.price, qty:1, options:{"LED Color":pick("color")} };
  }
  if(o.kind==="trunk"){
    const p = PRODUCTS.find(x=>x.sku===TRUNK_SKU);
    return { sku:p.sku, name:p.name, price:p.price, qty:1, options:{"Color":pick("color")} };
  }
  if(o.kind==="set"){
    const p = PRODUCTS.find(x=>x.sku===pick("product"));
    const c = ledChoice(p, o.led);
    return { sku:c.sku, name:p.name, price:c.price, qty:1, options:{"LED Type":c.name, "Lens Type":pick("lens")} };
  }
  return null;
}
function renderAddonOffers(container){
  if(!container) return;
  const offers = getAddonOffers();
  container.innerHTML = offers.map(o => `
    <div class="addon-card">
      <div>
        <div class="t">${o.name} — ${fmt(o.price)}</div>
        <div class="d">${o.desc}</div>
        ${o.sku===NUDGE_ID ? nudgePickerHTML(o) : ``}
      </div>
      <button class="addon-add" data-sku="${o.sku}">+ Add</button>
    </div>`).join("");
  container.querySelectorAll(".addon-add").forEach(btn=>{
    btn.onclick = ()=>{
      const o = offers.find(x=>x.sku===btn.dataset.sku);
      const item = o.sku===NUDGE_ID
        ? nudgeItem(o, btn.closest(".addon-card"))
        : { sku:o.sku, name:o.name, price:o.price, qty:1, options:{} };
      if(!item) return;
      cart.push(item);
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
    renderTotals($("subtotalRow"));
    renderShipNote($("shipNote"));
    if($("cartAddon")) $("cartAddon").innerHTML = "";
    return;
  }
  wrap.innerHTML = cart.map((i,idx)=>lineItemHTML(i,idx)).join("");
  bindLineItems(wrap);
  renderTotals($("subtotalRow"));
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
  {label:"One Harness",   href:"harness.html", hideSm:true},
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
        <a href="harness.html">One Harness</a>
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
      <div class="totals" id="subtotalRow" style="display:none"></div>
      <div class="shipnote" id="shipNote"></div>
      <div id="cartAddon"></div>
    </div>
    <div class="drawer-foot"><button class="sendbtn" id="toCheckout">Continue to checkout</button><p class="finehint">U.S. shipping only. Invoice sent after we confirm.</p></div>
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
