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
    let $menuList = getAll('#nav .gnb>li')
    let $menuListUl = getAll('#nav .gnb li ul')
    let $newsTab = getAll('.main .news .news-tab li')
    let $newsBox = getAll('.main .news .box')
    let $brandLogoUl = get('.main .brand .brand-logo ul')
    let $brandLogoLi = get('.main .brand .brand-logo ul li')
    let $familyBtn = get('.site .familysite .title i')
    let $familyList = get('.site .familysite ul')
    let $goTop = get('.top')


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

    let step = 1;
    let tx = 0;
    let size = parseInt(getComputedStyle($brandLogoLi).width) * -7;
    let leftx;

    setInterval(() => {
        leftx= parseInt(getComputedStyle($brandLogoUl).left);
        if(leftx<= size){
            $brandLogoUl.style.left = '-4px';
            tx = -4;
        } else {
            tx -= step;
            $brandLogoUl.style.left = `${tx}px`
        }
    }, 10);


    $menuList.forEach((item, idx) =>{
        item.addEventListener('click', e=>{
            $menuListUl.forEach(element => {
                element.classList.remove('on')
            });
            $menuListUl[idx].classList.add('on')
        })
    })

    $newsTab.forEach((news, idx)=>{
        news.addEventListener('click', e=>{
            $newsTab.forEach(item=>{
                item.classList.remove('on');    
            })
            e.currentTarget.classList.add('on');
            $newsBox.forEach(item=>{
                item.classList.remove('on');    
            })
            $newsBox[idx].classList.add('on');
        })
    })

    let familysite = false;
    $familyBtn.addEventListener('click',e=>{
        if(!familysite){
            $familyList.classList.add('on')
            $familyBtn.className = 'xi-angle-up';
            familysite = !familysite
        } else {
            $familyList.classList.remove('on')
            $familyBtn.className = 'xi-angle-down';
            familysite = !familysite
        }
    }) 

    $goTop.addEventListener('click',e=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    })

}