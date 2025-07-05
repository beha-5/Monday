document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu');
  const nav = document.querySelector('nav');
  
  if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', function() {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  }
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.feature-card, .service-card, .team-member');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('fade-in');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); 
});

function getStarted() {
  alert("Thank you for choosing Monday DM! Our team will contact you shortly to discuss how we can help your business grow.");
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const responseElement = document.getElementById('response');
      
      responseElement.textContent = "Thank you for your message! We'll respond within 24 hours.";
      responseElement.style.color = "#3498db";
      responseElement.style.fontWeight = "600";
      
      form.reset();
      
      setTimeout(() => {
        responseElement.textContent = "";
      }, 5000);
    });
  }
});