import React, { useEffect, useState } from 'react';

const BasketMod = ({ edit,setMod,onUpdate }) => {
    const [book, setBook] = useState(edit)
    const { title, author, bookcode } = book

    useEffect(() => {
        setBook(edit)
    }, [edit])

    const changeInput = e => {
        const { name, value } = e.target
        setBook(
            {
                ...book,
                [name]: value
            }
        )
    }
    const onSubmit = e => {
        e.preventDefault()
        if (!name || !addr) return
        setMod(false)
        onUpdate(book)
    }
    return (
        <form className='book-form' onSubmit={onSubmit}>
            <p>
                <label>title</label>
                <input type="text" value={title} name='title' onChange={changeInput}placeholder="북 장르입력 (소설)" />
            </p>
            <p>
                <label>author</label>
                <input type="text" value={author} name='author' onChange={changeInput} placeholder="저자 입력 (임수정)" />
            </p>
            <p>
                <label>bookcode</label>
                <input type="text" value={bookcode} name='bookcode' onChange={changeInput} placeholder="책 코드 입력 (00001)" />
            </p>
            <p>

                <button className='btn' type='submit'>수정</button>
                <button className='btn' onClick={() => setMod(false)}>취소</button>


            </p>
        </form>
    );
};

export default BasketMod;