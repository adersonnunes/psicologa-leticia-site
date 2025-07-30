// Arquivo JavaScript principal para o site da Psicóloga Letícia Alves Carvalho

// Atualizar o ano atual no rodapé
document.addEventListener('DOMContentLoaded', function() {
  const currentYearElement = document.getElementById('currentYear');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
  
  // Menu mobile toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenuBtn.classList.toggle('open');
      mainNav.classList.toggle('open');
    });
  }
  
  // Fechar menu ao clicar em um link
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenuBtn.classList.remove('open');
      mainNav.classList.remove('open');
    });
  });
  
  // Smooth scroll para links de âncora
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Formulário de contato
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Aqui seria implementada a lógica de envio do formulário
      // Por enquanto, apenas exibimos uma mensagem de sucesso
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      contactForm.reset();
    });
  }
  
  // Animação de fade-in para elementos ao rolar a página
  const fadeElements = document.querySelectorAll('.service-card, .blog-card, .about-content');
  
  const fadeInOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px"
  };
  
  const fadeInObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, fadeInOptions);
  
  fadeElements.forEach(element => {
    element.classList.add('fade-element');
    fadeInObserver.observe(element);
  });
});
