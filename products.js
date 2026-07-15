// Vito Locks — Products Page Script

// ============================================================
// PRODUCT DATA
// ============================================================
const PRODUCTS = [
  // 1. HINGES
  {
    id: 1,
    name: 'Hinges — 4" Stainless Steel Ball Bearing Butt Hinge',
    emoji: '🔧',
    category: 'hinges',
    desc: 'Heavy-duty 304 stainless steel butt hinge with smooth ball bearing mechanism. Corrosion-resistant finish, ideal for high-traffic commercial and residential doors.',
    tags: ['304 Stainless', 'Ball Bearing', 'Commercial Grade'],
    moq: '500 pairs'
  },
  {
    id: 2,
    name: 'Hinges — Hydraulic Soft-Close Concealed Cabinet Hinge',
    emoji: '🗄️',
    category: 'hinges',
    desc: 'Clip-on 3D adjustable concealed hinge with integrated hydraulic damper for silent, soft-closing action. 110° opening angle for kitchen and wardrobe cabinets.',
    tags: ['Soft-Close', '3D Adjustable', '110° Opening'],
    moq: '1000 pcs'
  },
  {
    id: 3,
    name: 'Hinges — Heavy-Duty Welded Bullet Hinge for Steel Gates',
    emoji: '🔩',
    category: 'hinges',
    desc: 'Precision-turned weld-on bullet hinge with brass grease nipple and stainless steel pin. Built for heavy industrial steel gates, security doors, and containers.',
    tags: ['Weld-On Bullet', 'Grease Nipple', 'High Load Capacity'],
    moq: '300 pairs'
  },

  // 2. CORNERS
  {
    id: 4,
    name: 'Corners — 90° Heavy-Duty Stainless Steel Corner Joint Bracket',
    emoji: '📐',
    category: 'corners',
    desc: 'Thick-gauge reinforced 90-degree angle corner bracket. Counter-sunk screw holes for flush mounting on structural timber, metal frames, and heavy furniture.',
    tags: ['Reinforced 90°', '316 SS Grade', 'Flush Mount'],
    moq: '1000 pcs'
  },
  {
    id: 5,
    name: 'Corners — Decorative Brass Box & Trunk Corner Protectors',
    emoji: '✨',
    category: 'corners',
    desc: 'Ornate antique brass corner protectors designed to safeguard and enhance wooden gift boxes, chests, jewelry cases, and vintage storage trunks.',
    tags: ['Antique Brass', 'Ornate Design', 'Trunk & Box'],
    moq: '2000 pcs'
  },
  {
    id: 6,
    name: 'Corners — L-Shaped Structural Corner Brace (Pack of 50)',
    emoji: '🏢',
    category: 'corners',
    desc: 'Multi-hole zinc-plated structural L-brace for architectural framework, drywall partitioning, and shelving reinforcement. Rust-resistant zinc coating.',
    tags: ['Zinc Plated', 'Multi-Hole', 'Structural Reinforcement'],
    moq: '500 packs'
  },

  // 3. MULTI LOCK
  {
    id: 7,
    name: 'Multi Lock — 4-Point High Security Central Locking System',
    emoji: '🛡️',
    category: 'multi-lock',
    desc: 'Advanced 4-point central locking mechanism that secures top, bottom, and side frame points simultaneously. Engineered for steel security doors and vault entrances.',
    tags: ['4-Point Locking', 'Anti-Pry', 'Central Actuator'],
    moq: '100 sets'
  },
  {
    id: 8,
    name: 'Multi Lock — Mortise Multi-Point Gear Lock for Armored Doors',
    emoji: '🔐',
    category: 'multi-lock',
    desc: 'Precision gear-driven mortise lock with high-tensile steel deadbolts and anti-saw hardened pins. Smooth cylinder actuation with reversible latch.',
    tags: ['Gear-Driven', 'Anti-Saw Pins', 'Armored Door'],
    moq: '150 sets'
  },
  {
    id: 9,
    name: 'Multi Lock — Rod-Actuated Safe & Vault Multi-Lock Mechanism',
    emoji: '🔒',
    category: 'multi-lock',
    desc: 'Heavy-duty vertical and horizontal linkage rod lock for safes, gun cabinets, and ATM enclosures. Compatible with mechanical or digital combination dials.',
    tags: ['Rod-Actuated', 'Safe & Vault', 'Dual Linkage'],
    moq: '100 sets'
  },

  // 4. CUPBOARD LOCK
  {
    id: 10,
    name: 'Cupboard Lock — 19mm Zinc Alloy Cam & Drawer Lock',
    emoji: '🗃️',
    category: 'cupboard-lock',
    desc: 'Standard 19mm cylinder cupboard and desk drawer lock with multi-key options (master keying available). Durable nickel-plated finish.',
    tags: ['19mm Cylinder', 'Master Key Option', 'Nickel Plated'],
    moq: '1000 pcs'
  },
  {
    id: 11,
    name: 'Cupboard Lock — Digital RFID & Keypad Cabinet Lock',
    emoji: '🔢',
    category: 'cupboard-lock',
    desc: 'Keyless electronic cupboard lock featuring dual RFID card and touch keypad entry. Ideal for gym lockers, office storage, and healthcare facilities.',
    tags: ['RFID Card + Keypad', 'Battery Operated', 'Keyless Access'],
    moq: '200 pcs'
  },
  {
    id: 12,
    name: 'Cupboard Lock — Push-Button Latch Lock for Marine & RV Cupboards',
    emoji: '🚪',
    category: 'cupboard-lock',
    desc: 'Vibration-proof push-button cupboard latch that locks when pressed flush. Prevents doors from opening during transit in yachts, RVs, and mobile homes.',
    tags: ['Vibration-Proof', 'Marine & RV', 'Push-to-Lock'],
    moq: '500 pcs'
  },

  // 5. SLIDING DOOR LOCK
  {
    id: 13,
    name: 'Sliding Door Lock — Heavy-Duty Hook Deadbolt Mortise Lock',
    emoji: '🚪',
    category: 'sliding-door-lock',
    desc: 'Stainless steel hook deadbolt specifically engineered to grip sliding door frames securely. Resists forced lifting and prying attempts.',
    tags: ['Hook Deadbolt', 'Anti-Lift', 'Mortise Mounted'],
    moq: '300 sets'
  },
  {
    id: 14,
    name: 'Sliding Door Lock — Flush Pocket Door Pull Lock Set',
    emoji: '🔲',
    category: 'sliding-door-lock',
    desc: 'Sleek recessed flush pull with integrated privacy locking mechanism for timber or glass pocket sliding doors. Modern matte black and satin nickel finishes.',
    tags: ['Flush Pull', 'Pocket Door', 'Recessed Design'],
    moq: '250 sets'
  },
  {
    id: 15,
    name: 'Sliding Door Lock — Patio Glass Door Keyed Lock with Finger Pull',
    emoji: '🪟',
    category: 'sliding-door-lock',
    desc: 'Exterior keyed cylinder sliding patio door lock combined with ergonomic interior finger pull. Weather-resistant powder coated alloy housing.',
    tags: ['Patio Glass Door', 'Exterior Keyed', 'Weather Resistant'],
    moq: '300 sets'
  },

  // 6. ALUMINIUM SECTION LOCK
  {
    id: 16,
    name: 'Aluminium Section Lock — Narrow Stile Hook Bolt for Aluminum Profiles',
    emoji: '🏗️',
    category: 'aluminium-section-lock',
    desc: 'Slim 20mm/25mm backset mortise lock tailored for narrow aluminum extrusion doors and shopfront profiles. Hardened steel hook bolt.',
    tags: ['Narrow Stile', '20mm Backset', 'Shopfront Profile'],
    moq: '500 pcs'
  },
  {
    id: 17,
    name: 'Aluminium Section Lock — Euro Cylinder Profile Lock Set',
    emoji: '🔑',
    category: 'aluminium-section-lock',
    desc: 'Complete euro profile cylinder lock set including escutcheons and narrow strike plate for modern aluminum partition framing systems.',
    tags: ['Euro Profile', 'Complete Set', 'Aluminum Framing'],
    moq: '300 sets'
  },
  {
    id: 18,
    name: 'Aluminium Section Lock — Crescent Latch for Aluminum Sliding Windows',
    emoji: '🪟',
    category: 'aluminium-section-lock',
    desc: 'Heavy-duty zinc die-cast crescent window sash lock with smooth cam action. Secures sliding aluminum window sections firmly against weather seals.',
    tags: ['Crescent Latch', 'Window Sash', 'Cam Action'],
    moq: '1000 pcs'
  },

  // 7. CLOTH HOOK
  {
    id: 19,
    name: 'Cloth Hook — Matte Black Solid Brass Double Coat & Hat Hook',
    emoji: '🧥',
    category: 'cloth-hook',
    desc: 'Minimalist double prong cloth and hat hook crafted from solid forged brass with a resilient electroplated matte black finish.',
    tags: ['Solid Brass', 'Matte Black', 'Double Prong'],
    moq: '500 pcs'
  },
  {
    id: 20,
    name: 'Cloth Hook — 304 Stainless Steel Foldable Wall Hook Rack (5-Hook)',
    emoji: '🔖',
    category: 'cloth-hook',
    desc: 'Space-saving folding hook rail with 5 retractable stainless steel arms. Ideal for hotel bathrooms, mudrooms, and commercial dressing suites.',
    tags: ['Retractable Hooks', '304 Stainless Grade', 'Space Saving'],
    moq: '300 units'
  },
  {
    id: 21,
    name: 'Cloth Hook — Heavy-Duty Industrial Robe Hook with Hidden Screws',
    emoji: '🔗',
    category: 'cloth-hook',
    desc: 'Vandal-resistant heavy duty robe hook with concealed mounting plate. Designed for high-turnover public washrooms and commercial establishments.',
    tags: ['Concealed Mount', 'Vandal Resistant', 'High Capacity'],
    moq: '500 pcs'
  },

  // 8. DOOR HANDLES
  {
    id: 22,
    name: 'Door Handles — Premium Architectural Lever Handle on Round Rose',
    emoji: '🚪',
    category: 'door-handles',
    desc: 'Ergonomic solid stainless steel lever handle with sprung heavy-duty metal rose cover. EN 1906 Category of Use Grade 3 certified for commercial corridors.',
    tags: ['EN 1906 Grade 3', 'Sprung Rose', 'Architectural'],
    moq: '300 pairs'
  },
  {
    id: 23,
    name: 'Door Handles — 600mm Stainless Steel H-Shaped Pull Handle for Entrance',
    emoji: '🏢',
    category: 'door-handles',
    desc: 'Contemporary back-to-back H-shaped tubular pull handle (38mm diameter, 600mm length). Perfect for commercial glass doors and main timber entryways.',
    tags: ['Back-to-Back Pull', '600mm Length', 'Glass & Timber Entry'],
    moq: '100 pairs'
  },
  {
    id: 24,
    name: 'Door Handles — Solid Brass Antique Finish Mortise Handle with Plate',
    emoji: '✨',
    category: 'door-handles',
    desc: 'Traditional ornate solid brass mortise handle set mounted on a long decorative backplate. Features smooth spring return and matching keyhole escutcheon.',
    tags: ['Solid Brass', 'Antique Plate', 'Traditional Luxury'],
    moq: '200 sets'
  }
];

// ============================================================
// STATE
// ============================================================
let quantities = {};    // { productId: qty }
let inquiryBasket = []; // [{ id, name, qty }]
let activeFilter = 'all';
let searchQuery = '';

PRODUCTS.forEach(p => { quantities[p.id] = 0; });

// ============================================================
// RENDER
// ============================================================
function renderProducts() {
  const list = document.getElementById('productList');
  const noResults = document.getElementById('noResults');
  const count = document.getElementById('resultsCount');

  let filtered = PRODUCTS.filter(p => {
    const matchFilter = activeFilter === 'all' || p.category === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || 
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q));
    return matchFilter && matchSearch;
  });

  // Sort
  const sortVal = document.getElementById('sortSelect').value;
  if (sortVal === 'az') filtered.sort((a,b) => a.name.localeCompare(b.name));
  if (sortVal === 'za') filtered.sort((a,b) => b.name.localeCompare(a.name));

  if (filtered.length === 0) {
    list.innerHTML = '';
    noResults.style.display = 'block';
    count.textContent = 'No products found';
    return;
  }

  noResults.style.display = 'none';
  const total = PRODUCTS.length;
  count.textContent = filtered.length === total
    ? `Showing all ${total} products`
    : `Showing ${filtered.length} of ${total} products`;

  list.innerHTML = filtered.map(p => {
    const inBasket = inquiryBasket.find(i => i.id === p.id);
    return `
    <div class="prod-item" data-id="${p.id}" id="prod-item-${p.id}">
      <div class="prod-emoji">${p.emoji}</div>
      <div class="prod-info">
        <div class="prod-name">${p.name}</div>
        <div class="prod-desc">${p.desc}</div>
        <div class="prod-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          <span class="tag" style="background:rgba(208,160,64,0.12);color:var(--accent);border-color:rgba(208,160,64,0.2);">MOQ: ${p.moq}</span>
        </div>
      </div>
      <div class="prod-controls">
        <div class="qty-control">
          <button class="qty-btn qty-minus ripple-btn" data-id="${p.id}" title="Decrease">−</button>
          <input class="qty-input" type="number" min="0" max="999999" value="${quantities[p.id]}" data-id="${p.id}" aria-label="Quantity" />
          <button class="qty-btn qty-plus ripple-btn" data-id="${p.id}" title="Increase">+</button>
        </div>
        <span class="qty-unit">units</span>
        <button class="btn-add-inquiry ripple-btn ${inBasket ? 'added' : ''}" data-id="${p.id}">
          ${inBasket ? '✓ In Basket' : '+ Add to Query'}
        </button>
      </div>
    </div>`;
  }).join('');

  // Attach events
  attachProductEvents();
}

function attachProductEvents() {
  // Quantity minus
  document.querySelectorAll('.qty-minus').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = +this.dataset.id;
      quantities[id] = Math.max(0, quantities[id] - 1);
      updateQtyInput(id);
    });
  });

  // Quantity plus
  document.querySelectorAll('.qty-plus').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = +this.dataset.id;
      quantities[id] = Math.min(999999, quantities[id] + 1);
      updateQtyInput(id);
    });
  });

  // Quantity direct input
  document.querySelectorAll('.qty-input').forEach(input => {
    input.addEventListener('change', function() {
      const id = +this.dataset.id;
      const val = parseInt(this.value) || 0;
      quantities[id] = Math.max(0, Math.min(999999, val));
      this.value = quantities[id];
      syncBasketQty(id);
    });
  });

  // Add to inquiry
  document.querySelectorAll('.btn-add-inquiry').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = +this.dataset.id;
      const product = PRODUCTS.find(p => p.id === id);
      const qty = quantities[id];

      // Auto-set qty to 1 if 0
      if (qty === 0) {
        quantities[id] = 1;
        updateQtyInput(id);
      }

      const existing = inquiryBasket.find(i => i.id === id);
      if (existing) {
        // Remove from basket (toggle)
        inquiryBasket = inquiryBasket.filter(i => i.id !== id);
        this.textContent = '+ Add to Query';
        this.classList.remove('added');
      } else {
        inquiryBasket.push({ id, name: product.name, qty: quantities[id] });
        this.textContent = '✓ In Basket';
        this.classList.add('added');

        // Pre-fill the query form product dropdown
        const qProduct = document.getElementById('qProduct');
        if (qProduct && product) qProduct.value = product.name;

        // Update selected product box
        updateSelectedProductBox(product.name, quantities[id]);
      }

      renderBasket();
    });

    // Ripple effect
    addRipple(btn);
  });

  // Add ripple to qty btns
  document.querySelectorAll('.qty-btn').forEach(addRipple);
}

function updateQtyInput(id) {
  const input = document.querySelector(`.qty-input[data-id="${id}"]`);
  if (input) input.value = quantities[id];
  syncBasketQty(id);
}

function syncBasketQty(id) {
  const item = inquiryBasket.find(i => i.id === id);
  if (item) {
    item.qty = quantities[id];
    renderBasket();
  }
}

function updateSelectedProductBox(name, qty) {
  document.getElementById('spName').textContent = name || 'None selected';
  document.getElementById('spQty').textContent  = qty > 0 ? `Qty: ${qty.toLocaleString()} units` : '';
}

function renderBasket() {
  const summary  = document.getElementById('inquirySummary');
  const listEl   = document.getElementById('inquiryList');

  if (inquiryBasket.length === 0) {
    summary.style.display = 'none';
    return;
  }
  summary.style.display = 'block';
  listEl.innerHTML = inquiryBasket.map(i => `
    <div class="inquiry-item">
      <span class="ii-name">${i.name}</span>
      <span class="ii-qty">${i.qty.toLocaleString()} u</span>
      <button class="ii-remove" data-id="${i.id}" title="Remove">✕</button>
    </div>
  `).join('');

  // Remove buttons
  listEl.querySelectorAll('.ii-remove').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = +this.dataset.id;
      inquiryBasket = inquiryBasket.filter(i => i.id !== id);
      // Reset the add button
      const addBtn = document.querySelector(`.btn-add-inquiry[data-id="${id}"]`);
      if (addBtn) {
        addBtn.textContent = '+ Add to Query';
        addBtn.classList.remove('added');
      }
      renderBasket();
    });
  });
}

// ============================================================
// SEARCH & FILTERS
// ============================================================
document.getElementById('searchInput').addEventListener('input', function() {
  searchQuery = this.value.trim();
  const clearBtn = document.getElementById('searchClear');
  clearBtn.classList.toggle('visible', searchQuery.length > 0);
  renderProducts();
});

document.getElementById('searchClear').addEventListener('click', function() {
  document.getElementById('searchInput').value = '';
  searchQuery = '';
  this.classList.remove('visible');
  renderProducts();
});

document.getElementById('filterChips').addEventListener('click', function(e) {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  activeFilter = chip.dataset.filter;
  renderProducts();
});

document.getElementById('sortSelect').addEventListener('change', renderProducts);

// ============================================================
// QUERY FORM SUBMIT
// ============================================================
document.getElementById('queryForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name    = document.getElementById('qName').value.trim();
  const email   = document.getElementById('qEmail').value.trim();
  const product = document.getElementById('qProduct').value;
  const msg     = document.getElementById('qMsg').value.trim();

  if (!name || !email || !product || !msg) {
    showToast('⚠️ Please fill in all required fields.');
    return;
  }

  showToast(`✓ Query sent for "${product}"! We'll reply within 24 hours.`);
  this.reset();
  document.getElementById('spName').textContent = 'None selected';
  document.getElementById('spQty').textContent  = '';
});

// ============================================================
// CLEAR BASKET
// ============================================================
document.getElementById('clearBasket').addEventListener('click', function() {
  inquiryBasket = [];
  // Reset all add buttons
  document.querySelectorAll('.btn-add-inquiry').forEach(btn => {
    btn.textContent = '+ Add to Query';
    btn.classList.remove('added');
  });
  renderBasket();
});

// ============================================================
// MOBILE NAV
// ============================================================
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger?.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ============================================================
// RIPPLE EFFECT helper
// ============================================================
function addRipple(btn) {
  if (btn._rippleAttached) return;
  btn._rippleAttached = true;
  btn.classList.add('ripple-btn');
  btn.style.position = 'relative';
  btn.style.overflow = 'hidden';
  btn.addEventListener('click', function(e) {
    const old = this.querySelector('.ripple');
    if (old) old.remove();
    const circle   = document.createElement('span');
    const diameter = Math.max(this.clientWidth, this.clientHeight);
    const radius   = diameter / 2;
    const rect     = this.getBoundingClientRect();
    circle.style.width  = circle.style.height = `${diameter}px`;
    circle.style.left   = `${e.clientX - rect.left - radius}px`;
    circle.style.top    = `${e.clientY - rect.top  - radius}px`;
    circle.classList.add('ripple');
    this.appendChild(circle);
    circle.addEventListener('animationend', () => circle.remove());
  });
}

// Static ripple-btn elements (chips, etc.)
document.querySelectorAll('.ripple-btn').forEach(addRipple);

// ============================================================
// TOAST
// ============================================================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 4000);
}

// ============================================================
// INIT
// ============================================================
renderProducts();
