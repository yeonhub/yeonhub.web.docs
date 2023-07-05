import React from 'react';
import { Link } from 'react-router-dom';

const EditUser = () => {
    return (
        <>
            <h2>과목을 변경합니다.</h2>
            <form style={{ padding: "20px 0" }}>
                <label htmlFor="">내용 : </label>
                <input type="text" />
                <button type='submit'>수정</button>
                <b><Link to="/">취소</Link></b>
            </form>
        </>
    );
};

export default EditUser;