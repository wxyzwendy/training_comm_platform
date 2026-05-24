/* ============================================================
   BB Training Portal — Component Library JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Tabs ─────────────────────────────────────────────────── */
  document.querySelectorAll('.tabs').forEach(tabs => {
    tabs.querySelectorAll('.tab-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const tabId = trigger.dataset.tab;
        const tabsContainer = trigger.closest('.tabs');

        tabsContainer.querySelectorAll('.tab-trigger').forEach(t => t.classList.remove('active'));
        tabsContainer.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        trigger.classList.add('active');
        const content = tabsContainer.querySelector(`.tab-content[data-tab="${tabId}"]`);
        if (content) content.classList.add('active');
      });
    });
  });


  /* ── Sidebar Toggle (desktop collapse) ───────────────────────── */
  document.querySelectorAll('.sidebar-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.innerWidth < 768) return; // mobile uses separate handler
      const sidebar = btn.closest('.sidebar');
      sidebar.classList.toggle('collapsed');
      const icon = btn.querySelector('svg');
      if (icon) {
        const isCollapsed = sidebar.classList.contains('collapsed');
        icon.innerHTML = isCollapsed
          ? '<path d="m9 18 6-6-6-6"/>'   // chevron-right
          : '<path d="m15 18-6-6 6-6"/>'; // chevron-left
      }
    });
  });

  /* ── Mobile Sidebar ───────────────────────────────────────── */
  (function initMobileSidebar() {
    const sidebar  = document.querySelector('.sidebar');
    const topbarLeft = document.querySelector('.topbar-left');
    if (!sidebar || !topbarLeft) return;

    // Create backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'sidebar-backdrop';
    document.body.appendChild(backdrop);

    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.className = 'sidebar-mobile-btn btn btn-ghost btn-icon';
    hamburger.title = 'Open menu';
    hamburger.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" style="width:1.25rem;height:1.25rem;">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>`;
    topbarLeft.insertBefore(hamburger, topbarLeft.firstChild);

    function openMobileSidebar() {
      sidebar.classList.add('mobile-open');
      backdrop.classList.add('open');
    }
    function closeMobileSidebar() {
      sidebar.classList.remove('mobile-open');
      backdrop.classList.remove('open');
    }

    hamburger.addEventListener('click', openMobileSidebar);
    backdrop.addEventListener('click', closeMobileSidebar);

    // Close when a nav item is clicked on mobile
    sidebar.querySelectorAll('.nav-item, a.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        if (window.innerWidth < 768) closeMobileSidebar();
      });
    });
  })();


  /* ── Dropdown Menus ───────────────────────────────────────── */
  document.querySelectorAll('[data-dropdown]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const menuId = trigger.dataset.dropdown;
      const menu = document.getElementById(menuId);
      if (!menu) return;

      // Close all others
      document.querySelectorAll('.dropdown-menu.open').forEach(m => {
        if (m !== menu) m.classList.remove('open');
      });
      menu.classList.toggle('open');
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu.open').forEach(m => m.classList.remove('open'));
  });


  /* ── Dialogs / Modals ─────────────────────────────────────── */
  document.querySelectorAll('[data-dialog-open]').forEach(btn => {
    btn.addEventListener('click', () => {
      const dialogId = btn.dataset.dialogOpen;
      const overlay = document.getElementById(dialogId);
      if (overlay) overlay.classList.add('open');
    });
  });

  document.querySelectorAll('[data-dialog-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const overlay = btn.closest('.dialog-overlay');
      if (overlay) overlay.classList.remove('open');
    });
  });

  document.querySelectorAll('.dialog-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  });


  /* ── Switch Toggles ───────────────────────────────────────── */
  document.querySelectorAll('.switch-input').forEach(input => {
    input.addEventListener('change', () => {
      const label = input.closest('.switch-wrapper')?.querySelector('.switch-label');
      if (label && input.dataset.labelOn && input.dataset.labelOff) {
        label.textContent = input.checked ? input.dataset.labelOn : input.dataset.labelOff;
      }
    });
  });


  /* ── Chip / Tag close ─────────────────────────────────────── */
  document.addEventListener('click', (e) => {
    if (e.target.closest('.chip-close')) {
      const chip = e.target.closest('.chip');
      if (chip) {
        chip.style.opacity = '0';
        chip.style.transform = 'scale(0.8)';
        chip.style.transition = 'opacity 0.15s, transform 0.15s';
        setTimeout(() => chip.remove(), 150);
      }
    }
  });


  /* ── Table row selection ──────────────────────────────────── */
  document.querySelectorAll('.table').forEach(table => {
    const selectAll = table.querySelector('.select-all');
    const rowBoxes  = table.querySelectorAll('.row-checkbox');

    if (selectAll) {
      selectAll.addEventListener('change', () => {
        rowBoxes.forEach(cb => {
          cb.checked = selectAll.checked;
          cb.closest('tr').classList.toggle('selected', selectAll.checked);
        });
        updateSelectedCount(table);
      });
    }

    rowBoxes.forEach(cb => {
      cb.addEventListener('change', () => {
        cb.closest('tr').classList.toggle('selected', cb.checked);
        if (selectAll) {
          selectAll.checked = [...rowBoxes].every(b => b.checked);
          selectAll.indeterminate = !selectAll.checked && [...rowBoxes].some(b => b.checked);
        }
        updateSelectedCount(table);
      });
    });
  });

  function updateSelectedCount(table) {
    const counter = table.closest('.table-wrapper')?.querySelector('.selected-count');
    if (!counter) return;
    const n = table.querySelectorAll('.row-checkbox:checked').length;
    counter.textContent = n > 0 ? `${n} selected` : '';
  }


  /* ── Mobile table cards ─────────────────────────────────────── */
  function labelTableCells(table) {
    table.classList.add('table-card-mobile');
    const headers = [...table.querySelectorAll('thead th')].map(th => th.textContent.trim());

    table.querySelectorAll('tbody tr').forEach(row => {
      const cells = [...row.children].filter(cell => cell.tagName === 'TD');
      const isEmptyRow = cells.length === 1 && Number(cells[0].getAttribute('colspan') || 1) > 1;
      row.classList.toggle('table-empty-row', isEmptyRow);

      cells.forEach((cell, index) => {
        if (cell.dataset.label || isEmptyRow) return;
        const header = headers[index] || '';
        const hasButton = !!cell.querySelector('button, .btn, a');
        cell.dataset.label = header || (hasButton ? 'Action' : 'Details');
      });
      cells.forEach(cell => {
        const actions = [...cell.querySelectorAll('button, a.btn, .btn')];
        const viewActions = actions.filter(action => {
          const label = (action.textContent || action.getAttribute('title') || '').trim().toLowerCase();
          return label === 'view' || label.startsWith('view ');
        });

        viewActions.forEach(action => action.classList.add('mobile-hide-view-action'));
        cell.classList.toggle('mobile-view-only-cell', actions.length > 0 && actions.length === viewActions.length);
      });
      row.classList.toggle('has-status-card', cells.some(cell => cell.dataset.label === 'Status'));
    });
  }

  document.querySelectorAll('table.table').forEach(table => {
    labelTableCells(table);
    const tbody = table.querySelector('tbody');
    if (!tbody) return;

    new MutationObserver(() => labelTableCells(table)).observe(tbody, {
      childList: true,
      subtree: true,
    });
  });


  /* ── Table Sorting ────────────────────────────────────────── */
  document.querySelectorAll('.table th.sortable').forEach(th => {
    th.addEventListener('click', () => {
      const table  = th.closest('table');
      const tbody  = table.querySelector('tbody');
      const col    = [...th.parentElement.children].indexOf(th);
      const isAsc  = th.classList.contains('sort-asc');

      // Reset all
      table.querySelectorAll('th').forEach(t => t.classList.remove('sort-asc', 'sort-desc'));
      th.classList.add(isAsc ? 'sort-desc' : 'sort-asc');

      const rows = [...tbody.querySelectorAll('tr')];
      rows.sort((a, b) => {
        const aVal = a.children[col]?.textContent.trim() ?? '';
        const bVal = b.children[col]?.textContent.trim() ?? '';
        return isAsc
          ? bVal.localeCompare(aVal, undefined, { numeric: true })
          : aVal.localeCompare(bVal, undefined, { numeric: true });
      });
      rows.forEach(r => tbody.appendChild(r));
    });
  });


  /* ── Simple Progress animation ────────────────────────────── */
  document.querySelectorAll('.progress-bar[data-value]').forEach(bar => {
    const val = parseInt(bar.dataset.value, 10);
    bar.style.width = '0%';
    requestAnimationFrame(() => {
      setTimeout(() => { bar.style.width = `${val}%`; }, 100);
    });
  });

});

/* ── Toast Notification ───────────────────────────────────────── */
function showToast(type, title, message, duration = 4000) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const icons = {
    success:     '<polyline points="20 6 9 17 4 12"/>',
    destructive: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    warning:     '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    info:        '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
  };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icons[type] || icons.info}</svg>
    </div>
    <div class="toast-body">
      <div class="toast-title">${title}</div>
      ${message ? `<div class="toast-message">${message}</div>` : ''}
    </div>
    <button class="toast-close" aria-label="Dismiss">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>`;
  toast.querySelector('.toast-close').addEventListener('click', () => dismissToast(toast));
  container.appendChild(toast);
  if (duration > 0) setTimeout(() => dismissToast(toast), duration);
  return toast;
}
function dismissToast(toast) {
  if (!toast || toast.classList.contains('removing')) return;
  toast.classList.add('removing');
  setTimeout(() => toast.remove(), 200);
}
window.showToast = showToast;

/* ── Option Card selection ────────────────────────────────────── */
document.addEventListener('click', (e) => {
  const card = e.target.closest('.option-card[data-group]');
  if (!card) return;
  document.querySelectorAll(`.option-card[data-group="${card.dataset.group}"]`).forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
  card.dispatchEvent(new CustomEvent('option-selected', { bubbles: true, detail: { value: card.dataset.value } }));
});

/* ── Multi-step form helper ───────────────────────────────────── */
window.FormStepper = class {
  constructor(stepsEl, panels) {
    this.steps  = [...stepsEl.querySelectorAll('.form-step')];
    this.panels = panels;
    this.current = 0;
    this._render();
  }
  _render() {
    this.steps.forEach((s, i) => {
      s.classList.toggle('done',   i < this.current);
      s.classList.toggle('active', i === this.current);
    });
    this.panels.forEach((p, i) => { p.style.display = i === this.current ? '' : 'none'; });
  }
  next() { if (this.current < this.steps.length - 1) { this.current++; this._render(); } }
  prev() { if (this.current > 0) { this.current--; this._render(); } }
  goto(n) { this.current = Math.max(0, Math.min(n, this.steps.length - 1)); this._render(); }
};
