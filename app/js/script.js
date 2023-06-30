const burgerBtn = document.querySelector('#burgerBtn'); 
// Weist der Konstante burgerBtn das Element mit der ID #burgerBtn zu
/* document.querySelector('burgerBtn') findet das Element mit der 
   angegebenen ID und weist es der Konstante zu */
const header = document.querySelector('.header__menu');
const overlay = document.querySelector('.overlay');

const fadeElems = document.querySelectorAll('.has-fade');

burgerBtn.addEventListener('click', function() {
// Fügt Event-Listener zu burgerBtn hinzu
//Event-Listener wartet auf Click-Event


    if (header.classList.contains('open')) { // Prüft auf Klasse "Open"
        header.classList.remove('open'); //Falls enthalten: entferne "open"

        fadeElems.forEach(function (element) {

            element.classList.remove('fade-in');
            element.classList.add('fade-out');

        });
    }
    
    else { // Hamburger Menü öffnen
        header.classList.add('open'); // Falls nicht: füge "open" hinzu

        fadeElems.forEach(function (element) {

            element.classList.remove('fade-out');
            element.classList.add('fade-in'); 
        });

       
    }
    
});





