; (() => {
    const get = target => document.querySelector(target);

    const $startBtn = get('.start');
    const $stopBtn = get('.stop');
    const $view = get('.view');
    const $output = get('.output');

    class StopTimer {
        constructor(obj = {}) {
            this.obj = obj
            this.timer = null
        }
        // 초기 함수 init(),
        // 1. 처음 실행되는 내용들
        // 2. 클릭 대상들
        init() {
            let { color, backgroundColor } = this.obj
            color = color || 'green'
            backgroundColor = backgroundColor || 'pink'
            $view.style.color = color
            $view.style.backgroundColor = backgroundColor
        }
    }
    start(){}
    stop(){}
    make(){}
    const obj = {
        color: 'tan',
        backgroundColor: 'yellow'
    }

    const stoptimer = new StopTimer(obj);
    stoptimer.init();
})()