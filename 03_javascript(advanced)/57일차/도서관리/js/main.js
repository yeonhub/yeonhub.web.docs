const get = (target) => {
    return document.querySelector(target)
};
const getAll = (target) => {
    return document.querySelectorAll(target)
};

let $addBtn = get('.btn');
let $title = get('#title');
let $author = get('#author');
let $bookcode = get('#bookcode');
let $tbody = get('.book-tbody');
let $delet = getAll('.delete');
let $tr = getAll('.book-tbody tr');
let $inputs = getAll('.input');

class Add {
    constructor(title = '', author = '', bookcode = '') {
        this.title = title
        this.author = author
        this.bookcode = bookcode
    }
    init() {
        $addBtn.addEventListener('click', e => {
            e.preventDefault();
            for (let i = 0; i < $inputs.length; i++) {
                if (!$inputs[i].value) {
                    $inputs[i].focus();
                    break;
                }
            }
            if (title.value && author.value && bookcode.value) {
                this.add();
                $delet.forEach((element, idx) => {
                    element.addEventListener('click', e => {
                        this.del(idx);
                    })
                });
            }
        })
    }
    add() {
        $tbody.innerHTML += `
        <tr>
        <td>${title.value}</td>
        <td>${author.value}</td>
        <td>${bookcode.value}</td>
        <td><button class="delete">X</button></td>
        </tr>
        `
        $delet = getAll('.delete');
        $tr = getAll('.book-tbody tr');
        this.reset();
    }
    del(idx) {
        $tr[idx].remove();
    }
    reset() {
        $title.value = ''
        $author.value = ''
        $bookcode.value = ''
        $title.focus()
    }
}
const add = new Add();
add.init();