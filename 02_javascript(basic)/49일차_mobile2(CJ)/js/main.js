(() => {
    mainInit();
    // subInit();
    // news_banner();
})();

function get(target) {
    return document.querySelector(target);
};
function getAll(target) {
    return document.querySelectorAll(target);
};

function mainInit() {
    get();
    getAll();
    // common(); // 공통 내용
    nav_menu(); // 메뉴
    // main_visual(); // 비주얼
    // news_banner(); // 뉴스영역
};
function nav_menu() {
    let $menuBtn = get('#header .all-menu');
    let $nav = get('#nav')
    let $menuClose = get('#nav .close')
    let $bg = get('.bg')
    let $body = get('body')
    let $menuList = getAll('#nav .gnb>li')
    let $menuListUl = getAll('#nav .gnb li ul')


    $menuBtn.addEventListener('click', e=>{
        $nav.classList.add('on')
        $bg.classList.add('on')
        
    })
    $menuClose.addEventListener('click', e=>{
        $nav.classList.remove('on')
        $bg.classList.remove('on')
    })
    $bg.addEventListener('click', e=>{
        $nav.classList.remove('on')
        $bg.classList.remove('on')
    })

    $menuList.forEach((item, idx) =>{
        item.addEventListener('click', e=>{
            $menuListUl.forEach(element => {
                element.classList.remove('on')
            });
            $menuListUl[idx].classList.add('on')
        })
    })


}






