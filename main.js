// Step 1: selected and gave button & MOBILE NAV names 
const menuBtn = document.getElementById("menu");
const moblieNav = document.getElementById("mobile-nav");
// Step 2: added click event to menuBtn
menuBtn.addEventListener('click',hideMobileNav )
// Step 3:added function to hide MOBILE NAV
function hideMobileNav (){
  moblieNav.classList.toggle('disappear')
}