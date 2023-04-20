'use strict';
let now = new Date();
let y = now.getFullYear();
let mo = now.getMonth()+1;
let d = now.getDate();
let dd = now.getDay();
let arr = ['일','월','화','수','목','금','토']
let day = arr[dd];

let hh = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();


console.log(`오늘은 ${y}년 ${mo}월 ${d}일 ${day}요일`)
console.log(`지금은 ${hh}시 ${m}분 ${s}초`)

// 24시간, 12시간

let h = now.getHours();
let ba ="";
if(h>0 && h<12) {
    ba = "오전";
} else {
    ba = "오후";
    h = h - 12;
}
let hhh = String(h).padStart(2,0);
console.log(`지금은 ${ba} ${hhh}시 ${m}분 ${s}초`)