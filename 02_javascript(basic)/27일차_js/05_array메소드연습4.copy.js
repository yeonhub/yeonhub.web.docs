let arr=[10,5,100,20,40,300,30,90]
let arrmax = 0; //최대값을 담을 그릇

for(let i=0; i<arr.length; i++){
    if(arrmax < arr[i]){
        arrmax = arr[i];
    }
}
console.log(arrmax);