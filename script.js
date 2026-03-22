/*=============================================
HAMBURGER MENU (for mobile)
=============================================*/

var hamburger = document.getElementById('hamburger');
var navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
});

var navLinks = document.querySelectorAll('#nav-menu a');

navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
  });
});


/*=============================================
SCROLL FADE-IN ANIMATION
=============================================*/

var allFadeItems = document.querySelectorAll('.fade-in');

var watcher = new IntersectionObserver(function(entries) {

  entries.forEach(function(entry) {

    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }

  });

}, { threshold: 0.1 }); 

allFadeItems.forEach(function(item) {
  watcher.observe(item);
});


/*=============================================
CONTACT FORM — SUBMIT HANDLER
Shows a toast notification on submit
=============================================*/

var contactForm = document.getElementById('contactForm');
var toast = document.getElementById('toast');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Show the toast
    toast.classList.add('show');

    // Clear all fields
    contactForm.reset();

    // Hide the toast after 3.5 seconds
    setTimeout(function() {
      toast.classList.remove('show');
    }, 3500);
  });
}
