const spinnerWrapperEl = document.querySelector('.spinner-wrapper')

window.addEventListener('load', () => {
    spinnerWrapperEl.style.opacity = '0';

    setTimeout(()=>{
        spinnerWrapperEl.style.display='none';
    }, 3800)
});
document.addEventListener('DOMContentLoaded', function() {
  var myCarousel = document.getElementById('nosotros');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000, 
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