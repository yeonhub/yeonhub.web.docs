// 화살표함수 안에 arguments 사용 불가
function make1(name){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);

    // let arr = Array.from(arguments);
    // arr.forEach(item=>{
    //     console.log(item);
    // })
    
    // let arr2 = [...arguments];
    // arr2.forEach(item=>{
    //     console.log(item);
    // })
}

make1('김','이','박','최');