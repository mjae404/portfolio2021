var scrollPosition = window.scrollY;
var logoContainer = document.getElementsByClassName('header')[0];

window.addEventListener('scroll', function() {
    scrollPosition = window.scrollY;

    if (scrollPosition >= 30) {
        logoContainer.classList.add('black');
    } else {
        logoContainer.classList.remove('black');
    }
});