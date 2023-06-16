import React, { useEffect, useState } from 'react';

const EditUser = ({ edit, setIsShow, onUpdate }) => {
    const [user, setUser] = useState(edit)
    const { name, addr } = user

    useEffect(() => {
        setUser(edit)
    }, [edit])

    const changeInput = e => {
        const { name, value } = e.target
        setUser(
            {
                ...user,
                [name]: value
            }
        )
    }
    const onSubmit = e => {
        e.preventDefault()
        if (!name || !addr) return
        setIsShow(false)
        onUpdate(user)
    }
    return (
        <form onSubmit={onSubmit}>
            <h2>회원 수정</h2>
            <p>
                <label>이름</label>
                <input type="text" value={name} name="name" onChange={changeInput} />
            </p>
            <p>
                <label>주소</label>
                <input type="text" value={addr} name="addr" onChange={changeInput} />
            </p>
            <p>
                <button type='submit'>수정</button>
                <button onClick={()=>setIsShow(false)}>취소</button>
            </p>
        </form>
    );
};

export default EditUser;