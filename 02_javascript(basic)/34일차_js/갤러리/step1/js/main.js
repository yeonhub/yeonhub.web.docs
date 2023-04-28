let arr = [];
for (let i = 0; i < 18; i++) {
    arr.push('사진에 대한 타이틀'+i);
}
let li = document.querySelectorAll('.wrap .right ul li');
let pic = document.querySelector('.wrap .left img');
let current = document.querySelector('.wrap .right p .current');
let total = document.querySelector('.wrap .right p .total');
let txt = document.querySelector('.wrap .left span');
let cnt = 0;
let size = li.length;

li.forEach((item, idx) => {
    item.addEventListener('click',e=>{
        pic.setAttribute('src', 'images/bimg'+idx+'.jpg');
        pic.animate([
            {opacity : 0},
            {opacity : 1},
        ],400);
        current.textContent = idx +1;
        txt.textContent = arr[idx];
        li.forEach(liItem =>{
            liItem.classList.remove('on');
        })
        e.currentTarget.classList.add('on');
        cnt = idx;
    });
});
total.textContent = size;
current.textContent = cnt +1;
txt.textContent = arr[cnt];