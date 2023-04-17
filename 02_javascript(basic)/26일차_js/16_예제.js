'use strict';

const obj =[
    {name:'김철수', age:20},
    {name:'이수근', age:30},
    {name:'김다미', age:40},
    {name:'최우식', age:25},
    {name:'김성철', age:22},
    {name:'송혜교', age:10},
    {name:'유재석', age:45},
]
// obj[0].name = 김철수 , obj[0].age=20
// obj[1].name = 이수근 , obj[1].age=30
// obj[2].name = 김다미 , obj[2].age=40

obj.sort(function(a, b){
    if(a.age > b.age){
        return 1;
    } else if(a.age < b.age) {
        return -1;
    }   return 0;
});
console.log(obj);

const obj1 =[
    {name:'김철수', age:20},
    {name:'이수근', age:30},
    {name:'김다미', age:40},
    {name:'최우식', age:25},
    {name:'김성철', age:22},
    {name:'송혜교', age:10},
    {name:'유재석', age:45},
]
/* obj1.sort((a, b)=>{
    return a.age>b.age ? 1 : a.age<b.age ? -1 : 0;
}); */
console.log(obj1);
obj1.sort((a, b)=> a.age>b.age ? 1 : a.age<b.age ? -1 : 0)