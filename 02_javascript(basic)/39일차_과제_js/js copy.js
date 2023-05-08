const get = (target) => {
  return document.querySelector(target)
}
const getAll = (target) => {
  return document.querySelectorAll(target)
}

let l_ul = get('.left ul');
let r_ul = get('.right ul');
let l_li = getAll('.left ul li');
let r_li = getAll('.right ul li');
let li = '';

// left
let add = getAll('.left ul li .add');
let del = getAll('.left ul li .del');

// right
let clean = get('.right .clean');
let back = get('.right .back');
let del2 = getAll('.right ul li .del2');

// left del
del.forEach(element => {
  element.addEventListener('click', e => {
    e.currentTarget.parentElement.remove();
  })
});

// left add
add.forEach(element => {
  element.addEventListener('click', e => {

    // add_arr에 담기
    let add_arr = [];
    add_arr.push(e.currentTarget.parentElement.innerHTML)
    e.currentTarget.parentElement.remove();

    // li 추가 및 내용 넣기
    li = document.createElement('li');
    li.innerHTML = add_arr;

    // button 이름, 클래스 변경
    li.lastElementChild.className = 'ori'
    li.lastElementChild.innerHTML = '원래';
    li.lastElementChild.previousElementSibling.className = 'del2'
    li.lastElementChild.previousElementSibling.innerHTML = '제거';

    // right ul에 li 추가
    r_ul.append(li);

    l_ul = get('.left ul');
    r_ul = get('.right ul');
    l_li = getAll('.left ul li');
    r_li = getAll('.right ul li');
    li = '';
    add = getAll('.left ul li .add');
    del = getAll('.left ul li .del');
    clean = get('.right .clean');
    back = get('.right .back');
    del2 = getAll('.right ul li .del2');

    // button del2 선언, 이벤트
    del2.forEach(element => {
      element.addEventListener('click', e => {
        e.currentTarget.parentElement.remove();
      })
    });

    l_ul = get('.left ul');
    r_ul = get('.right ul');
    l_li = getAll('.left ul li');
    r_li = getAll('.right ul li');
    li = '';
    add = getAll('.left ul li .add');
    del = getAll('.left ul li .del');
    clean = get('.right .clean');
    back = get('.right .back');
    del2 = getAll('.right ul li .del2');

  })
});

setInterval(()=>{
},1000)

// right clean
clean.addEventListener('click', e => {
  for(let i=0; i<r_li.length; i++){
    r_li[i].remove();
  }
})


// button ori 선언, 이벤트
let ori = getAll('.right ul li .ori');
// console.log(ori);
ori.forEach(element => {
  element.addEventListener('click', e => {
    // console.log(e.currentTarget);
    // add_arr에 담기
    let add_arr2 = [];
    add_arr2.push(e.currentTarget.parentElement.innerHTML)
    console.log(add_arr2);
    e.currentTarget.parentElement.remove();

    // li 추가 및 내용 넣기
    li = document.createElement('li');
    // console.log(li2);
    li.innerHTML = add_arr2;

    // button 이름, 클래스 변경
    li.lastElementChild.className = 'del'
    li.lastElementChild.innerHTML = '삭제';
    li.lastElementChild.previousElementSibling.className = 'add'
    li.lastElementChild.previousElementSibling.innerHTML = '담기';

    // left ul에 li 추가
    l_ul.append(li);
  })
})
