import React from 'react';

const EditUser = () => {
    return (

        <form>
            <h2>회원 수정</h2>
            <p>
                <label>이름</label>
                <input type="text" />
            </p>
            <p>
                <label>주소</label>
                <input type="text" />
            </p>
            <p>
                <button>회원수정</button>
            </p>
        </form>

    );
};

export default EditUser;