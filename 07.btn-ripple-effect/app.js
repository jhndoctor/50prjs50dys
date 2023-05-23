const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        var left = e.pageX - e.target.offsetLeft;
        var top  = e.pageY - e.target.offsetTop;

        var circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.left = left + 'px';
        circle.style.top = top + 'px';
        button.appendChild(circle);

        setTimeout(() =>  circle.remove(), 500);
    });
});