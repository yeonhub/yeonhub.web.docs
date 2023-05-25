const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const view = document.querySelector('.view');
const output = document.querySelector('.output');
let timer  = null , count = 1 , interval  = 1000;

const obj = {
    color : 'tan',
    backgroundColor : 'yellow'
}
// obj.color, obj['backgroundColor']
// 구조분해
const {color, backgroundColor} = obj;
view.style.color = color;
view.style.backgroundColor = backgroundColor;

//시작 -> 1초단위로 숫자가 증가 시작은 0부터 현재시간+시작 make()
startBtn.addEventListener('click', e => {
    if(timer === null){
        view.textContent = count;
        timer = setInterval(()=>{
            count++;
            view.textContent = count;
        }, interval)
    }
    make('시작');
})
//중지 - 현재시간 + 중지 make()
stopBtn.addEventListener('click', e => {
    if(timer !== null) {
        clearInterval(timer);
        timer = null;
    }
    make('중지');
})
//화면에 출력부분 공통
function make(txt) {
    let today = new Date();
    let p = document.createElement('p')
    p.innerHTML=`${today.toLocaleTimeString()} ${txt}`
    output.append(p)
    output.classList.add('msg')
}