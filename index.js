
// Navbar shrink on scroll
// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "30px 10px";
//     document.getElementById("logo").style.fontSize = "25px";
//   } else {
//     document.getElementById("navbar").style.padding = "80px 10px";
//     document.getElementById("logo").style.fontSize = "35px";
//   }
// }

// Parallax effect
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  document.getElementById('home').style.backgroundPosition = 'center ' + (scrollPosition * 0.2) + 'px';
});

window.addEventListener('scroll', function() {
  var navbar = document.getElementById('header');
  if (window.scrollY > 80) {
    navbar.style.padding = '30px 10px';
  } else {
    navbar.style.padding = '80px 10px';
  }
});

function toggleTheme() {
  var body = document.body;
  if (body.getAttribute('data-theme') === 'light') {
    body.setAttribute('data-theme', 'dark');
  } else {
    body.setAttribute('data-theme', 'light');
  }
}
