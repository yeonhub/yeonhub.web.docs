'use strict';

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

let sum2=0;
let sum3=0;
let sum4=0;
let sum5=0;
let sum6=0;
for(let t=0; t<test.length; t++){
    for(let k=1; k<test[t].length; k++){
        if(t==0){
            sum2+=test[t][k];
        } else if(t==1){
            sum3+=test[t][k];
        } else if(t==2){
            sum4+=test[t][k];
        } else if(t==3){
            sum5+=test[t][k];
        } else if(t==4) {
            sum6+=test[t][k];
        } 
    }
}
console.log(
    `${test[0][0]}의 총점은 ${sum2}이고 평균은 ${sum2/3}입니다.
    ${test[1][0]}의 총점은 ${sum3}이고 평균은 ${sum3/3}입니다.
    ${test[2][0]}의 총점은 ${sum4}이고 평균은 ${sum4/3}입니다.
    ${test[3][0]}의 총점은 ${sum5}이고 평균은 ${sum5/3}입니다.
    ${test[4][0]}의 총점은 ${sum6}이고 평균은 ${sum6/3}입니다.`)