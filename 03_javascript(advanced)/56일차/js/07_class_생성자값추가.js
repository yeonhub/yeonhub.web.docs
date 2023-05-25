// 사람, 운동 종류, 운동 시간
class Human {
    name
    health
    time
    count = 0
    constructor(name, health, time) {
        this.name = name
        this.health = health
        this.time = time
        this.count = this.count + 1
        console.log(`count : ${this.count}`);
        console.log('[%s]의 운동은 %s이고 운동시간은 %d', name, health, time);
    }
    workOut(target) {
        console.log(this.name + '(이)가' + target + '와 운동 시간은' + this.time + '시간');
    }
}
class Person extends Human {
    // 오버라이딩
    workOut(target) {
        console.log(this.name + '(이)가' + target + '와 운동은' + this.health);
    }
}
class Man extends Human {
    workOut(target) {
        super.workOut(target)
        console.log('>>> 함께 운동');
    }
}
class Female extends Person {
    constructor(name, health, time, age, color) {
        super(name, health, time)
        this.age = age
        this.color = color
    }
    say() {
        console.log(`${this.name}(이름) ${this.age}(나이) ${this.health}(운동) ${this.color}(색)`);
    }
}

const x = new Person('김민기', '트레드밀', 2)
x.workOut('최호흥');

const y = new Man('유덕배', '레그프레스', 4)
y.workOut('배두기')