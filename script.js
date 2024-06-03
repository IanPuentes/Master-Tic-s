const spinnerWrapperEl = document.querySelector('.spinner-wrapper')

window.addEventListener('load', () => {
    spinnerWrapperEl.style.opacity = '0';

    setTimeout(()=>{
        spinnerWrapperEl.style.display='none';
    }, 3000)
});
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetOffset = document.querySelector(targetId).offsetTop;
      const navbarHeight = document.querySelector('nav').offsetHeight;
      const yOffset = targetOffset - navbarHeight;

      window.scrollTo({
        top: yOffset,
        behavior: 'smooth'
      });
    });
  });
  window.addEventListener('scroll', function() {
    var mision = document.getElementById('mision');
    var vision = document.getElementById('vision');
    var valores = document.getElementById('valores');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    
    if (scrollPosition > mision.offsetTop - windowHeight) {
      mision.style.left = '0'; 
    }
    if (scrollPosition > vision.offsetTop - windowHeight) {
      vision.style.left = '0'; 
    }
    if (scrollPosition > valores.offsetTop - windowHeight) {
      valores.style.left = '0'; 
    }
  });
  // Obtener todas las secciones a mostrar
  const sections = document.querySelectorAll('.nueva-seccion');

  // Función para verificar si un elemento está en el viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Función para mostrar las secciones cuando están en el viewport
  function showSections() {
    sections.forEach(section => {
      if (isInViewport(section)) {
        section.classList.add('visible');
        section.classList.remove('hidden');
      }
    });
  }

  // Agregar evento de scroll para verificar cuando las secciones están en el viewport
  window.addEventListener('scroll', showSections);
  // Mostrar las secciones al cargar la página
  showSections();
  function showSectionsWithAnimation() {
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Agregar evento de scroll para verificar cuando las secciones están en el viewport con animación
window.addEventListener('scroll', showSectionsWithAnimation);

// Mostrar las secciones al cargar la página con animación
showSectionsWithAnimation();