'use strict';
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

