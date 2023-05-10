'use strict';


let ul = document.querySelector('.main-banner');
let li = document.querySelectorAll('.main-banner li');
let next = document.querySelector('.btn-wrap .next');
let prev = document.querySelector('.btn-wrap .prev');

let current = 0;
let old = 0;
let old2 = 0;
let t = 0;



next.addEventListener('click', e=>{
    current ++;
    t++;
    li[current].style.left = '0'
    li[old].style.zIndex = '-10'
    
    li[old2].style.zIndex = '-20'

    old = current;

    //  if(current>2){
    //     current = 0;
    //  }

    console.log(getComputedStyle(li[0]).left);
    // if(getComputedStyle(li[0]).left==='-100%'){
    //     item.style.left = '100%'
    // }
    li.forEach(item=>{
        if(getComputedStyle(item).zIndex==='-20'){
            item.style.left = '100%'
        }
    })
})
