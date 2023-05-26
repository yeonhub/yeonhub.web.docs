const slides = document.querySelectorAll('.slide')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

let timer = null;
let interval = 1000;
let auto = true;

const nextSlide=()=>{
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling) current.nextElementSibling.classList.add('current');
    else slides[0].classList.add('current');
    
}
const prevSlide=()=>{
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling) current.previousElementSibling.classList.add('current');
    else slides[slides.length-1].classList.add('current');

}

next.addEventListener('click',e=>{
    nextSlide();
    if(auto){
        clearInterval(timer);
        timer = setInterval(nextSlide, interval)
    }
})
prev.addEventListener('click',e=>{
    prevSlide();
    clearInterval(timer);
    timer = setInterval(prevSlide, interval)

})

if(auto) timer = setInterval(nextSlide, interval)