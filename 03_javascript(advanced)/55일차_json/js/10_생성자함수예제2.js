function User(id, email){
    this.id = id;
    this.email = email;
}
// 로그인, 로그아웃 공통(상속)
User.prototype.login = function(){
    console.log('로그인 성공'+this.id);
}
User.prototype.logout = function(){
    console.log('로그아웃 성공'+this.id);
}

const User1 = new User('aaa', 'aaa@gmail.com')
const User2 = new User('bbb', 'bbb@gmail.com')
const User3 = new User('ccc', 'ccc@gmail.com')

console.log(User1.id, User1.email);
User1.login();