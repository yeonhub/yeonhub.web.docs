import React from 'react';
import cat0 from '../assets/iamges/2/cat0.jpg';
import cat1 from '../assets/iamges/2/cat1.jpg';

const Test9 = () => {
    return (
        <div>
            <h2>이미지 삽입</h2>
            <p>
                src에 있는 이미지는 경로로 바로 불러올 수 없음
                import 참조변수 from './이미지경로'
                {/* img src={참조변수} */}
            </p>
            <img src={cat0} alt="" />
            <img src={cat1} alt="" />
            <hr/>
            {/* public안에 이미지 */}
            <img src='./images/1/img0.jpg'/>
        </div>
    );
};

export default Test9;