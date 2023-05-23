const data = [
    {id : 1, name : '김'},
    {id : 2, name : '이'},
    {id : 3, name : '박'},
    {id : 4, name : '최'},
    {id : 5, name : '정'}
];

const data1 = data.map(item=>{
    if(item.id===3) {
        return {id:3, name:'민'};
    } else {
        return item;
    }
})
console.log(data1);

const data2 = data.map(item=>{
    if(item.id===3) {
        return {
            ...item,
            name : '민'
        };
    } else {
        return item;
    }
})
console.log(data1);

// 삼항연산자
const data3 = data.map(item=>
    item.id===3 ? {...item, name : '민'} : item)
console.log(data3);