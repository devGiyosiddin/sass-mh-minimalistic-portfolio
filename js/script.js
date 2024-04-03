const elSiteHeader = document.querySelector('.header');
const elNavMenu = document.querySelector('.nav-menu');
if (elNavMenu) {
    elNavMenu.addEventListener('click', () => {
        elSiteHeader.classList.toggle('header--open');       
    }
    )
}