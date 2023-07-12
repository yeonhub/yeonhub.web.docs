import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add, addSort, update } from '../store/modules/customerSlice'


const CustomerEdit = () => {
    const { current } = useSelector(state => state.customer)
    const [user, setUser] = useState({ name: '', title: '', content: '' })
    const { name, title, content, date } = user
    const navigate = useNavigate()
    const dispatch = useDispatch()

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
        if (!name) {
            alert('작성자를 입력하세요')
            return
        } else if (!title) {
            alert('제목을 입력하세요')
            return
        } else if (!content) {
            alert('내용을 입력하세요')
            return
        }
        navigate('/customer')
        dispatch(update(user))
    }

    return (
        <>
            <div className="inner">
                <h2> 고객문의 수정</h2>
                <form className="customer-add" onSubmit={onSubmit}>
                    <p>  <input type="text" placeholder="제목" name="title" value={title} onChange={changeInput} /></p>
                    <p>  <input type="text" placeholder="작성자" name="name" value={name} onChange={changeInput} /></p>
                    <p>
                        <textarea cols="100" rows="10" placeholder="문의하기" name="content" value={content} onChange={changeInput}></textarea></p>
                    <p>
                        <button onClick={() => navigate('/customer')}>목록으로</button>
                        <button onClick={onSubmit}>저장하기</button>
                        <button onClick={() => navigate('/customer')}>취소하기</button>
                    </p>
                </form>
            </div>
        </>
    );
};

export default CustomerEdit;