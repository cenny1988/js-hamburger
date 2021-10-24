/* 
Hamburger menu: mostrare / nascondere il menu principale
(ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
*/
let hiddenMenu = document.querySelector(".hamburger-menu");
let toggleMenu = document.querySelector(".header-right>a");
let xToggleMenu = document.querySelector(".hamburger-menu>a.close");
let headerWidth = document.querySelector(".header-right");



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
 
if (document.querySelector(".hamburger-menu").style.minWidth > 1000) {
    console.log(document.querySelector(".hamburger-menu").classList)
    //hiddenMenu.classList.remove("active");
}