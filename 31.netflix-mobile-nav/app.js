const open = document.querySelector('.open-btn');
const close = document.querySelector('.close-btn');
const navs = document.querySelectorAll('.nav')

open.addEventListener('click', () => {
    navs.forEach(nav => nav.classList.add('visible'))
})

close.addEventListener('click', () => {
    navs.forEach(nav => nav.classList.remove('visible'))
})