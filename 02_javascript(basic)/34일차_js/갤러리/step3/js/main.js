let data = [
    {id:1, txt:'헤는 아침이 별 까닭입니다.', imgurl:'images/bimg0.jpg', thum:'images/thum0.jpg', url:'http://www.google.com'},
    {id:2, txt:'덮어 나는 하나 내 그리워 있습니다.', imgurl:'images/bimg1.jpg', thum:'images/thum1.jpg', url:'http://www.google.com'},
    {id:3, txt:'하나에 아이들의 노루, 까닭입니다.', imgurl:'images/bimg2.jpg', thum:'images/thum2.jpg', url:'http://www.google.com'},
    {id:4, txt:'부끄러운 풀이 나의 당신은 까닭입니다.', imgurl:'images/bimg3.jpg', thum:'images/thum3.jpg', url:'http://www.google.com'},
    {id:5, txt:'청춘이 가득 헤일 마디씩 까닭입니다.', imgurl:'images/bimg4.jpg', thum:'images/thum4.jpg', url:'http://www.google.com'},
    {id:6, txt:'풀이 무엇인지 시와 이름을 버리었습니다.', imgurl:'images/bimg5.jpg', thum:'images/thum5.jpg', url:'http://www.google.com'},
    {id:7, txt:'북간도에 자랑처럼 사랑과 언덕', imgurl:'images/bimg6.jpg', thum:'images/thum6.jpg', url:'http://www.google.com'},
    {id:8, txt:'계절이 내 묻힌 다 옥 까닭입니다.', imgurl:'images/bimg7.jpg', thum:'images/thum8.jpg', url:'http://www.google.com'},
    {id:9, txt:'아름다운 이네들은 봄이 차 계십니다.', imgurl:'images/bimg8.jpg', thum:'images/thum8.jpg', url:'http://www.google.com'},
    {id:10, txt:'당신은 이런 강아지', imgurl:'images/bimg9.jpg', thum:'images/thum9.jpg', url:'http://www.google.com'},
    {id:11, txt:'마디씩 하나에 듯합니다. ', imgurl:'images/bimg10.jpg', thum:'images/thum10.jpg', url:'http://www.google.com'},
    {id:12, txt:'별 별빛이 쓸쓸함과 있습니다.', imgurl:'images/bimg11.jpg', thum:'images/thum11.jpg', url:'http://www.google.com'},
    {id:13, txt:'헤일 마디씩 언덕 헤는 봅니다. ', imgurl:'images/bimg12.jpg', thum:'images/thum12.jpg', url:'http://www.google.com'},
    {id:14, txt:'프랑시스 하나에 패', imgurl:'images/bimg13.jpg', thum:'images/thum13.jpg', url:'http://www.google.com'},
    {id:15, txt:'밤이 때 추억과 까닭입니다.', imgurl:'images/bimg14.jpg', thum:'images/thum14.jpg', url:'http://www.google.com'},
    {id:16, txt:'남은 이 하나에 멀리 걱정', imgurl:'images/bimg15.jpg', thum:'images/thum15.jpg', url:'http://www.google.com'},
    {id:17, txt:'책상을 못 별 내린 별이 거외다.', imgurl:'images/bimg16.jpg', thum:'images/thum16.jpg', url:'http://www.google.com'},
];
let li = document.querySelectorAll('.wrap .right ul li');
let pic = document.querySelector('.wrap .left img');
let current = document.querySelector('.wrap .right p .current');
let total = document.querySelector('.wrap .right p .total');
let txt = document.querySelector('.wrap .left span');
let cnt = 0;
let size = li.length;

total.textContent = size;
current.textContent = data[cnt].id;
txt.textContent = data[cnt].txt;

li.forEach((item, idx) => {
    item.addEventListener('click',e=>{
        pic.setAttribute('src', data[idx].imgurl);
        pic.animate([
            {opacity : 0},
            {opacity : 1},
        ],400);
        current.textContent = data[idx].id;
        txt.textContent = data[idx].txt;
        li.forEach(liItem =>{
            liItem.classList.remove('on');
        })
        e.currentTarget.classList.add('on');
        cnt = idx;
    });
});
pic.addEventListener('click',e=>{
    window.open(data[cnt].url);
})