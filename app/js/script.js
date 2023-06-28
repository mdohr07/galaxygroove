const header = document.querySelector('#burgerBtn'); 
// Weist der Konstante burgerBtn das Element mit der ID #burgerBtn zu
/* document.querySelector('burgerBtn') findet das Element mit der 
   angegebenen ID und weist es der Konstante zu */

burgerBtn.addEventListener('click', function() {
// Fügt Event-Listener zu burgerBtn hinzu
//Event-Listener wartet auf Click-Event


    if (header.classList.contains('open')) { // Prüft auf Klasse "Open"
        header.classList.remove('open'); //Falls enthalten: entferne "open"
    }
    else {
    header.classList.add('open'); // Falls nicht: füge "open" hinzu
    }
    
});