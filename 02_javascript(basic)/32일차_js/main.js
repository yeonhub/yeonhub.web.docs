let dom = document.querySelector('.sns li strong');
let end, start = 0, cnt = 0, speed = 250, step;

end = dom[0].dataset.num;
dom[0].textContent = start;
dom.forEach(item => {
    const counter =()=>{
        end = item.dataset.num;
        cnt = Number(dom[0].textContent);
        step = end/speed;
        if(cnt<end){
            dom[0].textContent = cnt + step;
        } else {
            dom[0].textContent = end;
        }
    }
});
counter();