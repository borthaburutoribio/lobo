document.getElementById('year').textContent = new Date().getFullYear();

/* header scroll state */
const header = document.getElementById('siteHeader');
const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* mobile nav */
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* collection filters */
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const filter = btn.dataset.filter;
    productCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.hidden = !match;
    });
  });
});

/* faq accordion */
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const willOpen = !item.classList.contains('is-open');
    document.querySelectorAll('.faq-item').forEach(other => {
      other.classList.remove('is-open');
      other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });
    if (willOpen) {
      item.classList.add('is-open');
      question.setAttribute('aria-expanded', 'true');
    }
  });
});

/* ---------- tienda: catálogo + pedido por WhatsApp ---------- */
(() => {
  const data = window.LOBO_CATALOGO;
  const menu = document.getElementById('shopMenu');
  const tabs = document.getElementById('shopTabs');
  if (!data || !menu || !tabs) return;

  const STORE_KEY = 'lobo-pedido';
  const fmt = n => '$ ' + Number(n).toLocaleString('es-AR');
  const priceLabel = v => {
    if (v === 'consultar') return { text: 'Consultar', ph: false };
    if (!v) return { text: '$ 00.000', ph: true };
    return { text: fmt(v), ph: false };
  };

  let mode = 'minorista';
  let activeCat = data.categorias[0].id;
  let cart = [];
  try { cart = JSON.parse(localStorage.getItem(STORE_KEY)) || []; } catch (e) { cart = []; }
  const save = () => { try { localStorage.setItem(STORE_KEY, JSON.stringify(cart)); } catch (e) {} };

  const findItem = key => {
    const [catId, idx] = key.split(':');
    const cat = data.categorias.find(c => c.id === catId);
    return cat && cat.items[+idx] ? { cat, item: cat.items[+idx] } : null;
  };
  cart = cart.filter(l => findItem(l.key));

  /* tabs */
  data.categorias.forEach(cat => {
    const b = document.createElement('button');
    b.className = 'shop-tab' + (cat.id === activeCat ? ' is-active' : '');
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-selected', String(cat.id === activeCat));
    b.dataset.cat = cat.id;
    b.textContent = cat.nombre;
    b.addEventListener('click', () => {
      activeCat = cat.id;
      tabs.querySelectorAll('.shop-tab').forEach(t => {
        const on = t.dataset.cat === activeCat;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', String(on));
      });
      renderMenu();
    });
    tabs.appendChild(b);
  });

  /* minorista / mayorista */
  const note = document.getElementById('mayoristaNote');
  document.getElementById('mayoristaMin').textContent = data.minimoMayorista;
  document.querySelectorAll('.price-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      mode = btn.dataset.mode;
      document.querySelectorAll('.price-mode-btn').forEach(b => {
        const on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      note.hidden = mode !== 'mayorista';
      renderMenu();
      renderCart();
    });
  });

  function renderMenu() {
    const cat = data.categorias.find(c => c.id === activeCat);
    menu.innerHTML = '';
    const head = document.createElement('div');
    head.className = 'menu-head';
    head.innerHTML = `<div><h3>${cat.nombre}</h3><p>${cat.bajada || ''}</p></div><span class="menu-col">${mode === 'mayorista' ? 'Precio por mayor' : 'Precio'}</span>`;
    menu.appendChild(head);

    const ul = document.createElement('ul');
    ul.className = 'menu-list';
    cat.items.forEach((item, i) => {
      const key = `${cat.id}:${i}`;
      const p = priceLabel(mode === 'mayorista' ? item.mayorista : item.precio);
      const inCart = cart.find(l => l.key === key);
      const li = document.createElement('li');
      li.className = 'menu-item';
      li.innerHTML = `
        <div class="menu-info">
          <h4>${item.nombre}${item.nuevo ? ' <span class="menu-new">Nuevo</span>' : ''}</h4>
          <p>${item.detalle || ''}</p>
        </div>
        <span class="menu-dots" aria-hidden="true"></span>
        <span class="menu-price${p.ph ? ' is-placeholder' : ''}">${p.text}</span>
        <button class="menu-add${inCart ? ' is-added' : ''}" data-key="${key}" aria-label="Sumar ${item.nombre} al pedido">
          ${inCart ? `<span>${inCart.qty}</span> en tu pedido` : '+ Sumar'}
        </button>`;
      ul.appendChild(li);
    });
    menu.appendChild(ul);
  }

  menu.addEventListener('click', e => {
    const btn = e.target.closest('.menu-add');
    if (!btn) return;
    const line = cart.find(l => l.key === btn.dataset.key);
    if (line) line.qty += 1; else cart.push({ key: btn.dataset.key, qty: 1 });
    save();
    renderMenu();
    renderCart();
    pill.classList.remove('bump'); void pill.offsetWidth; pill.classList.add('bump');
  });

  /* drawer */
  const pill = document.getElementById('orderPill');
  const drawer = document.getElementById('orderDrawer');
  const backdrop = document.getElementById('orderBackdrop');
  const list = document.getElementById('orderList');
  const empty = document.getElementById('orderEmpty');
  const noteField = document.getElementById('orderNote');
  const send = document.getElementById('orderSend');
  const totalRow = document.getElementById('orderTotalRow');

  const openDrawer = open => {
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    pill.setAttribute('aria-expanded', String(open));
    backdrop.hidden = !open;
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) drawer.querySelector('.order-close').focus();
  };
  pill.addEventListener('click', () => openDrawer(true));
  document.getElementById('orderClose').addEventListener('click', () => openDrawer(false));
  backdrop.addEventListener('click', () => openDrawer(false));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && drawer.classList.contains('is-open')) openDrawer(false); });
  document.getElementById('orderClear').addEventListener('click', () => { cart = []; save(); renderMenu(); renderCart(); });

  list.addEventListener('click', e => {
    const b = e.target.closest('button[data-act]');
    if (!b) return;
    const line = cart.find(l => l.key === b.dataset.key);
    if (!line) return;
    line.qty += b.dataset.act === 'plus' ? 1 : -1;
    if (line.qty < 1) cart = cart.filter(l => l !== line);
    save(); renderMenu(); renderCart();
  });
  noteField.addEventListener('input', () => updateLink());

  function unitPrice(item) {
    const v = mode === 'mayorista' ? item.mayorista : item.precio;
    return typeof v === 'number' && v > 0 ? v : null;
  }

  function updateLink() {
    const lines = cart.map(l => {
      const { cat, item } = findItem(l.key);
      const u = unitPrice(item);
      return `• ${l.qty} × ${item.nombre} (${cat.nombre})${u ? ' — ' + fmt(u * l.qty) : ''}`;
    });
    let msg = `¡Hola Lobo! Quiero hacer este pedido (${mode === 'mayorista' ? 'por mayor' : 'por menor'}):\n\n${lines.join('\n')}`;
    const total = cart.reduce((s, l) => { const u = unitPrice(findItem(l.key).item); return u ? s + u * l.qty : s; }, 0);
    if (total) msg += `\n\nTotal estimado: ${fmt(total)}`;
    if (noteField.value.trim()) msg += `\n\nDetalle: ${noteField.value.trim()}`;
    msg += '\n\n¿Me confirmás stock y envío? ¡Gracias!';
    send.href = `https://wa.me/${data.whatsapp}?text=${encodeURIComponent(msg)}`;
    totalRow.hidden = !total;
    if (total) document.getElementById('orderTotal').textContent = fmt(total);
  }

  function renderCart() {
    const count = cart.reduce((s, l) => s + l.qty, 0);
    document.getElementById('orderCount').textContent = count;
    pill.hidden = count === 0;
    document.body.classList.toggle('has-order', count > 0);
    document.getElementById('orderMode').textContent = mode === 'mayorista' ? 'Precios por mayor' : 'Precios por menor';
    list.innerHTML = cart.map(l => {
      const { cat, item } = findItem(l.key);
      const p = priceLabel(mode === 'mayorista' ? item.mayorista : item.precio);
      return `<li class="order-line">
        <div><strong>${item.nombre}</strong><span>${cat.nombre} · ${p.text}</span></div>
        <div class="qty">
          <button data-act="minus" data-key="${l.key}" aria-label="Uno menos">−</button>
          <span>${l.qty}</span>
          <button data-act="plus" data-key="${l.key}" aria-label="Uno más">+</button>
        </div></li>`;
    }).join('');
    empty.hidden = count > 0;
    send.classList.toggle('is-disabled', count === 0);
    send.setAttribute('aria-disabled', String(count === 0));
    if (count === 0 && drawer.classList.contains('is-open')) { /* keep open, shows empty state */ }
    updateLink();
  }
  send.addEventListener('click', e => { if (!cart.length) e.preventDefault(); });

  renderMenu();
  renderCart();
})();

/* blend: resaltar círculo al pasar por cada ítem */
const blend = document.getElementById('blend');
if (blend) {
  blend.querySelectorAll('.blend-list > div').forEach(row => {
    row.addEventListener('mouseenter', () => blend.dataset.focus = row.dataset.blend);
    row.addEventListener('mouseleave', () => delete blend.dataset.focus);
  });
}

/* scroll reveal */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

/* share button */
const shareBtn = document.getElementById('shareBtn');
if (shareBtn) {
  shareBtn.addEventListener('click', async () => {
    const shareData = {
      title: 'Lobo Velas y Objetos',
      text: 'Velas y objetos deco hechos a mano — Lobo',
      url: window.location.href
    };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch (e) { /* user cancelled */ }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        const original = shareBtn.innerHTML;
        shareBtn.textContent = 'Link copiado ✓';
        setTimeout(() => { shareBtn.innerHTML = original; }, 2000);
      } catch (e) { /* clipboard unavailable */ }
    }
  });
}
