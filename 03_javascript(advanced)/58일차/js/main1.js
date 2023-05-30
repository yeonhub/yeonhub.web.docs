const prev = document.querySelector('.banner-wrap .btn-wrap .prev');
const next = document.querySelector('.banner-wrap .btn-wrap .next');
const banner = document.querySelector('.banner-wrap .banner');
const bannerli = document.querySelectorAll('.banner-wrap .banner li');
const pagingli = document.querySelectorAll('.banner-wrap .paging li');
let current = 0, old = 0, size = 600, len = bannerli.length;

class Banner {
    constructor() { }
    init() {
        next.addEventListener('click', (e) => {
            this.next();
        })
        prev.addEventListener('click', (e) => {
            this.prev();
        })
        pagingli.forEach(item => {
            item.addEventListener('click', (e) => {
                this.pagingli(e);
            })
        })
    }
    next() {
        current++;
        if (current > len - 1) {
            current = 0;
        }
        banner.style.transform = `translateX(${-size * current}px)`;
        pagingli[old].classList.remove('on');
        pagingli[current].classList.add('on');
        old = current;
    }
    prev() {
        current--;
        if (current < 0) {
            current = len - 1;
        }
        banner.style.transform = `translateX(${-size * current}px)`;
        pagingli[old].classList.remove('on');
        pagingli[current].classList.add('on');
        old = current;
    }
    pagingli(e) {
        let el = e.currentTarget;
        current = el.dataset.num;
        pagingli[old].classList.remove('on');
        el.classList.add('on');
        banner.style.transform = `translateX(${-size * current}px)`;
        old = current;
    }
}
const banner10 = new Banner();
banner10.init();