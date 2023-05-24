function Man(name){
    this.name = name;
}

const man1 = new Man('김');
const man2 = new Man('이');
const man3 = new Man('박');

Man.prototype.age = 20;
Man.prototype.color = 'orange';
Man.prototype.run = function(){
    console.log(this.name, 'HELLO');
}
console.log(man1.name, man1.age, man1.color);
man1.run();
console.log(man2.name, man2.age, man2.color);
man2.run();
console.log(man3.name, man3.age, man3.color);
man3.run();