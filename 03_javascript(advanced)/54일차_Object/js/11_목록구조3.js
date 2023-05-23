const bbsObj = {
    title: '공지사항',
    count: 5,
    item: [
        { id: 1, txt: '공지사항1' },
        { id: 2, txt: '공지사항2' },
        { id: 3, txt: '공지사항3' },
        { id: 4, txt: '공지사항4' },
        { id: 5, txt: '공지사항5' }
    ]
}

// 게시판 이름 : 
// 전체 게시물 수 : 
// 나머지 목록 : [1] 공지사항1

console.log(`게시판 이름 : ${bbsObj.title}`);
console.log(`전체 게시물 수 : ${bbsObj.count}`);
for (let i = 0; i < bbsObj.item.length; i++) {
    console.log(`[${bbsObj.item[i].id}] ${bbsObj.item[i].txt}`);
}
console.log(`--------------------------`);

console.log(`게시판 이름 : ${bbsObj.title}`);
console.log(`전체 게시물 수 : ${bbsObj.count}`);
bbsObj.item.forEach(items=>{
    console.log(`[${items.id}] ${items.txt}`);
})


const bbsObj2 = bbsObj.item.map(element =>
    element.id === 2 ? { ...element, txt: '[긴급]공지사항2' } : element
)
console.log(bbsObj2);