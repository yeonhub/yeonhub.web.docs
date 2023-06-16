import React from 'react';

const BasketAdd = ({ onSubmit, book, changeInput, titleRef }) => {
    const { title, author, bookcode } = book
    return (
        <form className='book-form' onSubmit={onSubmit}>
            <p>
                <label>title</label>
                <input type="text" value={title} name='title' onChange={changeInput} ref={titleRef} placeholder="북 장르입력 (소설)" />
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

                <button className='btn' type='submit'>추가</button>


            </p>
        </form>
    );
};

export default BasketAdd;