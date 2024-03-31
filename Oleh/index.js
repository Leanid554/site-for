const nav = document.querySelector('#nav');
const navButton = document.querySelector('#nav-button');
const navButtonImg = document.querySelector('#nav-button-img');
const navLinks = document.querySelectorAll('.nav-link'); 


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}



function scrollToServices() {
    const servicesDiv = document.getElementById('uslugi');
    servicesDiv.scrollIntoView({ behavior: 'smooth' });
}
function scrollToCennik() {
    const servicesDiv = document.getElementById('cennik');
    servicesDiv.scrollIntoView({ behavior: 'smooth' });
}
function scrollToKontacts(){
    const servicesDiv = document.getElementById('kontacts');
    servicesDiv.scrollIntoView({ behavior: 'smooth' });
}
navButton.addEventListener('click', () => {
    nav.classList.toggle('open'); 
    header.classList.toggle('open'); 
    if (nav.classList.contains('open')) {
        navButtonImg.src = "/img/NAV_CLOSE.svg";
    } else {
        navButtonImg.src = "/img/NAV.svg"; 
    }
});
