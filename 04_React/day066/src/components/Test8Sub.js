import React from 'react';
import PropTypes from 'prop-types';

const Test8Sub = ({ name, age, addr, tel, color, bgColor, done }) => {
    // const { name, age, addr, tel, color, bgColor, done} = props
    return (
        <div style={{ width: 400, padding: 15, margin: "30px auto", border: `5px solid ${color}`, backgroundColor: bgColor }}>
            <ul>
                <li>이름 : {name}</li>
                <li>나이 : {age}</li>
                <li>주소 : {addr}</li>
                <li>연락처 : {tel}</li>
                <li>색 : {color}</li>
                <li>배경색 : {bgColor}</li>
                <li>동의 여부 : {done ? "동의" : "비동의"}</li>
            </ul>
        </div>
    );
};

// 유효성 검증
Test8Sub.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    addr: PropTypes.string,
    tel: PropTypes.string,
    done: PropTypes.bool,
    color: PropTypes.string,
    bgColor: PropTypes.string
};
Test8Sub.defaultProps = {
    name: "김",
    age: 5,
    addr: "서울특별시",
    tel: "010-0000-0000",
    done: false,
    color: "tomato",
    bgColor: "lightgreen",
};

export default Test8Sub;


/* 
    PropTypes는 전달받은 데이터의 유효성을 검증하기 위해서 다양한 유효성 검사기(Validator)를 내보냅니다. 아래 예시에서는 PropTypes.string을 사용하게 될 것입니다.

    import PropTypes from 'prop-types';

    자신컴포넌트.propTypes = {
        props명: PropTypes.string
    };

    // props의 초깃값을 정의합니다.
    자신컴포넌트.defaultProps = {
        props명: '기본값'
    };
*/