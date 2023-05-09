const get = (target) => {
  return document.querySelector(target);
}
const getAll = (target) => {
  return document.querySelectorAll(target);
}

let $gnbli = getAll('#header .nav > .gnb > li');
let $sub = getAll('#header .nav .gnb li .sub');
let $header = get('#header');

// li에 마우스 올리면 자식 중 두번째에 on 붙이기

$gnbli.forEach(item => {
  item.addEventListener('mouseenter', e => {
      $sub.forEach(subItem =>{
      subItem.classList.remove('on)');
    })
    $header.classList.add('on');
    e.currentTarget.children[1].classList.add('on');
  })
})
$header.addEventListener('mouseleave', e => {
    $header.classList.remove('on');
  })