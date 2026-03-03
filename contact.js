
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if(window.scrollY > 50){
    header.style.background = "rgba(15,32,39,0.95)";
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
  } else {
    header.style.background = "rgba(255,255,255,0.05)";
    header.style.boxShadow = "none";
  }
});


const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  form.reset();
});