(() => {
    const get = (target) => document.querySelector(target);
    const getAll = (target) => document.querySelectorAll(target);
    // 기본경로
    const $btn = get(".btn");
    const $title = get("#title");
    const $author = get("#author");
    const $bookcode = get("#bookcode");
    const $tbody = get(".book-tbody");
    const $form = get("form");
    //클래스
    class Book {
      constructor(title, author, bookcode) {
        this.title = title;
        this.author = author;
        this.bookcode = bookcode;
      }
    }
    class BookUI {
      //추가
      add(item) {
        if (!item.title || !item.author || !item.bookcode) return;
        const tr = document.createElement("tr");
        tr.innerHTML = `
                      <td>${item.title}</td>
                      <td>${item.author}</td>
                      <td>${item.bookcode} </td>
                      <td><button class="delete">X</button></td>
              `;
        $tbody.append(tr);
        this.reset();
      }
      //삭제
      del(target) {
        if (target.classList.contains("delete")) {
          target.parentElement.parentElement.remove();
        }
      }
      //텍스트지우기
      reset() {
        $title.value = "";
        $author.value = "";
        $bookcode.value = "";
        $title.focus();
      }
    }
    $form.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = $title.value;
      const author = $author.value;
      const bookcode = $bookcode.value;
      const book = new Book(title, author, bookcode);
      const bookUI = new BookUI();
      if (!title || !author || !bookcode) {
        alert("값입력");
      } else {
        bookUI.add(book);
        bookUI.reset();
      }
    });
    $tbody.addEventListener("click", (e) => {
      const bookUI = new BookUI();
      bookUI.del(e.target);
    });
  })();