function votar(numero) {
  const votosEl = document.getElementById(`votos${numero}`);
  let votos = parseInt(votosEl.textContent);
  votos++;
  votosEl.textContent = votos;
  
  votosEl.classList.add('jump');
  setTimeout(() => votosEl.classList.remove('jump'), 150);
}

function filtrar() {
  const checkboxes = document.querySelectorAll('.filtros input[type="checkbox"]');
  const algunoSeleccionado = Array.from(checkboxes).some(checkbox => checkbox.checked);
  
  if (algunoSeleccionado) {
    alert('Aplicando Filtros...');
  }
}