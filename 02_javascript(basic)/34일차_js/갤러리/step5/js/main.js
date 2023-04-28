// import 참조변수 from '경로'
import data from '../data/list.js'
let ul = document.querySelector('.wrap .right ul');
let pic = document.querySelector('.wrap .left img');
let current = document.querySelector('.wrap .right p .current');
let total = document.querySelector('.wrap .right p .total');
let txt = document.querySelector('.wrap .left span');
let cnt = 0 , size = data.length, timer=null , interval=1000;
total.textContent = size;
current.textContent  = data[cnt].id;
txt.textContent = data[cnt].txt;

data.forEach((item,idx) => {
    ul.innerHTML += `<li><img src=${item.thum} alt=""></li>`;
})

let li = document.querySelectorAll('.wrap .right ul li');
li[cnt].classList.add('on');
timer = setInterval(make,interval)
function make(){
    cnt++;
    cnt=cnt%size;
    banner(cnt);
}
function banner(cnt){
    pic.setAttribute('src', data[cnt].imgurl);
    pic.animate([
        {opacity:0},
        {opacity:1},
    ],400);
    current.textContent  = data[cnt].id;
    txt.textContent = data[cnt].txt;
    li.forEach( liItem => {
        liItem.classList.remove('on');
    })
    li[cnt].classList.add('on');
}
li.forEach( (item, idx ) => {
    item.addEventListener( 'click', e => {
        banner(idx);
        cnt = idx ;
        clearInterval(timer);
        timer = setInterval(make,interval);
    })
})
pic.addEventListener('click',e=>{
    window.open(data[cnt].url)
})