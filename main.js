/* 
Hamburger menu: mostrare / nascondere il menu principale
(ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
*/
let hiddenMenu = document.querySelector("div.hamburger-menu");
let toggleMenu = document.querySelector("div.header-right>a");
let xToggleMenu = document.querySelector("div.hamburger-menu>a.close");
let headerWidth = document.querySelector("div.header-right");
console.log(headerWidth.offsetWidth);

toggleMenu.addEventListener('click',
    function(){
        hiddenMenu.classList.add("active");
    }
);

xToggleMenu.addEventListener('click',
    function(){
        hiddenMenu.classList.remove("active");
    }
);

if (headerWidth.offsetWidth >= 768 ){
    hiddenMenu.classList.remove("active");
    console.log("yeah!");
}
