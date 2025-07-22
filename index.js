document.addEventListener("DOMContentLoaded", function () {
    const serviceSection = document.querySelector(".card-side-services");
    const services = document.querySelectorAll(".card-service");

    let lastScrollTop = 0; // Variable to track the last scroll position

    function handleScroll() {
        const sectionPosition = serviceSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        // Check if the section is in the viewport
        if (sectionPosition < screenHeight - 100 && sectionPosition > -serviceSection.offsetHeight / 2 && !serviceSection.classList.contains('show')) {
            serviceSection.classList.add("show");
            services.forEach((service, index) => {
                setTimeout(() => {
                    service.classList.add("show");
                }, index * 150); // Delay for staggered effect
            });
        }

        // Update the last scroll position to the current scroll position
        lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load to check if already in view
});




document.addEventListener("DOMContentLoaded", function () {
    const projectItems = document.querySelectorAll(".card-project");

    function handleProjectScroll() {
        projectItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            const screenHeight = window.innerHeight;

            if (rect.top < screenHeight - 100) {
                item.classList.add("show");
            } else {
                item.classList.remove("show");
            }
        });
    }

    window.addEventListener("scroll", handleProjectScroll);
    handleProjectScroll(); // Run on page load
});


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

function toggleNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");

  navbar.classList.toggle("expanded");
  hamburger.classList.toggle("active");
}


document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll('.about-list');
  
    // Function to animate the progress bar and the number
    function animateProgress() {
      progressBars.forEach(function (item) {
        const progressLabel = item.querySelector('.progress-label');
        const progressNumber = item.querySelector('.progress-number');
        const progressBar = item.querySelector('.progress-bar');
        const targetPercentage = parseInt(progressBar.getAttribute('data-progress'));
  
        // Check if the progress bar is already animated, to prevent re-animating
        if (progressBar.style.width !== `${targetPercentage}%`) {
          // Animate the progress bar width
          progressBar.style.width = targetPercentage + '%';
  
          // Animate the percentage number from 0 to the target value
          let currentValue = 0;
          const interval = setInterval(() => {
            if (currentValue < targetPercentage) {
              currentValue++;
              progressNumber.textContent = currentValue + '%';
            } else {
              clearInterval(interval);
            }
          }, 20); // Adjust speed here
        }
      });
    }
  
    // Function to check if the element is in view
    function checkIfInView() {
      progressBars.forEach(function (item) {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        // Trigger animation when element comes into view
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          item.querySelector('.progress-bar-container').style.opacity = 1; // Make progress bar visible
          animateProgress(); // Trigger the animation
        }
      });
    }
  
    // Listen for scroll events
    window.addEventListener("scroll", checkIfInView);
    checkIfInView(); // Check on page load as well
  });

  



  document.addEventListener("DOMContentLoaded", function () {
    const words = ["Quality", "Stylish", "Trendy", "Classy", "Modern"];
    const dynamicSpan = document.getElementById("dynamic-word");

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        charIndex--;
        dynamicSpan.textContent = currentWord.substring(0, charIndex);
      } else {
        charIndex++;
        dynamicSpan.textContent = currentWord.substring(0, charIndex);
      }

      let typingSpeed = isDeleting ? 60 : 100;

      if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 1500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500;
      }

      setTimeout(typeEffect, typingSpeed);
    }

    // Start animation
    typeEffect();
  });


  document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll('.metric h2');
  
    counters.forEach(counter => {
      counter.dataset.started = "false"; // Mark all counters as not started
    });
  
    function updateCount(counter) {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText.replace('+', '');
      const increment = Math.ceil(target / 100);
  
      if (count < target) {
        counter.innerText = `${count + increment}+`;
        setTimeout(() => updateCount(counter), 50);
      } else {
        counter.innerText = `${target}+`;
      }
    }
  
    function checkIfInView() {
      counters.forEach(function (counter) {
        const rect = counter.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        if (rect.top <= windowHeight && rect.bottom >= 0 && counter.dataset.started === "false") {
          counter.style.opacity = 1; // Optional: make visible if you want
          updateCount(counter);
          counter.dataset.started = "true"; // Mark as started to prevent repeating
        }
      });
    }
  
    window.addEventListener("scroll", checkIfInView);
    checkIfInView(); // Check immediately in case already in view
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
  
  



  document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.work-circle');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    }, {
      threshold: 0.3 // Trigger when 30% of the element is visible
    });

    circles.forEach(circle => {
      observer.observe(circle);
    });
  });

