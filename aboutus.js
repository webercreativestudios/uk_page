function toggleNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");

  navbar.classList.toggle("expanded");
  hamburger.classList.toggle("active");
}


  // Disable right-click
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  // Disable certain key combinations
  document.addEventListener('keydown', function (e) {
    // F12
    if (e.key === 'F12') {
      e.preventDefault();
    }

    // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) {
      e.preventDefault();
    }

    // Ctrl+U (view source)
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
    }
  });

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-list');
  
    faqItems.forEach((faqItem) => {
      const question = faqItem.querySelector('.faq-question');
      const answer = faqItem.querySelector('.faq-answer');
      const toggle = faqItem.querySelector('.faq-toggle');
  
      // Initially hide all answers and set toggle as "+"
      answer.style.display = 'none';
      toggle.textContent = '+';
  
      question.addEventListener('click', () => {
        // Toggle the visibility of the answer
        const isOpen = answer.classList.toggle('show');
  
        // Show or hide the answer based on the 'show' class
        answer.style.display = isOpen ? 'block' : 'none';
  
        // Change the toggle text between "+" and "−"
        toggle.textContent = isOpen ? '−' : '+';
  
        console.log('clicked');
      });
    });
  });
  