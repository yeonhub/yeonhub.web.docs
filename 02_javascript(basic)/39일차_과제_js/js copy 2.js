const get = (target) => {
  return document.querySelector(target)
}
const getAll = (target) => {
  return document.querySelectorAll(target)
}

const re=() =>{
  l_li = getAll('.left ul li');
  r_li = getAll('.right ul li');
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
let ori = getAll('.right ul li .ori');

// left del
del.forEach(element => {
  element.addEventListener('click', e => {
    e.currentTarget.parentElement.remove();
  })
});

// left add
add.forEach(element => {
  element.addEventListener('click', e => {

    // li 추가 및 내용 넣기
    li = document.createElement('li');
    li.innerHTML = (e.currentTarget.parentElement.innerHTML)
    e.currentTarget.parentElement.remove();

    // button 이름, 클래스 변경
    li.lastElementChild.className = 'ori'
    li.lastElementChild.innerHTML = '원래';
    li.lastElementChild.previousElementSibling.className = 'del2'
    li.lastElementChild.previousElementSibling.innerHTML = '제거';

    // right ul에 li 추가
    r_ul.append(li);
    
    re();

    // button del2 이벤트
    del2.forEach(element => {
      element.addEventListener('click', e => {
        e.currentTarget.parentElement.remove();
      })
    })

    re();

    // button ori 이벤트
    ori.forEach(element => {
      element.addEventListener('click', e => {
        // add_arr에 담기
        let add_arr2 = [];
        add_arr2.push(e.currentTarget.parentElement.innerHTML)
        console.log(add_arr2);
        e.currentTarget.parentElement.remove();
    
        // li 추가 및 내용 넣기
        li = document.createElement('li');
        li.innerHTML = add_arr2;
    
        // button 이름, 클래스 변경
        li.lastElementChild.className = 'del'
        li.lastElementChild.innerHTML = '삭제';
        li.lastElementChild.previousElementSibling.className = 'add'
        li.lastElementChild.previousElementSibling.innerHTML = '담기';
    
        // left ul에 li 추가
        l_ul.append(li);
        
        re();
      })
    })
    
  })
});



// right clean
clean.addEventListener('click', e => {
  r_li.remove();
})