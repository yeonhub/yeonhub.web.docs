import React, { Fragment } from 'react';

const Test1 = () => {
    return (
        <>
            <h2>JSX 영역</h2>
            <h3>
                태그는 열고 닫기

                빈태그(input, img, br, hr...) 맨 뒤에 / 로 닫기
            </h3>
            <br />
            <hr />
            <img></img>
            <p>
                return 안에 첫 태그가 한 줄 이상이면 div, main, section, article 등 태그로 묶어야 한다.

                Fragment : 빈 영역
                React.Fragment
            </p>
        </>
    );
};

export default Test1;