let obj = {
    lastName : '김',
    age : 30,
    addr : '서울'
};

// const {lastName, age, addr} = {
//     lastName : '김',
//     age : 30,
//     addr : '서울'
// }
// console.log(lasyName, age, addr);

const {lastName, age, addr} = obj;
console.log(lastName, age, addr);
console.log();

let obj1 = {
    name : '이',
    birth : {year : 2002, month : 4, day : 20},
    addr : {
        city : {
            cityName : '인천',
            ward : {
                wardName : '송도동'
            }
        }
    }
}

console.log(obj1.addr.city.cityName);
console.log(obj1.addr.city.ward.wardName);
console.log();

let {
    name, 
    birth : {year, month, day},
    addr : {
        city : {
            cityName,
            ward : {
                wardName
            }
        }
    }
} = obj1

console.log(month);
console.log(cityName);
console.log(wardName);
console.log();

let output = {
    name, birth, year, wardName
}
console.log(output);
output = {
    name : name,
    birth : birth,
    year : year,
    wardName : wardName
}
// 객체에 키와 값이 동일할 경우 키만 작성