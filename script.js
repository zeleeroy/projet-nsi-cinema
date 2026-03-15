const bouton = document.querySelector('.bouton-mode');

bouton.addEventListener('click', function() {
  document.body.classList.toggle('clair');
  if (document.body.classList.contains('clair')) {
    bouton.textContent = '🌙 Mode sombre';
  } else {
    bouton.textContent = '☀️ Mode clair';
  }
});

let search = document.querySelector('.barre-recherche')
let cards = document.querySelectorAll('.carte-film')

search.addEventListener('input', function() {
  let value = search.value.toLowerCase()
  cards.forEach(function(card) {
    let title = card.querySelector('.titre-film').textContent.toLowerCase()
    if (title.includes(value)) {
      card.style.display = 'block'
    } else {
      card.style.display = 'none'
    }
  })
})