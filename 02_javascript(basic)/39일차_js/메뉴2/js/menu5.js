const get = (target) => {
    return document.querySelector(target);
} 
const getAll = (target) => {
    return document.querySelectorAll(target);
} 

let $gnbli = getAll('#header .nav > .gnb > li');
let $header = get('#header');

$gnbli.forEach( liItem => {
    liItem.addEventListener('mouseenter', e => {        
        $header.classList.add('on');
    })
}) 
$header.addEventListener('mouseleave', e => {    
    $header.classList.remove('on');
})




/* const get = (target) => {
    return document.querySelector(target);
} 
const getAll = (target) => {
    return document.querySelectorAll(target);
} 

let gnbli = document.querySelectorAll('#header .nav > .gnb > li');
let subli = document.querySelectorAll('#header .nav .gnb li ul');
let header = document.querySelector('#header');

//li에 마우스를 올리면 자식중에 두번째에 클래스 붙이기 
gnbli.forEach( liItem => {
    liItem.addEventListener('mouseenter', e => {
        let current  = e.currentTarget; 
        subli.forEach( subItem => {
            subItem.classList.remove('on');
        })
        current.children[1].classList.add('on');
    })
}) 

header.addEventListener('mouseleave', e => {
    subli.forEach( subItem => {
        subItem.classList.remove('on');
    })
}) */