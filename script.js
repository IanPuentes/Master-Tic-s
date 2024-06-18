const spinnerWrapperEl = document.querySelector('.spinner-wrapper')

window.addEventListener('load', () => {
    spinnerWrapperEl.style.opacity = '0';

    setTimeout(()=>{
        spinnerWrapperEl.style.display='none';
    }, 3800)
});
document.addEventListener('DOMContentLoaded', function() {
  var myCarousel = document.getElementById('mision-vision-valores');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000, 
    pause: 'hover', // Pausa el carrusel al pasar el mouse sobre él
  });
});
function toggleDarkMode() {
  var checkbox = document.getElementById('modoOscuroSwitch');
  if (checkbox.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
  }
}

// Verifica el estado del modo oscuro al cargar la página
window.addEventListener('load', function() {
  var darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'enabled') {
    document.body.classList.add('dark-mode');
    document.getElementById('modoOscuroSwitch').checked = true;
  }
});