let a = 0;
const make=()=>{
    a++;
    if(a<10){
        return make();
    } else {
        return 10;
    }
}

make();
