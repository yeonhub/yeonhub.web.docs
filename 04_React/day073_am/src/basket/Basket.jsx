import React, { useRef, useState, useEffect } from 'react';
import './Basket.scss'
import '../assets/css/reset.css'
import BasketAdd from './BasketAdd';
import BasketList from './BasketList';
import BasketMod from './BasketMod';



const Basket = () => {
    const [data, setData] = useState([])
    const titleRef = useRef('')
    const [book, setBook] = useState(
        { title: '', author: '', bookcode: '' }
    )
    const no = useRef(1)
    const [isMsg, setIsMsg] = useState(false)
    const [isAddDel, setIsAddDel] = useState(false)
    const [isMod, setMod] = useState(false)
    const [msg, setMsg] = useState('')
    const [edit, setEdit] = useState({})

    const onSubmit = (e) => {
        e.preventDefault()
        if (!book.title || !book.author || !book.bookcode) {
            setIsMsg(true)
            setIsAddDel(false)
            setMsg('값을 입력하세요')
        } else {

            book.id = no.current++
            setData(
                [...data, book]
            )
            setBook(
                { title: '', author: '', bookcode: '' }
            )
            setIsMsg(true)
            setIsAddDel(true)
            setMsg('도서 추가 완료')
            titleRef.current.focus()
        }
    }
    const changeInput = (e) => {
        const { name, value } = e.target
        setBook(
            { ...book, [name]: value }
        )
    }
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
        setIsMsg(true)
        setIsAddDel(true)
        setMsg('도서 삭제 완료')
    }
    const onMod = (item) => {
        setMod(true)
        setEdit(item)
    }

    const onUpdate=(book)=>{
        setData(data.map(item => item.id === book.id ? book : item))
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMsg(false)
            setIsAddDel(false)
        }, 2000);
        return () => {
            clearTimeout(timer)
        }
    }, [isMsg])
    return (
        <div>
            <section className='main-book'>
                <h2>북카페 도서 관리</h2>
                <div className="inner">
                    <div className="book-input">
                        {
                            isMod ? <BasketMod edit={edit} onUpdate={onUpdate}/> : <BasketAdd onSubmit={onSubmit} book={book} changeInput={changeInput} titleRef={titleRef} />
                        }

                    </div>
                    <div className="book-list">
                        <BasketList data={data} onDel={onDel} onMod={onMod} />
                    </div>
                </div>
                {
                    isMsg ? <div className={`show ${isAddDel ? 'on' : 'off'}`}> {msg} </div> : <div></div>
                }
            </section>
        </div>
    );
};

export default Basket;