const burgerBtn = document.querySelector('#burgerBtn');

burgerBtn.addEventListener('click', function() {
    console.log('click hamburger');

    if (burgerBtn.classList.contains('open')) {
        burgerBtn.classList.remove('open');
    }
    else {
    burgerBtn.classList.add('open'); 
    }
    
})