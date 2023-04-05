/* console
    메세지 출력, 중간값 체크, 에러 체크 */
console.log('안녕하세요');

console.group('메세지1');
    console.log('안녕하세요1');
    console.log('안녕하세요2');
    console.log('안녕하세요3');
console.groupEnd();

console.log();
// 내용 없으면 비어있는 공간

console.group('메세지2');
    console.log('안녕히가세요1');
    console.log('안녕히가세요2');
    console.log('안녕히가세요3');
console.groupEnd