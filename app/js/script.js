const burgerBtn = document.querySelector('#burgerBtn'); 
// Weist der Konstante burgerBtn das Element mit der ID #burgerBtn zu
/* document.querySelector('burgerBtn') findet das Element mit der 
   angegebenen ID und weist es der Konstante zu */

burgerBtn.addEventListener('click', function() {
// Fügt Event-Listener zu burgerBtn hinzu
//Event-Listener wartet auf Click-Event


    if (burgerBtn.classList.contains('open')) { // Prüft auf Klasse "Open"
        burgerBtn.classList.remove('open'); //Falls enthalten: entferne "open"
    }
    else {
        burgerBtn.classList.add('open'); // Falls nicht: füge "open" hinzu
    }
    
});