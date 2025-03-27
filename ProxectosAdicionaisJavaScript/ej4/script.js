// FAQ collapse
// https://github.com/kateFrontend/js-faq-collapse
document.addEventListener('DOMContentLoaded', () => {
  const faqs = document.querySelectorAll('.faq-toggle');

  faqs.forEach((faq) => {
    faq.addEventListener('click', (event) => {
      nonActive();
      const clickedItem = event.target;
      clickedItem.classList.add('active');
    });
  });
  function nonActive() {
    faqs.forEach((faq) => {
      faq.classList.remove('active');
    });
  }
});
