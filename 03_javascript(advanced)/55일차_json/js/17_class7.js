class hi {
    eng(){
        console.log('HELLO WORLD');
    }
}
// 상속, 기능확장
class hiWorld extends hi {
    kor(){
        console.log('안녕 세상아');
    }
}

const test = new hiWorld();
test.eng();
test.kor();