// Vito Locks — Products Page Script

// ============================================================
// PRODUCT DATA
// ============================================================
const PRODUCTS = [
  {
    id: 1,
    name: 'Padlocks — Brass Series (20–40mm)',
    emoji: '🔒',
    category: 'padlock',
    desc: 'Solid brass body padlocks in 20mm, 25mm, 30mm, and 40mm. Dual-locking shackle, 4-pin tumbler, and anti-drill brass cylinder.',
    tags: ['Brass Core', 'Anti-Drill', '4-Pin Tumbler'],
    moq: '500 pcs'
  },
  {
    id: 2,
    name: 'Padlocks — Steel Series (40–80mm)',
    emoji: '🔒',
    category: 'padlock',
    desc: 'Heavy-duty steel padlocks with hardened steel shackle. Weatherproof design with rubber cover, ideal for outdoor and industrial use.',
    tags: ['Hardened Shackle', 'Weatherproof', 'Industrial'],
    moq: '300 pcs'
  },
  {
    id: 3,
    name: 'Padlocks — Zinc Alloy (20–60mm)',
    emoji: '🔒',
    category: 'padlock',
    desc: 'Lightweight zinc alloy die-cast padlocks with corrosion-resistant nickel plating. Popular for luggage, lockers, and general use.',
    tags: ['Zinc Alloy', 'Nickel Plated', 'Lightweight'],
    moq: '1000 pcs'
  },
  {
    id: 4,
    name: 'Door Locks — Mortise Lock Set',
    emoji: '🚪',
    category: 'door',
    desc: 'Full mortise lock set including latch, deadbolt, handles, and escutcheon plates. Stainless steel finish, ANSI Grade 2 compliant.',
    tags: ['ANSI Grade 2', 'SS Finish', 'Full Set'],
    moq: '200 sets'
  },
  {
    id: 5,
    name: 'Door Locks — Cylindrical Knob Lock',
    emoji: '🚪',
    category: 'door',
    desc: 'Standard cylindrical knob lock for residential and light commercial doors. Keyed entry with privacy and passage function options.',
    tags: ['Keyed Entry', 'Privacy Option', 'Residential'],
    moq: '300 pcs'
  },
  {
    id: 6,
    name: 'Door Locks — Double Cylinder Deadbolt',
    emoji: '🚪',
    category: 'door',
    desc: 'High-security double cylinder deadbolt with ANSI Grade 1 rating. 1-inch throw bolt, hardened steel insert, pick-resistant cylinder.',
    tags: ['ANSI Grade 1', 'Pick-Resistant', '1" Bolt'],
    moq: '200 pcs'
  },
  {
    id: 7,
    name: 'Cam Locks — 16mm Tubular',
    emoji: '🗄️',
    category: 'cam',
    desc: 'Standard 16mm diameter tubular cam lock. Keyed different or keyed alike. 5-pin tumbler. Ideal for cabinets, mailboxes, and display cases.',
    tags: ['16mm Dia', 'Keyed Alike Option', '5-Pin'],
    moq: '500 pcs'
  },
  {
    id: 8,
    name: 'Cam Locks — 22mm Tubular',
    emoji: '🗄️',
    category: 'cam',
    desc: 'Medium-duty 22mm cam lock with multiple cam length options (13mm–50mm). Plated zinc body with brass cylinder for corrosion resistance.',
    tags: ['22mm Dia', 'Multi-Cam', 'Brass Cylinder'],
    moq: '300 pcs'
  },
  {
    id: 9,
    name: 'Cam Locks — 30mm Heavy Duty',
    emoji: '🗄️',
    category: 'cam',
    desc: 'Heavy-duty 30mm cam lock for vending machines, ATMs, and industrial equipment. High-security 7-pin cylinder with double-bit key.',
    tags: ['30mm Dia', '7-Pin High Security', 'Vending/ATM'],
    moq: '200 pcs'
  },
  {
    id: 10,
    name: 'Combination Locks — 3-Wheel Resettable',
    emoji: '🔐',
    category: 'combination',
    desc: 'User-resettable 3-wheel combination padlock with 1000 combinations. Compact body, ideal for school lockers and storage boxes.',
    tags: ['Resettable', '3-Wheel', 'Locker Safe'],
    moq: '500 pcs'
  },
  {
    id: 11,
    name: 'Combination Locks — TSA Approved Travel Lock',
    emoji: '🔐',
    category: 'combination',
    desc: 'TSA-approved combination padlock with recognizable red diamond indicator. Compact and lightweight, perfect for luggage and backpacks.',
    tags: ['TSA Approved', 'Travel Lock', 'Lightweight'],
    moq: '500 pcs'
  },
  {
    id: 12,
    name: 'Combination Locks — 4-Digit Locker Lock',
    emoji: '🔐',
    category: 'combination',
    desc: '4-digit resettable combination lock offering 10,000 combinations. Heavy-duty zinc body with hardened steel shackle.',
    tags: ['4-Digit', '10K Combos', 'Hardened Shackle'],
    moq: '300 pcs'
  },
  {
    id: 13,
    name: 'Disc Detainer Locks — Standard',
    emoji: '🔑',
    category: 'disc',
    desc: 'Disc detainer padlock with 5 rotating discs. Extremely pick-resistant. Hardened steel shackle, suitable for chain and gate security.',
    tags: ['Pick-Resistant', '5-Disc', 'Chain & Gate'],
    moq: '200 pcs'
  },
  {
    id: 14,
    name: 'Disc Detainer Locks — Heavy Duty Gate Lock',
    emoji: '🔑',
    category: 'disc',
    desc: 'Large-format disc detainer lock for warehouses, shipping containers, and perimeter gates. 80mm body, 14mm hardened shackle.',
    tags: ['80mm Body', '14mm Shackle', 'Container Grade'],
    moq: '100 pcs'
  },
  {
    id: 15,
    name: 'OEM / Custom Locks',
    emoji: '📦',
    category: 'oem',
    desc: 'Custom-branded locks in your logo, color, keyway, and packaging. Full OEM/ODM from tooling to finished product. Fast sample lead time of 7–15 days.',
    tags: ['Custom Branding', 'Private Label', 'Low MOQ'],
    moq: 'Negotiable'
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
