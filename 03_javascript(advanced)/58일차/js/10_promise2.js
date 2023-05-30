// ~.then : 프라미스 원리
const menu1 = (callback)=>{
    setTimeout(() => {
        console.log('1) 아메리카노 주문 완료');
        callback();
    }, 2000);
}
const menu2 = (callback)=>{
    setTimeout(() => {
        console.log('2) 그린티라떼 주문 완료');
        callback();
    }, 2000);
}
const menu3 = (callback)=>{
    setTimeout(() => {
        console.log('3) 로얄밀크티 주문 완료');
        callback();
    }, 2000);
}

console.log('음료 주문하기 시작');
menu1(function(){
    menu2(function(){
        menu3(function(){
            console.log('주문 완료');
        })
    })
})