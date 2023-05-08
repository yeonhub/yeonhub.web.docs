const get = (target) => {
  return document.querySelector(target)
}
const getAll = (target) => {
  return document.querySelectorAll(target)
}
// 재할당 함수
const re = () => {
  $l_li = getAll('.left ul li');
  $r_li = getAll('.right ul li');
  $add = getAll('.left ul li .add');
  $del = getAll('.left ul li .del');
  $del2 = getAll('.right ul li .del2');
  $ori = getAll('.right ul li .ori');
}


let $l_ul = get('.left ul');
let $r_ul = get('.right ul');
let $l_li = getAll('.left ul li');
let $r_li = getAll('.right ul li');
let li = '';


let btn = getAll('button')

// left
let $add = getAll('.left ul li .add');
let $del = getAll('.left ul li .del');

// right
let $clean = get('.right .clean');
let $back = get('.right .back');
let $del2 = getAll('.right ul li .del2');
let $ori = getAll('.right ul li .ori');

// left del
$l_ul.addEventListener('click', e => {
  if (e.target.classList.contains('del')) {
    e.target.parentElement.remove();
  }
  re();
})

// left add
$add.forEach(element => {
  element.addEventListener('click', e => {
    $r_ul.append(e.target.parentElement)
    re();
    $r_li.forEach(element =>{
      element.lastElementChild.className = 'ori'
      element.lastElementChild.textContent = '원래';
      element.lastElementChild.previousElementSibling.className = 'del2'
      element.lastElementChild.previousElementSibling.innerHTML = '제거';
    })
    re();

    // button del2 이벤트
    $r_ul.addEventListener('click', e => {
      if (e.target.classList.contains('del2')) {
        e.target.parentElement.remove();
      }
      re();
    });
    re();
  })
});

// right clean
$clean.addEventListener('click', e => {
  for (let i = 0; i < $r_li.length; i++) {
    $r_li[i].remove();
  }
  re();
})

// right back
$back.addEventListener('click', e => {
  for (let i = 0; i < $r_li.length; i++) {
    $r_li[i].lastElementChild.className = 'del'
    $r_li[i].lastElementChild.innerHTML = '삭제';
    $r_li[i].lastElementChild.previousElementSibling.className = 'add'
    $r_li[i].lastElementChild.previousElementSibling.innerHTML = '담기';
    $l_ul.append($r_li[i]);
  }
  re();
  });

// right ori
$r_ul.addEventListener('click', e => {
  if (e.target.classList.contains('ori')) {
    console.log(e.target.parentElement);
    $l_ul.append(e.target.parentElement);
    re();
    $l_li.forEach(element =>{
      element.lastElementChild.className = 'del'
      element.lastElementChild.textContent = '삭제';
      element.lastElementChild.previousElementSibling.className = 'add'
      element.lastElementChild.previousElementSibling.innerHTML = '담기';
    })
  }
})