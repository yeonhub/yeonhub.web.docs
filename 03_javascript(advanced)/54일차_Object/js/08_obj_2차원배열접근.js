let obj = {
    center: {
        x: 10,
        y: 20
    },
    radius: 5.40
}

console.log(obj.center.x);
console.log(obj.center.y);
console.log(obj.radius);

// 계층구조
let centerObj = {
    x: 30,
    y: 40
}
let obj2 = {
    center: centerObj,
    radius: 6.50
}

console.log(obj2.center.x);
console.log(obj2.center.y);
console.log(obj2.radius);