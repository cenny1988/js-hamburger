/* 
Hamburger menu: mostrare / nascondere il menu principale
(ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
*/

let hamMenu = document.querySelector("div.hamburger-menu");
let statusHamMenu = document.querySelector("div.header-right>a").style.display;
let changeHam = document.querySelector("div.header-right>a");

//console.log(statusHamMenu.display);
//hamMenu.style.display = 'block';
//console.log(hamMenu.display)

if (statusHamMenu !== "block"){
   
    changeHam.addEventListener('click',

        function(){
            //selezionare e attivare display della classe hamburger-menu
            hamMenu.style.display = 'block';
        }

    );

}