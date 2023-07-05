const tbody = document.querySelector('.board .table-body');
const paging = document.querySelector('.board .paging');
const url = 'https://jsonplaceholder.typicode.com/posts';

let posts , postsPerPage = 10 , currentPage= 1
let firstPost , lastPost , postMod , pageNumber, totalPage 
let a ='';

const getData  = async()  => {
    const res = await fetch( url );
    const myJson = await res.json();
    
    posts  = myJson; 
    totalPage  = posts.length; 
    postMod = totalPage % postsPerPage;
    lastPost = currentPage * postsPerPage ;
    firstPost = lastPost - postsPerPage;
    pageNumber = Math.ceil( totalPage / postsPerPage )
   
    for( let i = 1; i <= pageNumber ; i++) {
        a += `<a>${i}</a>`
    }
    paging.innerHTML = a
    tableIn( 1 ) //1페이지 - 화면에 출력되는 개수 10개

    let aAll = document.querySelectorAll('.paging a')
    aAll[currentPage-1].classList.add('on')
    let old = 0; 
    aAll.forEach( (item, idx ) => {                
        item.addEventListener('click', e => {
            let ele  = e.currentTarget 
            ele.classList.add('on')
            aAll[old].classList.remove('on')                     
            tableIn( idx + 1 )
            old = idx
        })
    })
}//end getData

function tableIn( currentPage ) {
    console.log( currentPage )
    let row ='';

    for( let i = firstPost ; i < lastPost ; i++ ) {
        row += `<tr>
                <td> ${posts[i].id} </td>
                <td> ${posts[i].title} </td>
                <td> ${posts[i].body} </td>
            </tr>
        `
    }
    tbody.innerHTML = row; 
}

getData();
