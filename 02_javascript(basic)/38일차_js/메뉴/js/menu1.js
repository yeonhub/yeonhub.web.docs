const get =(target)=>{
  return document.querySelector(target);
}
const getAll =(target)=>{
  return document.querySelectorAll(target);
}

let $gnbli = getAll('#header .nav > .gnb > li');
let $subli = getAll('#header .nav .gnb li ul');
let $header = get('#header');

// li에 마우스 올리면 자식 중 두번째에 on 붙이기

$gnbli.forEach(item => {
  item.addEventListener('mouseenter', e=>{
    $subli.forEach(subItem=>{
      subItem.classList.remove('on');
    })
    e.currentTarget.children[1].classList.add('on')
  })  
});
$header.addEventListener('mouseleave', e=>{
  $subli.forEach(subItem=>{
    subItem.classList.remove('on');
  })
})