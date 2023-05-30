let x = '';

try {
    // 실행
    // x = 20;
    // 에러 발생
    if(x==='') throw '빈값'
    let y = x + 100;
    console.log(y);
} catch(err){
    // 에러
    console.log(`에러 ${err}`);

} finally {
    // 정상, 에러 모두 실행
    console.log(`finally`);
}