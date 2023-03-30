//hamburger menu & no scroll start//
const wrapper = document.querySelector('.wrapper');
const menu = document.querySelector('.hamburger-menu');

menu.addEventListener('click', () => {
    wrapper.classList.toggle('active')
});

menu.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll');
});
//hamburger menu & no scroll end//