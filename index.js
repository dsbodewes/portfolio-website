
// Parallax effect
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  document.getElementById('home').style.backgroundPosition = 'center ' + (scrollPosition * 0.2) + 'px';
});

// window.addEventListener('scroll', function() {
//   var navbar = document.getElementById('header');
//   if (window.scrollY > 80) {
//     navbar.style.padding = '30px 10px';
//   } else {
//     navbar.style.padding = '80px 10px';
//   }
// });


// Shrinking navbar on scroll
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('header');
  if (window.scrollY > 80) {
    navbar.classList.add('shrunk');
  } else {
    navbar.classList.remove('shrunk');
  }
});

// Toggle theme
function toggleTheme() {
  var body = document.body;
  if (body.getAttribute('data-theme') === 'light') {
    body.setAttribute('data-theme', 'dark');
  } else {
    body.setAttribute('data-theme', 'light');
  }
}

