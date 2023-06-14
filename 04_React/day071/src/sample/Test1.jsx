import React, { useState } from 'react';
import './style.scss'

const Test1 = () => {
    const [show, setShow] = useState(1)
    const onShow=(num)=>{
        setShow(num)
    }

    return (
        <div className='tabs'>
            <ul>
                <li onClick={()=>onShow(1)} className={show === 1 ? 'on':''}>엘아이</li>
                <li onClick={()=>onShow(2)} className={show === 2 ?'on':''}>엘아이</li>
                <li onClick={()=>onShow(3)} className={show === 3 && 'on'}>엘아이</li>
            </ul>
            <div className="con-box">
                <article className={show === 1 ? 'on':''}>
                    <h3>타이틀1</h3>
                    <p>설명</p>
                </article>
                <article className={show === 2 ? 'on':''}>
                    <h3>타이틀2</h3>
                    <p>설명</p>
                </article>
                <article className={show === 3 ? 'on':''}>
                    <h3>타이틀3</h3>
                    <p>설명</p>
                </article>
            </div>
        </div>
    );
};

export default Test1;