  /* Hamburger menu */
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLink = document.querySelectorAll(".nav-link");
  
  hamburger.addEventListener("click", mobileMenu);
  navLink.forEach(n => n.addEventListener("click", closeMenu));
  
  function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
  }
  
  function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
  }

  /* javascript for image background when nav item is clicked */
  
  function changeToBlue() {
    document.getElementById("start").style.backgroundImage = "url(images/lightblue.jpg)";
    document.getElementById("start").style.height = "100%";
    document.getElementById("start").style.backgroundPosition = "center";
    document.getElementById("start").style.backgroundSize = "cover";
    document.getElementById("start").style.overflow = "hidden";
 }
 function changeToGold() {
    document.getElementById("start").style.backgroundImage = "url(images/lightgold.jpg)";
 }
 function changeToDef() {
    document.getElementById("start").body.style.backgroundColor = 'blue';
 }
   


