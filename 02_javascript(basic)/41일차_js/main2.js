'use strict';

let pic = document.querySelectorAll('.main-banner li');
let next = document.querySelector('.btn-wrap .next');
let prev = document.querySelector('.btn-wrap .prev');

let current = 0;
let old = 0;

next.addEventListener('click', e=>{
    pic.forEach(item=>{
        item.style.left = '100%'
        item.style.zIndex = '-10'
    })
    pic[current].style.left = '0px'
    pic[current].style.zIndex = '-1'

    current++;

    if(current > 2) {
        current = 0;
    }
    banner('-100%', '0px');
})

prev.addEventListener('click', e=>{
    pic.forEach(item=>{
        item.style.left = '-100%'
        item.style.zIndex = '-10'
    })
    pic[current].style.zIndex = '-1'
    pic[current].style.left = '0px'

    current--;

    if(current < 1) {
        current = 2;
    }
    banner('100%', '0px');
})

const banner=(start, end)=>{
    pic[old].style.left = start;
    pic[old].style.zIndex = '-10';
    pic[current].style.left = end;
    pic[current].style.zIndex = '-1';

    old = current ;
}