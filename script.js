// ═══════════════════════
// PRODUCT DATA
// ═══════════════════════
const marts = [
  { name: "Amul Toned Milk (1L)", price: 66, category: "Dairy Products", img: "images/amultonedmilk.jpg" },
  { name: "Amul Butter", price: 56, category: "Dairy Products", img: "images/amulbutter.jpg" },
  { name: "Amul Cheese Slices", price: 120, category: "Dairy Products", img: "images/amulcheeseslices.jpg" },
  { name: "Fresh Paneer", price: 90, category: "Dairy Products", img: "images/freshpaneer.jpg" },
  { name: "Curd / Dahi", price: 45, category: "Dairy Products", img: "images/curd.jpg" },
  { name: "Pure Ghee", price: 320, category: "Dairy Products", img: "images/ghee.jpg" },
  { name: "Flavoured Yogurt Cup", price: 35, category: "Dairy Products", img: "images/flavouredyogurt.jpg" },
  { name: "White Bread Loaf", price: 45, category: "Bakery", img: "images/whitebread.jpg" },
  { name: "Brown Bread Loaf", price: 55, category: "Bakery", img: "images/brownbread.jpg" },
  { name: "Rusk Pack", price: 40, category: "Bakery", img: "images/rusk.jpg" },
  { name: "Cream Bun", price: 60, category: "Bakery", img: "images/creambun.jpg" },
  { name: "Basmati Rice(1kg)", price: 120, category: "Groceries & Staples", img: "images/basmatirice.jpg" },
  { name: "Toor Dal (1kg)", price: 140, category: "Groceries & Staples", img: "images/toordal.jpg" },
  { name: "Chana Dal (1kg)", price: 110, category: "Groceries & Staples", img: "images/chanadal.jpg" },
  { name: "Moong Dal (1kg)", price: 130, category: "Groceries & Staples", img: "images/moongdal.jpg" },
  { name: "Sugar (1kg)", price: 48, category: "Groceries & Staples", img: "images/sugar.jpg" },
  { name: "Refined Sunflower Oil (1L)", price: 165, category: "Groceries & Staples", img: "images/sunfloweroil.jpg" },
  { name: "Mustard Oil (1L)", price: 175, category: "Groceries & Staples", img: "images/mustardoil.jpg" },
  { name: "Wheat Atta (5kg)", price: 260, category: "Groceries & Staples", img: "images/wheatatta.jpg" },
  { name: "Iodised Salt (1kg)", price: 22, category: "Groceries & Staples", img: "images/salt.jpg" },
  { name: "Besan / Gram Flour (1kg)", price: 85, category: "Groceries & Staples", img: "images/besan.jpg" },
  { name: "Surf Excel Detergent (1kg)", price: 145, category: "Cleaning Supplies", img: "images/surfexcel.jpg" },
  { name: "Vim Dishwash Bar", price: 20, category: "Cleaning Supplies", img: "images/vimbar.jpg" },
  { name: "Vim Dishwash Gel (500ml)", price: 99, category: "Cleaning Supplies", img: "images/vimgel.jpg" },
  { name: "Harpic Toilet Cleaner (500ml)", price: 89, category: "Cleaning Supplies", img: "images/harpic.jpg" },
  { name: "Colin Glass Cleaner (500ml)", price: 99, category: "Cleaning Supplies", img: "images/colin.jpg" },
  { name: "Lizol Floor Cleaner (975ml)", price: 199, category: "Cleaning Supplies", img: "images/lizol.jpg" },
  { name: "White Phenyl (1L)", price: 79, category: "Cleaning Supplies", img: "images/phenyl.jpg" },
  { name: "Scotch-Brite Scrub Pad (2pcs)", price: 45, category: "Cleaning Supplies", img: "images/scrubpad.jpg" },
  { name: "Odonil Air Freshener", price: 89, category: "Cleaning Supplies", img: "images/odonil.jpg" },
  { name: "Toilet Cleaner Spray", price: 95, category: "Cleaning Supplies", img: "images/toiletcleanerspray.jpg" },
  { name: "Garbage Bags", price: 99, category: "Cleaning Supplies", img: "images/garbagebags.jpg" },
  { name: "Aloo Bhujia (200g)", price: 55, category: "Snacks (Namkeen)", img: "images/aloobhujia.jpg" },
  { name: "Bhujia Sev (200g)", price: 50, category: "Snacks (Namkeen)", img: "images/bhujiasev.jpg" },
  { name: "Mixture Namkeen (200g)", price: 60, category: "Snacks (Namkeen)", img: "images/mixturenamkeen.jpg" },
  { name: "Coca-Cola", price: 40, category: "Beverages", img: "images/cocacola.jpg" },
  { name: "Sprite", price: 40, category: "Beverages", img: "images/sprite.jpg" },
  { name: "Frooti Mango Drink", price: 20, category: "Beverages", img: "images/frooti.jpg" },
  { name: "Real Fruit Juice", price: 110, category: "Beverages", img: "images/realjuice.jpg" },
  { name: "Packaged Drinking Water (1L)", price: 20, category: "Beverages", img: "images/mineralwater.jpg" },
  { name: "Tea Leaves", price: 240, category: "Beverages", img: "images/tealeaves.jpg" },
  { name: "Instant Coffee", price: 275, category: "Beverages", img: "images/instantcoffee.jpg" },
  { name: "Health Drink Powder (500g)", price: 230, category: "Beverages", img: "images/healthdrink.jpg" },
  { name: "Chocolate Malt Drink (500g)", price: 220, category: "Beverages", img: "images/maltdrink.jpg" },
  { name: "Rose Syrup (750ml)", price: 175, category: "Beverages", img: "images/rosesyrup.jpg" },
  { name: "Dairy Milk Chocolate (55g)", price: 40, category: "Sweets & Chocolates", img: "images/dairymilk.jpg" },
  { name: "Wafer Chocolate Bar", price: 30, category: "Sweets & Chocolates", img: "images/waferchocolate.jpg" },
  { name: "Chocolate Ice Cream", price: 120, category: "Sweets & Chocolates", img: "images/chocolateicecream.jpg" },
  { name: "Soan Papdi", price: 90, category: "Sweets & Chocolates", img: "images/soanpapdi.jpg" },
  { name: "Gulab Jamun Tin (1kg)", price: 150, category: "Sweets & Chocolates", img: "images/gulabjamuntin.jpg" },
  { name: "Rasgulla Tin (1kg)", price: 140, category: "Sweets & Chocolates", img: "images/rasgullatin.jpg" },
  { name: "Assorted Praline Chocolates", price: 199, category: "Sweets & Chocolates", img: "images/pralinechocolates.jpg" },
  { name: "Crunch Chocolate Bar", price: 10, category: "Sweets & Chocolates", img: "images/crunchbar.jpg" },
  { name: "Caramel Chocolate Bar", price: 10, category: "Sweets & Chocolates", img: "images/caramelbar.jpg" },
  { name: "Basmati Rice Premium (5kg)", price: 550, category: "Rice & Grains", img: "images/basmatipremium.jpg" },
  { name: "Sona Masoori Rice (5kg)", price: 320, category: "Rice & Grains", img: "images/sonamasoori.jpg" },
  { name: "Poha / Flattened Rice (500g)", price: 45, category: "Rice & Grains", img: "images/poha.jpg" },
  { name: "Suji / Rava (1kg)", price: 55, category: "Rice & Grains", img: "images/suji.jpg" },
  { name: "Vermicelli / Semiya (400g)", price: 45, category: "Rice & Grains", img: "images/vermicelli.jpg" },
  { name: "Quinoa (500g)", price: 220, category: "Rice & Grains", img: "images/quinoa.jpg" },
  { name: "Brown Rice (1kg)", price: 95, category: "Rice & Grains", img: "images/brownrice.jpg" },
  { name: "Idli Rice (1kg)", price: 65, category: "Rice & Grains", img: "images/idlirice.jpg" },
  { name: "Turmeric Powder (200g)", price: 55, category: "Spices & Masalas", img: "images/turmericpowder.jpg" },
  { name: "Red Chilli Powder (200g)", price: 65, category: "Spices & Masalas", img: "images/redchillipowder.jpg" },
  { name: "Garam Masala (100g)", price: 75, category: "Spices & Masalas", img: "images/garammasala.jpg" },
  { name: "Sabzi Masala (100g)", price: 75, category: "Spices & Masalas", img: "images/sabzimasala.jpg" },
  { name: "Coriander Powder (200g)", price: 50, category: "Spices & Masalas", img: "images/corianderpowder.jpg" },
  { name: "Cumin Seeds / Jeera (200g)", price: 90, category: "Spices & Masalas", img: "images/cuminseeds.jpg" },
  { name: "Chana Masala (100g)", price: 55, category: "Spices & Masalas", img: "images/chanamasala.jpg" },
  { name: "Sambar Masala (100g)", price: 60, category: "Spices & Masalas", img: "images/sambarmasala.jpg" },
  { name: "Black Pepper Powder (100g)", price: 110, category: "Spices & Masalas", img: "images/blackpepper.jpg" },
  { name: "Corn Flakes (500g)", price: 199, category: "Breakfast & Cereals", img: "images/cornflakes.jpg" },
  { name: "Oats (1kg)", price: 210, category: "Breakfast & Cereals", img: "images/oats.jpg" },
  { name: "Instant Oats Noodles", price: 60, category: "Breakfast & Cereals", img: "images/oatsnoodles.jpg" },
  { name: "Breakfast Mix (200g)", price: 90, category: "Breakfast & Cereals", img: "images/breakfastmix.jpg" },
  { name: "Bread & Jam Combo", price: 99, category: "Breakfast & Cereals", img: "images/breadjamcombo.jpg" },
  { name: "Peanut Butter (350g)", price: 175, category: "Breakfast & Cereals", img: "images/peanutbutter.jpg" },
  { name: "Honey (500g)", price: 199, category: "Breakfast & Cereals", img: "images/honey.jpg" },
  { name: "Muesli (500g)", price: 240, category: "Breakfast & Cereals", img: "images/muesli.jpg" },
  { name: "Idli / Dosa Batter (1kg)", price: 65, category: "Breakfast & Cereals", img: "images/dosabatter.jpg" },
  { name: "Upma Mix (200g)", price: 55, category: "Breakfast & Cereals", img: "images/upmamix.jpg" },
  { name: "Poha Ready Mix (200g)", price: 60, category: "Breakfast & Cereals", img: "images/pohamix.jpg" },
  { name: "Instant Noodles (4pack)", price: 56, category: "Instant & Ready-to-Cook", img: "images/instantnoodles.jpg" },
  { name: "Masala Noodles (4pack)", price: 56, category: "Instant & Ready-to-Cook", img: "images/masalanoodles.jpg" },
  { name: "Instant Soup", price: 35, category: "Instant & Ready-to-Cook", img: "images/instantsoup.jpg" },
  { name: "Ready-to-Eat Meal", price: 90, category: "Instant & Ready-to-Cook", img: "images/readytoeatmeal.jpg" },
  { name: "Toothpaste (200g)", price: 99, category: "Personal Care", img: "images/toothpaste.jpg" },
  { name: "Bathing Soap (3pcs)", price: 130, category: "Personal Care", img: "images/bathingsoap.jpg" },
  { name: "Shampoo (340ml)", price: 210, category: "Personal Care", img: "images/shampoo.jpg" },
  { name: "Razor", price: 99, category: "Personal Care", img: "images/razor.jpg" },
  { name: "Baby Diapers (Pack of 30)", price: 550, category: "Baby Care", img: "images/babydiapers.jpg" },
  { name: "Baby Powder (200g)", price: 150, category: "Baby Care", img: "images/babypowder.jpg" },
  { name: "Fresh Apples (1kg)", price: 150, category: "Fruits & Vegetables", img: "images/apples.jpg" },
  { name: "Bananas (Dozen)", price: 60, category: "Fruits & Vegetables", img: "images/bananas.jpg" },
  { name: "Onions (1kg)", price: 35, category: "Fruits & Vegetables", img: "images/onions.jpg" },
  { name: "Tomatoes (1kg)", price: 40, category: "Fruits & Vegetables", img: "images/tomatoes.jpg" },
  { name: "LED Bulb (9W)", price: 99, category: "Household Essentials", img: "images/ledbulb.jpg" },
  { name: "Steel Water Bottle", price: 199, category: "Household Essentials", img: "images/steelbottle.jpg" },
  { name: "Plastic Storage Containers", price: 249, category: "Household Essentials", img: "images/storagecontainers.jpg" },
  { name: "Aluminium Foil Roll", price: 89, category: "Household Essentials", img: "images/aluminiumfoil.jpg" },
  { name: "Cotton Bath Towel", price: 199, category: "Household Essentials", img: "images/bathtowel.jpg" },
  { name: "Mosquito Repellent Coil", price: 30, category: "Household Essentials", img: "images/mosquitocoil.jpg" },
  { name: "Scented Candles", price: 49, category: "Household Essentials", img: "images/candles.jpg" },
  { name: "Matchbox", price: 20, category: "Household Essentials", img: "images/matchbox.jpg" },
  { name: "Broom / Jhadu", price: 79, category: "Household Essentials", img: "images/broom.jpg" },
  { name: "Steel Mug", price: 99, category: "Household Essentials", img: "images/steelmug.jpg" },
  { name: "Kitchen Napkins", price: 60, category: "Household Essentials", img: "images/kitchennapkins.jpg" },
  { name: "Plastic Mug", price: 45, category: "Household Essentials", img: "images/plasticmug.jpg" },
];

// ═══════════════════════
// STATE
// ═══════════════════════
let cart = [], quantities = {}, discount = 0, currentUser = null, toastTimer = null, modalmarts = null;
let orderHistory = [];

function loadUserHistory() {
  if (currentUser) {
    try {
      orderHistory = JSON.parse(localStorage.getItem("fdHistory_" + currentUser.email) || "[]");
    } catch (e) { }
  } else {
    try {
      orderHistory = JSON.parse(localStorage.getItem("fdHistory") || "[]");
    } catch (e) { }
  }
}
loadUserHistory();

// ═══════════════════════
// FLOATIES
// ═══════════════════════
(function () {
  const ems = ["🛒", "🛍️", "📦", "🧴", "🧻", "🧼", "🥫", "🍯", "🧃", "🍬", "🔌", "🧺"];
  ["heroFloaties", "loginFloaties", "signupFloaties", "welcomeFloaties"].forEach(id => {
    const w = document.getElementById(id); if (!w) return;
    ems.forEach((e, i) => {
      const s = document.createElement("span"); s.className = "floaty"; s.textContent = e;
      s.style.cssText = `left:${4 + i * 8}%;bottom:-60px;animation-duration:${6 + Math.random() * 8}s;animation-delay:${i * 0.65}s;font-size:${1.4 + Math.random() * 0.8}rem`;
      w.appendChild(s);
    });
  });
})();

// ═══════════════════════
// FILTER SCROLL
// ═══════════════════════
function scrollFilters(dir) {
  const bar = document.getElementById("filtersBar");
  if (!bar) return;
  bar.scrollBy({ left: dir * 200, behavior: "smooth" });
}

// ═══════════════════════
// NAVIGATION
// ═══════════════════════
function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
  const noNav = ["heroPage", "loginPage", "signupPage", "welcomePage"];
  document.getElementById("bottomNav").style.display = noNav.includes(id) ? "none" : "flex";
}

function setNav(key) {
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  const el = document.getElementById("nav-" + key);
  if (el) el.classList.add("active");
}

function navClick(key) {
  setNav(key);
  if (key === "home") { showPage("heroPage"); }
  else if (key === "menu") { goToMenu(); }
  else if (key === "cart") { goToCart(); }
  else if (key === "history") { showPage("historyPage"); renderHistory(); }
  else if (key === "profile") { showPage("profilePage"); renderProfile(); }
}

function goToMenu() {
  showPage("menuPage"); setNav("menu");
  const hu = document.getElementById("headerUser");
  if (hu) hu.textContent = currentUser ? "👤 " + currentUser.name : "";
  document.getElementById("searchBar").value = "";
  renderMenu(marts); resetFilters();
}

function goToCart() {
  clearToast(); showPage("cartPage"); setNav("cart"); renderCart();
}

// ═══════════════════════
// AUTH HELPERS
// ═══════════════════════
function togglePw(id, btn) {
  const inp = document.getElementById(id);
  inp.type = inp.type === "password" ? "text" : "password";
  btn.textContent = inp.type === "password" ? "👁" : "🙈";
}

function fieldErr(id, show) {
  document.getElementById(id).style.display = show ? "block" : "none";
}

function globalErr(id, msg) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.style.display = msg ? "block" : "none";
}

function validEmail(e) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

function validPhone(p) {
  return /^\d{10}$/.test(p);
}

// ═══════════════════════
// SIGNUP
// ═══════════════════════
function doSignup() {
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const phone = document.getElementById("signupPhone").value.trim();
  const pw = document.getElementById("signupPw").value;
  const confirm = document.getElementById("signupConfirm").value;
  let ok = true;

  globalErr("signupGlobalErr", "");

  if (name.length < 2) { fieldErr("signupNameErr", true); ok = false; } else fieldErr("signupNameErr", false);
  if (!validEmail(email)) { fieldErr("signupEmailErr", true); ok = false; } else fieldErr("signupEmailErr", false);
  if (!validPhone(phone)) { fieldErr("signupPhoneErr", true); ok = false; } else fieldErr("signupPhoneErr", false);
  if (pw.length < 6) { fieldErr("signupPwErr", true); ok = false; } else fieldErr("signupPwErr", false);
  if (pw !== confirm) { fieldErr("signupConfirmErr", true); ok = false; } else fieldErr("signupConfirmErr", false);
  if (!ok) return;

  let users = {};
  try { users = JSON.parse(localStorage.getItem("fdUsers") || "{}"); } catch (e) { }
  if (users[email]) { globalErr("signupGlobalErr", "⚠️ Email already registered. Please login."); return; }

  users[email] = { name, email, phone, pw };
  try { localStorage.setItem("fdUsers", JSON.stringify(users)); } catch (e) { }

  currentUser = { name, email, phone };
  loadUserHistory();
  showWelcome(name, "new");
}

// ═══════════════════════
// LOGIN
// ═══════════════════════
function doLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const pw = document.getElementById("loginPw").value;
  let ok = true;

  globalErr("loginGlobalErr", "");

  if (!validEmail(email)) { fieldErr("loginEmailErr", true); ok = false; } else fieldErr("loginEmailErr", false);
  if (!pw) { fieldErr("loginPwErr", true); ok = false; } else fieldErr("loginPwErr", false);
  if (!ok) return;

  let users = {};
  try { users = JSON.parse(localStorage.getItem("fdUsers") || "{}"); } catch (e) { }

  if (!users[email]) { globalErr("loginGlobalErr", "❌ No account with this email. Please sign up."); return; }
  if (users[email].pw !== pw) { globalErr("loginGlobalErr", "❌ Incorrect password. Try again."); return; }

  currentUser = { name: users[email].name, email, phone: users[email].phone };
  loadUserHistory();
  showWelcome(currentUser.name, "returning");
}

function skipAuth() {
  currentUser = null;
  loadUserHistory();
  showWelcome("Guest", "guest");
}

function showWelcome(name, type) {
  const av = document.getElementById("welcomeAvatar");
  const ti = document.getElementById("welcomeTitle");
  const ms = document.getElementById("welcomeMsg");

  if (type === "guest") {
    av.textContent = "🛍️";
    ti.textContent = "Welcome, Guest!";
    ms.textContent = "Browse our store and shop your favourites!";
  }
  else if (type === "new") {
    av.textContent = "🎉";
    ti.textContent = "Welcome, " + name + "!";
    ms.textContent = "Your account is ready. Time to explore the store!";
  }
  else {
    av.textContent = "👋";
    ti.textContent = "Welcome back, " + name + "!";
    ms.textContent = "Great to see you again. Let's get shopping!";
  }
  showPage("welcomePage");
}

// ═══════════════════════
// PRODUCT RENDER
// ═══════════════════════
function safeId(n) {
  return n.replace(/[^a-z0-9]/gi, "_");
}

function renderMenu(data) {
  const fc = document.getElementById("martContainer");
  fc.innerHTML = "";
  fc.className = "container" + (data.length === 1 ? " single-result" : "");

  data.forEach((mart, i) => {
    if (!quantities[mart.name] || !cart.find(c => c.name === mart.name)) quantities[mart.name] = 1;

    const qid = "q_" + safeId(mart.name);
    const idx = marts.indexOf(mart);
    const inCart = cart.find(c => c.name === mart.name);
    const badgeStyle = inCart ? "display:block" : "display:none";
    const badgeQty = inCart ? inCart.qty : 0;

    fc.innerHTML += `
      <div class="card" style="animation-delay:${i * 0.04}s" onclick="openModal(${idx})">
        <div class="card-in-cart-badge" id="badge_${safeId(mart.name)}" style="${badgeStyle}">🛒 ${badgeQty} in cart</div>
        <img src="${mart.img}" alt="${mart.name}">
        <h3>${mart.name}</h3>
        <div class="price">₹${mart.price}</div>
        <div class="cat-label">${mart.category}</div>
        <div class="qty" onclick="event.stopPropagation()">
          <button onclick="changeQty(${idx},-1)">−</button>
          <span id="${qid}">${quantities[mart.name]}</span>
          <button onclick="changeQty(${idx},1)">+</button>
        </div>
        <button class="addBtn" onclick="event.stopPropagation();addToCart(${idx})">Add to Cart</button>
      </div>`;
  });
}

function resetFilters() {
  document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active-filter"));
  const f = document.querySelector(".filters button");
  if (f) f.classList.add("active-filter");
}

function changeQty(idx, val) {
  const mart = marts[idx];
  quantities[mart.name] = Math.max(1, (quantities[mart.name] || 1) + val);
  const el = document.getElementById("q_" + safeId(mart.name));
  if (el) el.textContent = quantities[mart.name];

  if (val === -1) {
    const ci = cart.findIndex(c => c.name === mart.name);
    if (ci > -1) {
      cart[ci].qty = Math.max(0, cart[ci].qty - 1);
      if (cart[ci].qty === 0) { cart.splice(ci, 1); }
      updateCount();
      updateCardBadge(mart.name);
    }
  }
}

// ═══════════════════════
// CART ACTIONS
// ═══════════════════════
function addToCart(idx) {
  const mart = marts[idx];
  const existing = cart.find(i => i.name === mart.name);
  if (existing) {
    existing.qty += quantities[mart.name];
  } else {
    cart.push({ ...mart, qty: quantities[mart.name], note: "" });
  }
  updateCount();
  showToast(mart.name);
  updateCardBadge(mart.name);

  const btn = document.querySelector(".cart-btn");
  if (btn) { btn.classList.remove("bounce"); void btn.offsetWidth; btn.classList.add("bounce"); }
}

function updateCardBadge(name) {
  const badge = document.getElementById("badge_" + safeId(name));
  if (!badge) return;
  const inCart = cart.find(c => c.name === name);
  if (inCart) {
    badge.style.display = "block";
    badge.textContent = "🛒 " + inCart.qty + " in cart";
  } else {
    badge.style.display = "none";
  }
}

function updateCount() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById("cartCount").textContent = total;
  const dot = document.getElementById("navCartDot");
  if (dot) {
    dot.textContent = total;
    dot.style.display = total > 0 ? "block" : "none";
  }
}

// ═══════════════════════
// TOAST
// ═══════════════════════
function showToast(name) {
  const t = document.getElementById("toast");
  document.getElementById("toastName").innerHTML = "🛍️ <strong>" + name + "</strong> added!";
  if (toastTimer) clearTimeout(toastTimer);
  t.classList.remove("show");
  void t.offsetWidth;
  t.classList.add("show");
  toastTimer = setTimeout(() => t.classList.remove("show"), 3500);
}

function clearToast() {
  if (toastTimer) clearTimeout(toastTimer);
  document.getElementById("toast").classList.remove("show");
}

// ═══════════════════════
// ITEM MODAL
// ═══════════════════════
function openModal(idx) {
  modalmart = marts[idx];
  document.getElementById("modalImg").src = modalmart.img;
  document.getElementById("modalImg").alt = modalmart.name;
  document.getElementById("modalName").textContent = modalmart.name;
  document.getElementById("modalCat").textContent = "📂 " + modalmart.category;
  document.getElementById("modalPrice").textContent = "₹" + modalmart.price;

  const existing = cart.find(c => c.name === modalmart.name);
  const initQty = existing ? existing.qty : (quantities[modalmart.name] || 1);
  document.getElementById("modalQtyVal").textContent = initQty;
  quantities[modalmart.name] = initQty;
  document.getElementById("modalNote").value = existing ? existing.note : "";

  document.getElementById("itemModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("itemModal").classList.remove("open");
  document.body.style.overflow = "";
}

function modalBgClick(e) {
  if (e.target === document.getElementById("itemModal")) closeModal();
}

function modalQtyChange(val) {
  if (!modalmart) return;
  const el = document.getElementById("modalQtyVal");
  let q = Math.max(1, parseInt(el.textContent) + val);
  el.textContent = q;
  quantities[modalmart.name] = q;
  const cardEl = document.getElementById("q_" + safeId(modalmart.name));
  if (cardEl) cardEl.textContent = q;
}

function modalAddCart() {
  if (!modalmart) return;
  const newQty = parseInt(document.getElementById("modalQtyVal").textContent);
  const note = document.getElementById("modalNote").value.trim();
  const inCart = cart.find(c => c.name === modalmart.name);

  if (inCart) {
    inCart.qty = newQty;
    inCart.note = note;
    updateCount();
    showToast(modalmart.name);
    updateCardBadge(modalmart.name);
    const btn = document.querySelector(".cart-btn");
    if (btn) { btn.classList.remove("bounce"); void btn.offsetWidth; btn.classList.add("bounce"); }
  } else {
    quantities[modalmart.name] = newQty;
    const idx = marts.indexOf(modalmart);
    addToCart(idx);
    const added = cart.find(c => c.name === modalmart.name);
    if (added) added.note = note;
  }
  closeModal();
}

// ═══════════════════════
// SEARCH & FILTER
// ═══════════════════════
function searchmart(q) {
  q = q.trim().toLowerCase();
  document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active-filter"));
  if (!q) {
    resetFilters();
    renderMenu(marts);
  } else {
    renderMenu(marts.filter(f => f.name.toLowerCase().includes(q) || f.category.toLowerCase().includes(q)));
  }
}

function filtermart(cat, btn) {
  document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active-filter"));
  btn.classList.add("active-filter");
  document.getElementById("searchBar").value = "";
  renderMenu(cat === "All" ? marts : marts.filter(f => f.category === cat));
}

// ═══════════════════════
// CART RENDER
// ═══════════════════════
const FREE_THRESH = 499;
const DELIVERY_FEE = 50;

function renderCart() {
  const wrap = document.getElementById("cartBody");
  wrap.innerHTML = "";

  if (!cart.length) {
    wrap.innerHTML = `<div class="cart-empty">😕 Your cart is empty!<br><button class="back-btn" style="margin-top:20px" onclick="goToMenu()">Browse Products</button></div>`;
    return;
  }

  const sub = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const rem = Math.max(0, FREE_THRESH - sub);
  const pct = Math.min(100, (sub / FREE_THRESH) * 100);

  wrap.innerHTML += `<div class="delivery-bar-wrap"><p>${rem > 0 ? "Add <strong>₹" + rem + "</strong> more for FREE delivery! 🛵" : "🎉 You've unlocked <strong>FREE delivery!</strong>"}</p><div class="delivery-bg"><div class="delivery-fill" style="width:${pct}%"></div></div></div>`;

  cart.forEach((item, ci) => {
    wrap.innerHTML += `
      <div class="cart-card">
        <img src="${item.img}" alt="${item.name}">
        <div class="cc-info">
          <strong>${item.name}</strong>
          <div class="cc-price">₹${item.price} each</div>
          ${item.note ? `<div class="cc-note">📝 ${item.note}</div>` : ""}
          <div class="cc-qty">
            <button onclick="cartQty(${ci},-1)">−</button>
            <span>${item.qty}</span>
            <button onclick="cartQty(${ci},1)">+</button>
          </div>
        </div>
        <div class="cc-right">
          <div class="cc-total">₹${item.price * item.qty}</div>
          <button class="rm-btn" onclick="removeItem(${ci})">🗑️</button>
        </div>
      </div>`;
  });

  wrap.innerHTML += `
    <div class="address-box">
      <h3>📍 Delivery Address</h3>
      <div class="addr-warn" id="addrWarn">
        <div class="addr-warn-inner">
          <span class="addr-warn-icon">📍</span>
          <div class="addr-warn-text">
            <strong>Address Required!</strong>
            <span>Please fill in your Flat/House No., City and PIN Code to place your order.</span>
          </div>
        </div>
      </div>
      <div class="addr-grid">
        <input type="text" id="addrName" placeholder="Full Name" value="${currentUser ? currentUser.name : ''}">
        <input type="tel" id="addrPhone" placeholder="Phone" value="${currentUser ? currentUser.phone : ''}">
        <input type="text" id="addrFlat" placeholder="Flat / House No.">
        <input type="text" id="addrArea" placeholder="Area / Street">
        <input type="text" id="addrCity" placeholder="City">
        <input type="text" id="addrPin" placeholder="PIN Code" maxlength="6">
      </div>
      <div class="addr-full"><input type="text" id="addrLandmark" placeholder="Landmark (optional)"></div>
    </div>`;

  wrap.innerHTML += `
    <div class="promo-box">
      <h3>🎟️ Promo Code</h3>
      <div class="promo-row">
        <input type="text" id="promoInput" placeholder="Try: SAVE10, SAVE20, FLAT100">
        <button onclick="applyPromo()">Apply</button>
      </div>
      <p id="promoMsg"></p>
    </div>`;

  const deliveryFee = sub >= FREE_THRESH ? 0 : DELIVERY_FEE;
  const total = Math.max(0, sub - discount + deliveryFee);

  wrap.innerHTML += `
    <div class="order-summary">
      <h3>📋 Order Summary</h3>
      <div class="sum-row"><span>Subtotal</span><span>₹${sub}</span></div>
      <div class="sum-row"><span>Delivery</span><span style="color:${deliveryFee > 0 ? '#ff3366' : 'green'}">${deliveryFee > 0 ? '₹' + deliveryFee : 'FREE'}</span></div>
      ${discount > 0 ? `<div class="sum-row" style="color:green"><span>Discount</span><span>− ₹${discount}</span></div>` : ""}
      <div class="sum-row total"><span>Total</span><span>₹${total}</span></div>
    </div>`;

  wrap.innerHTML += `
    ${!currentUser ? `
    <div style="background:linear-gradient(135deg,#fff0f5,#ffe6f0);border:2px solid #ffb3c6;border-radius:18px;padding:18px 20px;margin-bottom:16px;text-align:center;">
      <div style="font-size:28px;margin-bottom:8px;">👤</div>
      <p style="font-size:15px;font-weight:600;color:#ff3366;margin-bottom:4px;">Want to save your order history?</p>
      <p style="font-size:13px;color:#888;margin-bottom:14px;">Create a free account to track orders, save addresses & more!</p>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
        <button onclick="showPage('signupPage')" style="padding:9px 22px;background:#ff3366;color:white;border:none;border-radius:20px;font-family:'Poppins',sans-serif;font-size:13px;font-weight:600;cursor:pointer;box-shadow:0 3px 10px rgba(255,51,102,0.3);">✨ Create Account</button>
        <button onclick="showPage('loginPage')" style="padding:9px 22px;background:white;color:#ff3366;border:2px solid #ff3366;border-radius:20px;font-family:'Poppins',sans-serif;font-size:13px;font-weight:600;cursor:pointer;">🔑 Login</button>
      </div>
      <p style="font-size:12px;color:#aaa;margin-top:10px;">Or continue below as guest</p>
    </div>`: ""}
    <button class="pay-btn" onclick="payNow()">💳 Place Order — ₹${total}</button>`;
}

function cartQty(ci, val) {
  cart[ci].qty = Math.max(0, cart[ci].qty + val);
  if (cart[ci].qty === 0) { removeItem(ci); return; }
  updateCount();
  renderCart();
}

function removeItem(ci) {
  const name = cart[ci].name;
  cart.splice(ci, 1);
  updateCount();
  renderCart();
  updateCardBadge(name);
}

function applyPromo() {
  const code = document.getElementById("promoInput").value.trim().toUpperCase();
  const msg = document.getElementById("promoMsg");
  const sub = cart.reduce((s, i) => s + i.price * i.qty, 0);

  if (code === "SAVE10") {
    discount = sub * 0.1;
    msg.style.color = "#2e7d32";
    msg.textContent = "✅ 10% discount applied!";
  } else if (code === "SAVE20") {
    discount = sub * 0.2;
    msg.style.color = "#2e7d32";
    msg.textContent = "✅ 20% discount applied!";
  } else if (code === "FLAT100") {
    discount = 100;
    msg.style.color = "#2e7d32";
    msg.textContent = "✅ ₹100 discount applied!";
  } else {
    discount = 0;
    msg.style.color = "#ff3366";
    msg.textContent = "❌ Invalid promo code";
  }
  renderCart();
}

// ═══════════════════════
// ADDRESS WARNING
// ═══════════════════════
function showAddrWarn() {
  const warn = document.getElementById("addrWarn");
  if (!warn) return;

  warn.classList.remove("visible");
  void warn.offsetWidth;
  warn.classList.add("visible");
  warn.scrollIntoView({ behavior: "smooth", block: "center" });

  const flat = document.getElementById("addrFlat");
  const city = document.getElementById("addrCity");
  const pin = document.getElementById("addrPin");

  [flat, city, pin].forEach(el => {
    if (el && !el.value.trim()) {
      el.style.borderColor = "#ff3366";
      el.style.background = "#fff0f5";
      el.addEventListener("input", function fix() {
        el.style.borderColor = "";
        el.style.background = "";
        el.removeEventListener("input", fix);
        const f = document.getElementById("addrFlat");
        const c = document.getElementById("addrCity");
        const p = document.getElementById("addrPin");
        if (f && c && p && f.value.trim() && c.value.trim() && p.value.trim()) {
          document.getElementById("addrWarn").classList.remove("visible");
        }
      });
    }
  });
}

// ═══════════════════════
// CHECKOUT
// ═══════════════════════
function payNow() {
  if (!cart.length) { return; }

  const flat = document.getElementById("addrFlat") ? document.getElementById("addrFlat").value.trim() : "";
  const city = document.getElementById("addrCity") ? document.getElementById("addrCity").value.trim() : "";
  const pin = document.getElementById("addrPin") ? document.getElementById("addrPin").value.trim() : "";

  if (!flat || !city || !pin) {
    showAddrWarn();
    return;
  }

  const addrStr = [flat, document.getElementById("addrArea").value.trim(), city, pin].filter(Boolean).join(", ");
  const sub = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const deliveryFee = sub >= FREE_THRESH ? 0 : DELIVERY_FEE;

  const order = {
    id: "ORD" + Date.now(),
    date: new Date().toLocaleString(),
    items: cart.map(i => ({ name: i.name, qty: i.qty, price: i.price, note: i.note || "" })),
    subtotal: sub,
    delivery: deliveryFee,
    discount,
    total: Math.max(0, sub + deliveryFee - discount),
    address: addrStr,
    user: currentUser ? currentUser.name : "Guest"
  };

  orderHistory.unshift(order);
  try {
    const historyKey = currentUser ? "fdHistory_" + currentUser.email : "fdHistory";
    localStorage.setItem(historyKey, JSON.stringify(orderHistory));
  } catch (e) { }

  cart = [];
  discount = 0;
  updateCount();
  marts.forEach(f => updateCardBadge(f.name));

  const overlay = document.createElement("div");
  overlay.style.cssText = "position:fixed;inset:0;background:rgba(255,51,102,0.15);display:flex;align-items:center;justify-content:center;z-index:999999;padding:20px;";
  overlay.innerHTML = `
    <div style="background:linear-gradient(135deg,#fff0f5,#ffe6f0);border-radius:28px;padding:36px;max-width:380px;width:100%;text-align:center;box-shadow:0 20px 60px rgba(255,51,102,0.3);animation:popIn 0.4s cubic-bezier(0.34,1.56,0.64,1);border:2px solid #ffb3c6;">
      <div style="font-size:60px;margin-bottom:14px;">🎉</div>
      <h2 style="font-family:'Playfair Display',serif;font-size:26px;color:#ff3366;margin-bottom:8px;">Order Placed!</h2>
      <p style="font-size:14px;color:#5a2c40;margin-bottom:4px;font-weight:500;">Your order has been placed successfully.</p>
      <p style="font-size:13px;color:#ff6699;margin-bottom:8px;">📍 Delivering to: <strong>${addrStr}</strong></p>
      <p style="font-size:13px;color:#888;margin-bottom:24px;">🕐 Estimated delivery: 30–45 mins</p>
      <div style="width:80%;height:3px;background:linear-gradient(90deg,#ff6699,#ff3366,#ff6699);border-radius:10px;margin:0 auto 20px;"></div>
      <button onclick="this.closest('div').parentElement.remove();navClick('menu');" style="padding:11px 32px;background:#ff3366;color:white;border:none;border-radius:25px;font-family:'Poppins',sans-serif;font-size:14px;font-weight:600;cursor:pointer;box-shadow:0 4px 15px rgba(255,51,102,0.4);" onmouseover="this.style.background='#e6005c'" onmouseout="this.style.background='#ff3366'">Back to Shop 🛍️</button>
    </div>`;
  document.body.appendChild(overlay);
}

// ═══════════════════════
// ORDER HISTORY
// ═══════════════════════
function renderHistory() {
  loadUserHistory();

  const wrap = document.getElementById("histBody");
  wrap.innerHTML = "";

  if (!orderHistory.length) {
    wrap.innerHTML = `<div class="hist-empty">📋 No orders yet!<br><button class="back-btn" style="margin-top:20px" onclick="goToMenu()">Browse Products</button></div>`;
    return;
  }

  orderHistory.forEach(order => {
    wrap.innerHTML += `
      <div class="hist-card">
        <div class="hist-card-header">
          <div><strong>${order.id}</strong><br><span>${order.date}</span></div>
          <strong>₹${order.total}</strong>
        </div>
        ${order.items.map(i => `<div class="hist-item"><span>${i.name}${i.note ? ` <em>(${i.note})</em>` : ""} × ${i.qty}</span><span>₹${i.price * i.qty}</span></div>`).join("")}
        ${order.discount > 0 ? `<div style="font-size:12px;color:green;margin-top:6px;">Discount applied: −₹${order.discount}</div>` : ""}
        ${order.delivery > 0 ? `<div style="font-size:12px;color:#ff3366;margin-top:4px;">Delivery fee: ₹${order.delivery}</div>` : ""}
        <div class="hist-total">Total: ₹${order.total}</div>
        ${order.address ? `<div class="hist-addr">📍 ${order.address}</div>` : ""}
      </div>`;
  });
}

// ═══════════════════════
// PROFILE
// ═══════════════════════
function renderProfile() {
  const wrap = document.getElementById("profBody");
  wrap.innerHTML = "";

  if (!currentUser) {
    wrap.innerHTML = `<div class="hist-empty" style="margin-top:60px;">👤 You're browsing as Guest.<br><br><button class="back-btn" onclick="showPage('loginPage')">Login / Sign Up</button></div>`;
    return;
  }

  wrap.innerHTML = `
    <div class="prof-avatar">
      <div>👤</div>
      <h2>${currentUser.name}</h2>
    </div>
    <div class="prof-card">
      <h3>Personal Info</h3>
      <div class="prof-field"><label>Full Name</label><input type="text" id="profName" value="${currentUser.name}"></div>
      <div class="prof-field"><label>Email</label><input type="email" id="profEmail" value="${currentUser.email}" readonly style="opacity:0.6;cursor:not-allowed;"></div>
      <div class="prof-field"><label>Phone</label><input type="tel" id="profPhone" value="${currentUser.phone}" maxlength="10"></div>
      <button class="prof-save" onclick="saveProfile()">💾 Save Changes</button>
      <div class="prof-success" id="profSuccess">✅ Profile updated successfully!</div>
    </div>
    <div class="prof-card">
      <h3>Account</h3>
      <button class="prof-logout" onclick="doLogout()">🚪 Logout</button>
    </div>`;
}

function saveProfile() {
  const name = document.getElementById("profName").value.trim();
  const phone = document.getElementById("profPhone").value.trim();

  if (name.length < 2) { alert("Name must be at least 2 characters."); return; }
  if (!validPhone(phone)) { alert("Enter a valid 10-digit phone number."); return; }

  currentUser.name = name;
  currentUser.phone = phone;

  let users = {};
  try { users = JSON.parse(localStorage.getItem("fdUsers") || "{}"); } catch (e) { }
  if (users[currentUser.email]) {
    users[currentUser.email].name = name;
    users[currentUser.email].phone = phone;
  }
  try { localStorage.setItem("fdUsers", JSON.stringify(users)); } catch (e) { }

  const hu = document.getElementById("headerUser");
  if (hu) hu.textContent = "👤 " + name;

  const s = document.getElementById("profSuccess");
  s.style.display = "block";
  setTimeout(() => s.style.display = "none", 2500);
}

function doLogout() {
  currentUser = null;
  cart = [];
  discount = 0;
  updateCount();
  marts.forEach(f => updateCardBadge(f.name));
  loadUserHistory();
  showPage("heroPage");
}

// ── Init ──
renderMenu(marts);