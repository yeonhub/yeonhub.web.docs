const get = (target) => {
    return document.querySelector(target);
} 
const getAll = (target) => {
    return document.querySelectorAll(target);
} 

let $gnbli = getAll('#header .nav > .gnb > li');
let $sub = getAll('#header .nav .gnb li .sub');
let $header = get('#header');

let arrBg = [], old = 0 ; //old 과거값 담기 
for( let i = 0 ; i < 5 ; i++ ) {
    arrBg.push('on'+ i) 
}


$gnbli.forEach( (liItem, idx)=> {
    liItem.addEventListener('mouseenter', e => {  
        $sub.forEach( subItem => {
            subItem.classList.remove('on');
        })      
        $header.classList.remove(arrBg[old]); //이전
        $header.classList.add(arrBg[idx]); //현재
        console.log( arrBg[idx] )
        e.currentTarget.children[1].classList.add('on');
        old = idx ; // old에 현재값담어둔다 - 끝난대상을 old담아둔다  
    })
}) 
$header.addEventListener('mouseleave', e => {    
    $header.classList.remove(arrBg[old]);
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