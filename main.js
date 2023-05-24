let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav')
let navbarLinks = document.querySelectorAll('.mobile-nav a');

hamberger.addEventListener('click', function(){
    mobileNav.classList.add('open')
})
times.addEventListener('click', function(){
    mobileNav.classList.remove('open')
})

navbarLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
  
      mobileNav.classList.remove('open');
  
      // Get the target element from the link's href attribute
      let targetId = link.getAttribute('href').substring(1);
      let targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        setTimeout(function() {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }, 500);
      }
    });
  });