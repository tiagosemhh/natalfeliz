document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Sticky Header ---
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'py-3');
      header.classList.remove('bg-transparent', 'py-4');
    } else {
      header.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'py-3');
      header.classList.add('bg-transparent', 'py-4');
    }
  });

  // --- 2. Mobile Menu ---
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu.querySelectorAll('button');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = menuBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        // Change to Menu icon (simulated)
        menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
    } else {
        // Change to X icon (simulated)
        menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
       menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
    });
  });

  // --- 3. Smooth Scroll ---
  document.querySelectorAll('button[data-scroll]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-scroll');
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // --- 4. Countdown Timer ---
  let timeLeft = 12 * 60; // 12 minutes
  const timerElement = document.getElementById('countdown-timer');
  
  const timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      return;
    }
    timeLeft--;
    
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    timerElement.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
  }, 1000);

  // --- 5. Modal Logic ---
  const modal = document.getElementById('offer-modal');
  const basicPlanBtn = document.getElementById('btn-basic-plan');
  const closeModalBtns = document.querySelectorAll('.close-modal');

  // Open Modal
  basicPlanBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  });

  // Close Modal
  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
  });

  // Close on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  });

  // --- 6. Fade In Animation (Intersection Observer) ---
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in-element').forEach((el, index) => {
    // Add staggering delay based on index if siblings (optional simplification)
    // el.style.transitionDelay = `${index * 0.1}s`; 
    observer.observe(el);
  });
});
