// Portfolio microsite starter interactions
// Tweak these as you build your subject's story.

const modalTriggerButtons = document.querySelectorAll('[data-modal-target]');
const accordions = document.querySelectorAll('[data-accordion]');

modalTriggerButtons.forEach((button) => {
  const targetId = button.dataset.modalTarget;
  const dialog = document.getElementById(targetId);

  if (!dialog) return;

  button.addEventListener('click', () => {
    dialog.showModal();
    dialog.classList.add('is-open');
  });

  const closeButton = dialog.querySelector('.close-modal');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      dialog.close();
      dialog.classList.remove('is-open');
    });
  }

  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    dialog.close();
    dialog.classList.remove('is-open');
  });
});

accordions.forEach((accordion) => {
  const toggle = accordion.querySelector('.accordion-toggle');
  const panel = accordion.querySelector('.accordion-panel');

  if (!toggle || !panel) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    panel.hidden = isOpen;
  });
});
