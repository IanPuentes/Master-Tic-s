const spinnerWrapperEl = document.querySelector('.spinner-wrapper')

window.addEventListener('load', () => {
    spinnerWrapperEl.style.opacity = '0';

    setTimeout(()=>{
        spinnerWrapperEl.style.display='none';
    }, 1000)
});
document.addEventListener('DOMContentLoaded', function() {
  var myCarousel = document.getElementById('nosotros');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 10000, 
    pause: 'hover', 
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


window.addEventListener('load', function() {
  var darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'enabled') {
    document.body.classList.add('dark-mode');
    document.getElementById('modoOscuroSwitch').checked = true;
  }
});
window.addEventListener('scroll', function() {
  var scrollBtn = document.getElementById('scrollBtn');
  if (document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});



function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
function ajustarDesplazamiento() {
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  const links = document.querySelectorAll('.navbar-nav a.nav-link');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1); 
      const targetSection = document.getElementById(targetId);
      const offsetTop = targetSection.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', ajustarDesplazamiento);