function toggleNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");

  navbar.classList.toggle("expanded");
  hamburger.classList.toggle("active");
}


  // // Disable right-click
  // document.addEventListener('contextmenu', function (e) {
  //   e.preventDefault();
  // });

  // // Disable certain key combinations
  // document.addEventListener('keydown', function (e) {
  //   // F12
  //   if (e.key === 'F12') {
  //     e.preventDefault();
  //   }

  //   // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C
  //   if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) {
  //     e.preventDefault();
  //   }

  //   // Ctrl+U (view source)
  //   if (e.ctrlKey && e.key === 'u') {
  //     e.preventDefault();
  //   }
  // });


// document.addEventListener("DOMContentLoaded", function () {
//     const serviceSection = document.querySelector(".card-side-services");
//     const services = document.querySelectorAll(".card-service");

//     let lastScrollTop = 0; // Variable to track the last scroll position

//     function handleScroll() {
//         const sectionPosition = serviceSection.getBoundingClientRect().top;
//         const screenHeight = window.innerHeight;

//         // Check if the section is in the viewport
//         if (sectionPosition < screenHeight - 100 && sectionPosition > -serviceSection.offsetHeight / 2 && !serviceSection.classList.contains('show')) {
//             serviceSection.classList.add("show");
//             services.forEach((service, index) => {
//                 setTimeout(() => {
//                     service.classList.add("show");
//                 }, index * 150); // Delay for staggered effect
//             });
//         }

//         // Update the last scroll position to the current scroll position
//         lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     }

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Run once on load to check if already in view
// });


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
  