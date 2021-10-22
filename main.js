/* 
Hamburger menu: mostrare / nascondere il menu principale
(ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
*/

let hiddenMenu = document.querySelector("div.hamburger-menu").style;
let statusHamMenu = document.querySelector("div.header-right>a");
let toggleMenu = document.querySelector("div.header-right>a");
let xToggleMenu = document.querySelector("div.hamburger-menu>a.close");

console.log(hiddenMenu.display);
console.log(toggleMenu.display);
//hiddenMenu.style.display = 'block';
//console.log(window.getComputedStyle(hiddenMenu).visibility);
//console.log(window.getComputedStyle(toggleMenu).display);
//console.log(window.getComputedStyle(statusHamMenu).visibility);

toggleMenu.addEventListener('click',
    function(){
        hiddenMenu.display = 'block';
    }
);

xToggleMenu.addEventListener('click',
    function(){
        hiddenMenu.display = 'none';
    }
);