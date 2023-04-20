'use strict';
let x = 0;
let y = 0;

while(true){
    if(x===y){
        x = Math.floor(Math.random()*11)
        y = Math.floor(Math.random()*11)
    } else {
        break;
    }
    
}
console.log(`x 값 : ${x} 값 : ${y}`)

console.log(`----------------------------------------`)

let a = ['가위', '바위', '보'];
let b = a[Math.floor(Math.random()*3)];
let c = a[Math.floor(Math.random()*3)];

if(b===c){
    console.log(`동점`)
} else if(b===a[0] && c===a[1]){
    console.log(`나 : ${b} 컴 : ${c} 컴 승`);
} else if(b===a[0] && c===a[2]){
    console.log(`나 : ${b} 컴 : ${c} 나 승`);
} else if(b===a[1] && c===a[0]){
    console.log(`나 : ${b} 컴 : ${c} 나 승`);
} else if(b===a[1] && c===a[2]){
    console.log(`나 : ${b} 컴 : ${c} 컴 승`);
} else if(b===a[2] && c===a[0]){
    console.log(`나 : ${b} 컴 : ${c} 컴 승`);
} else {console.log(`나 : ${b} 컴 : ${c} 나 승`)};

function xyz(b, c){
    if(b===c){
        console.log(`동점`)
    } else if(b===a[0] && c===a[1]){
        console.log(`나 : ${b} 컴 : ${c} 컴 승`);
    } else if(b===a[0] && c===a[2]){
        console.log(`나 : ${b} 컴 : ${c} 나 승`);
    } else if(b===a[1] && c===a[0]){
        console.log(`나 : ${b} 컴 : ${c} 나 승`);
    } else if(b===a[1] && c===a[2]){
        console.log(`나 : ${b} 컴 : ${c} 컴 승`);
    } else if(b===a[2] && c===a[0]){
        console.log(`나 : ${b} 컴 : ${c} 컴 승`);
    } else {console.log(`나 : ${b} 컴 : ${c} 나 승`)};
}

xyz(b, c);

console.log(`----------------------------------------`)

let test = [
    [ '기김철', 50, 50, 100],

    [ '김기철', 90, 40, 20],

    [ '김철기', 80, 50, 10],

    [ '기철김', 80, 90, 100],

    [ '철기김', 50, 50, 20]
]
let sum = 0;
for(let i=0; i<test.length; i++){
    for(let j=1; j<test[i].length; j++){
        sum+=test[i][j];
    }
}
console.log(`총점 : ${sum}`);

let avg = sum/(test.length*(test[0].length-1));
console.log(`평균 : ${avg}`);


console.log(`----------------------------------------`)

let sum2 = [];
for (let d = 0; d < test.length; d++) {
    let sum3 = 0;
  for (let e = 1; e < test[d].length; e++) {
    sum3 += test[d][e];
  }
  sum2.push(sum3);
}

for(let f=0; f<test.length; f++){
    console.log(`${test[f][0]}의 총점 : ${sum2[f]} 평균 : ${sum2[f]/3}`); 
}