// 메서드
class Calc {
    plus(x, y) {
        return x + y;
    };
    minus(x, y) {
        return x - y;
    };
};

const x = new Calc();
console.log('합 : '+x.plus(10, 30));
console.log('차 : '+x.minus(10, 30));