const get = (target) => {
    return document.querySelector(target)
}
const getAll = (target) => {
    return document.querySelectorAll(target)
}

const $slides = getAll('.slide')
const $boxs = getAll('.slide .box')
const $next = get('.next')
const $prev = get('.prev')

class Banner {
    interval = 1000
    timer = null
    auto = true
    constructor(data) {
        this.data = data
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
    show(){
        for(let i=0; i<data.length; i++){
            $slides[i].children[0].innerHTML=`
            <h2>${data[i].title}</h2>
            <p>${data[i].des}</p>
            `
        }
    }
}
const data = [
    {id : 1, title : '월요일', des:'기쁘며, 위하여 못하다 눈이 스며들어 속에 부패뿐이다. 인간은 힘차게 같으며, 이것을 고동을 사랑의 되는 모래뿐일 있으며, 이것이다'},
    {id : 2, title : '화요일', des:'하는 같은 인생을 들어 작고 힘있다. 얼마나 밥을 인간이 더운지라 이성은 부패뿐이다. 끓는 얼마나 우리의 뜨고, 인간에 하는 사막이다'},
    {id : 3, title : '수요일', des:'오직 피가 들어 열락의 되려니와, 황금시대다. 무엇이 새가 얼음에 시들어 오직 설산에서 인도하겠다는 칼이다. 얼마나 천고에 가치를 생생하며, 밝은 아름다우냐?'},
    {id : 4, title : '목요일', des:'봄바람을 대고, 이 기관과 못할 그들의 이상의 심장은 때문이다. 노래하며 이상을 하는 생생하며, 일월과 예수는 장식하는 긴지라 아름다우냐?'},
    {id : 5, title : '금요일', des:'슬퍼하는 사람들의 별들을 오는 거외다. 못 벌써 흙으로 라이너 토끼, 가득 이런 버리었습니다.'},
    {id : 6, title : '토요일', des:'못 이름자를 하나에 많은 듯합니다. 오면 청춘이 사랑과 버리었습니다. 무성할 하나 별 마디씩 부끄러운 이국 까닭입니다.'}
]
const banner = new Banner(data)
banner.init()
banner.show()