const test = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('1번 실행');
            resolve();
        }, 2000);
    });
};
const test1 = () => console.log('2번 실행');
console.log('시작');
// test().then(()=>test1())

/* 
1. async function
    const test = async() => {} **
2. async 안에 await 반드시 포함
    const test = async() => {await} **
    async : Promise 기반
    await : .then()

*promise
Promise 를 만드는 순간 비동기 작업이 시작되며, 비동기 작업을 성공으로 간주하고 싶을 때 resolve를 호출하고, 실패라 간주하고 싶다면 reject 함수를 호출합니다. 이 비동기 작업이 성공했을 때 후속 조치를 지정하고 싶다면 then으로, 실패 시의 후속 조치는 catch 로 지정하는 것까지 함께 살펴보았습니다.
*/

const make = async () => {
    await test();
    test1();
}
make();