// Expanding Cards. O primeiro que debes facer é analizar o código HTML e CSS para entender como está construída a páxina web. Unha vez entendido o código, engade a funcionalidade JavaScript.
// No repositorio está a solucion. Debes intentar crear a funcionalidade JavaScript sen mirar a solución.
// https://github.com/kateFrontend/js-expanding-cards

document.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('.panel');

  panels.forEach((panel) => {
    panel.addEventListener('click', (event) => {
      nonActive();
      const clickedItem = event.target;
      clickedItem.classList.add('active');
    });
  });
  function nonActive() {
    panels.forEach((panel) => {
      panel.classList.remove('active');
    });
  }
});

// document.addEventListener('DOMContentLoaded', () => {
//   const panels = document.querySelectorAll('.panel');

//   panels.addEventListener('click', (event) => {
//     const clickedItem = event.target;

//     panels.forEach((item) => item.classList.remove('active'));

//     clickedItem.classList.add('active');
//   });
// });
