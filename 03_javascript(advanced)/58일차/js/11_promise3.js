const menu1 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('1) 아메리카노 주문 완료');
        }, 2000);
    })
}
const menu2 = (msg)=>{
    console.log(msg);
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('2) 바닐라라떼 주문 완료');
        }, 2000);
    })
}
menu1().then(res=>console.log(res));