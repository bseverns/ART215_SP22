// Lesson 03 interaction script
// The goal: demonstrate how a few well-structured functions can power a modal + filter without a framework.

const filterInput = document.querySelector('#filter-input');
const filterTarget = document.querySelector('[data-filter-target]');
const modal = document.querySelector('#proposal-modal');
const openModalButton = document.querySelector('.open-modal');
const closeModalButton = modal?.querySelector('.close-modal');

// Guard clause: bail if essential elements are missing (progressive enhancement!)
if (!filterInput || !filterTarget || !modal || !openModalButton || !closeModalButton) {
  console.warn('Lesson 03 script: required elements missing. Check the markup.');
} else {
  const workshopCards = Array.from(filterTarget.querySelectorAll('.card'));

  /**
   * filterWorkshops
   * Highlights workshops that match the query and hides the rest when the query is non-empty.
   */
  function filterWorkshops(event) {
    const query = event.target.value.trim().toLowerCase();

    workshopCards.forEach((card) => {
      const textContent = `${card.textContent} ${card.dataset.tags}`.toLowerCase();
      const matches = query.length === 0 || textContent.includes(query);

      card.toggleAttribute('hidden', query.length > 0 && !matches);
      card.classList.toggle('is-highlighted', matches && query.length > 0);
    });
  }

  /**
   * openModal + closeModal manage the <dialog> element and sync ARIA state.
   */
  function openModal() {
    modal.showModal();
    modal.classList.add('is-open');
    openModalButton.setAttribute('aria-expanded', 'true');
    trapFocus(modal);
  }

  function closeModal() {
    modal.close();
    modal.classList.remove('is-open');
    openModalButton.setAttribute('aria-expanded', 'false');
    releaseFocusTrap();
  }

  // Bind listeners
  filterInput.addEventListener('input', filterWorkshops);
  openModalButton.addEventListener('click', openModal);
  closeModalButton.addEventListener('click', closeModal);
  modal.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeModal();
  });

  modal.addEventListener('click', (event) => {
    const dialogRect = modal.getBoundingClientRect();
    const clickInside =
      event.clientX >= dialogRect.left &&
      event.clientX <= dialogRect.right &&
      event.clientY >= dialogRect.top &&
      event.clientY <= dialogRect.bottom;

    if (!clickInside) {
      closeModal();
    }
  });

  // Accessibility bonus: basic focus trap while the dialog is open.
  let previousActiveElement = null;

  function trapFocus(dialog) {
    previousActiveElement = document.activeElement;
    const focusableSelectors = [
      'button',
      'a[href]',
      'input',
      'textarea',
      '[tabindex]:not([tabindex="-1"])'
    ];
    const focusables = dialog.querySelectorAll(focusableSelectors.join(','));
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    dialog.addEventListener('keydown', handleKeydown);
    if (first) {
      first.focus();
    }

    function handleKeydown(event) {
      if (event.key === 'Tab') {
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }

      if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
      }
    }

    // Store handler so we can remove it later
    dialog._focusTrapHandler = handleKeydown;
  }

  function releaseFocusTrap() {
    if (modal._focusTrapHandler) {
      modal.removeEventListener('keydown', modal._focusTrapHandler);
      modal._focusTrapHandler = null;
    }

    previousActiveElement?.focus();
  }
}
