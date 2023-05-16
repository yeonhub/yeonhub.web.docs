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
    common(); // 공통 내용
    nav_menu(); // 메뉴
    main_visual(); // 비주얼
    news_banner(); // 뉴스영역
};
function nav_menu() {
    let $allmenu = get('#header .all-menu');
    let $nav = get('#nav');
    let $bg = get('.bg');
    let $close = get('#nav .close');
    let $menua = getAll('#nav .gnb > li > a');
    let $menual = getAll('#nav .gnb > li > ul');

    $allmenu.addEventListener('click', e => {
        $nav.classList.add('on');
        $bg.classList.add('on');
    })

    $close.addEventListener('click', e => {
        $nav.classList.remove('on');
        $bg.classList.remove('on');
    })

    $bg.addEventListener('click', e => {
        $nav.classList.remove('on');
        $bg.classList.remove('on');
    })

    $menua.forEach((element, idx) => {
        element.addEventListener('click', e => {
            if ($menual[idx].classList.contains('on')) {
                $menual[idx].classList.remove('on');
            } else {
                $menual[idx].classList.add('on');

            }
        })
    })



};
function common() {

};
function main_visual() {
    var swiper = new Swiper("#mainVisual", {
        pagination: {
            el: ".swiper-pagination",
        },
    });
};
function news_banner() {
    var swiper = new Swiper(".news-banner", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
};