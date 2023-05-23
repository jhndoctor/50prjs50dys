const contents = document.querySelectorAll('.content');
const lis = document.querySelectorAll('nav ul li');

lis.forEach((li, idx) => {
    li.addEventListener('click', e => {
        contents.forEach(content => content.classList.remove('show'))
        lis.forEach(rli => rli.classList.remove('active'))
        li.classList.add('active')
        contents[idx].classList.add('show')
    })
})