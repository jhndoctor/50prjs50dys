const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerHTML = '0'
    const target = +counter.dataset.target

    const updateCounter = () => {
        const c = +counter.innerText
        const increment = target / 200

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})