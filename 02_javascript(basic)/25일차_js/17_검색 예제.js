'use strict';

let str ='Good morning afternoon evening DOG CAT Naver dog Cat Goole Nate naver MORNING'

let txt = 'doG';

if(
    str.toLowerCase().includes(txt.toLowerCase())
     || 
    str.toLowerCase().indexOf(txt.toLowerCase())!==-1){
    console.log(`${txt} 찾음`);
} else {
    console.log(`${txt} 못찾음`);
}