let pic = document.querySelector('.wrap .left img');
let pic_name = document.querySelector('.wrap .left p');
let nail_li = document.querySelectorAll('.wrap .right ul li');
let nail_pic = document.querySelectorAll('.wrap .right ul li img');
let c_num = document.querySelector('.wrap .right .current');
let t_num = document.querySelector('.wrap .right .total');
let cnt = -1;
let isplay = true;
let timer_id = null;

pic.setAttribute('src', 'images/img0.jpg')
pic_name.innerHTML = 'imgView0';
c_num.innerHTML = cnt+2;
t_num.innerHTML = '/ '+nail_li.length;


timer_id=setInterval(make, 500);
function make(){
    cnt++;
    if(cnt>nail_li.length-1){
        cnt=0;
    }
    pic.setAttribute('src', 'images/img'+cnt+'.jpg')
    pic_name.innerHTML = 'imgView'+cnt;
    c_num.innerHTML = cnt+1;
    t_num.innerHTML = '/ '+nail_li.length;
}

for(let i=0; i<nail_li.length; i++){
    nail_pic[i].setAttribute('src', 'images/img'+i+'.jpg')
}

for(let j=0; j<nail_li.length; j++){
    nail_pic[j].addEventListener('click', function(){
        if(isplay){
            clearInterval(timer_id);
            isplay=false;
        }
        pic.setAttribute('src', 'images/img'+j+'.jpg')
        for(let b=0; b<nail_li.length; b++){
        nail_pic[b].classList.remove('on');
        }
        nail_pic[j].classList.add('on');
        })
        pic_name.innerHTML = 'imgView'+j;
        c_num.innerHTML = j+1;
        t_num.innerHTML = '/ '+nail_li.length;
        cnt=j;
};
    pic.addEventListener('click', function(){
        if(!isplay){
            timer_id=setInterval(make, 500)
            isplay=true;
        }
        for(let a=0; a<nail_li.length; a++){
            nail_pic[a].classList.remove('on');
        }
    });


