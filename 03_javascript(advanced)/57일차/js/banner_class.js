const get = (target) => {
    return document.querySelector(target)
}
const getAll = (target) => {
    return document.querySelectorAll(target)
}

const $slides = getAll('.slide')
const $next = get('.next')
const $prev = get('.prev')

class Banner {
    interval = 1000
    timer = null
    auto = true
    constructor() {
    }
    init() {
        if (this.auto) this.timer = setInterval(this.nextSlide, this.interval)
        $next.addEventListener('click', e => {
            this.nextSlide();
            if (this.auto) {
                clearInterval(this.timer);
                this.timer = setInterval(this.nextSlide, this.interval)
            }
        })
        $prev.addEventListener('click', e => {
            this.prevSlide();
            clearInterval(this.timer);
            this.timer = setInterval(this.prevSlide, this.interval)
        })
    }
    nextSlide() {
        const current = document.querySelector('.current');
        current.classList.remove('current');
        if (current.nextElementSibling) current.nextElementSibling.classList.add('current');
        else $slides[0].classList.add('current');
    }
    prevSlide() {
        const current = document.querySelector('.current');
        current.classList.remove('current');
        if (current.previousElementSibling) current.previousElementSibling.classList.add('current');
        else $slides[$slides.length - 1].classList.add('current');
    }
}

const banner = new Banner()
banner.init()