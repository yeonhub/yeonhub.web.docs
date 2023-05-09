let inp = document.querySelector('.txt');
let ckb = document.querySelector('.ckb');
let add = document.querySelector('.add');
let rem = document.querySelector('.rem');
let ul = document.querySelector('ul');
let li;
let txt = '';
let cnt = 0;

add.addEventListener('click', e => {
  txt = inp.value;
  inp.value = '';
  li = document.createElement('li');
  li.innerHTML = `<input type="checkbox" class="ckb_all"></input> <p class="todo">${txt}</p> <button class="rem_all">삭제</button>`;
  ul.append(li);
  inp.focus();

  let ckb_all = document.querySelectorAll('.ckb_all');
  ckb_all.forEach(element =>{
    element.addEventListener('change', e=>{
      if(element.checked){
        element.nextElementSibling.style.color = 'red'
        element.nextElementSibling.style.textDecoration = 'line-through'
      } else {
        element.nextElementSibling.style.color = 'black'
        element.nextElementSibling.style.textDecoration = 'none'
      }
    })
  })
  let key = cnt;
  cnt++;

  let rem_all = document.querySelectorAll('.rem_all');
  rem_all.forEach(element => {
    element.addEventListener('click', e => {
      e.currentTarget.parentElement.remove();
    })
  })
})