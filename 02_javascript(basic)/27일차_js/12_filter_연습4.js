'use strict';
const data =[
    {text:'naver'},
    {text:'NAVER'},
    {text:'nate'},
    {text:'NATE'},
    {text:'google'},
    {text:'GOOGle'},
    {text:'dog'},
    {text:'DOG'},
    {text:'cat'},
    {text:'CAT'},
    {text:'CUTE'},
    {text:'cute'},
];
let txt = 'do';
let txt_up = txt.toUpperCase();
let arr1 = data.filter(a=>a.text.toUpperCase().includes(txt_up));
console.log(arr1);