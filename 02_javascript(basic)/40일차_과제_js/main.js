'use strict';
const get =(target)=>{
    return document.querySelector(target);
}
const getAll =(target)=>{
    return document.querySelectorAll(target);
}

let $ul = get('ul');
let $li = getAll('li');
let $btn = get('button');
let uh = 800;

$btn.addEventListener('click', e => {
    uh += 800;
    if (uh > 2000) {
        uh = 2400;
    }
    $ul.style.height = uh + 'px';
});

$li.forEach(element=>{
    element.addEventListener('click', e=>{
        
    })
})