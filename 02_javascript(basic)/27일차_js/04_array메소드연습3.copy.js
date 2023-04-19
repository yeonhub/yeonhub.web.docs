// 1. 최대값 : sort, at()
let arr=[10,5,100,20,40,300,30,90]
let arrsort = arr.sort(function(a, b){
    if(a>b){
        return 1;
    } else if (a<b) {
        return -1;
    } else {
        return 0;
    }
});
let arrmax=arrsort[arr.length-1];
let arrmax2=arrsort.at(-1);

console.log(arrmax);
console.log(arrmax2);