let next = document.querySelector('.naver .num-box .next');
let prev = document.querySelector('.naver .num-box .prev');
let dom = document.querySelectorAll('.naver .con-box article');
let current = document.querySelector('.naver .num-box .current');
let total = document.querySelector('.naver .num-box .total1');
let cnt = 0;
let size = dom.length;
current.textContent = cnt + 1;

next.addEventListener('click', e=>{
    cnt++;
    if(cnt>size-1){
        cnt=0;
    }
    banner();
});
prev.addEventListener('click', e=>{
    cnt--;
    if(cnt<0){
        cnt = size -1;
    }
    banner();
});

function banner(){
    dom.forEach(item=>{
        item.style.display='none';
    })
    dom[cnt].style.display='block';
    current.textContent=cnt+1;
};