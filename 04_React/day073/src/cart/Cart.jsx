import { useRef, useState } from 'react';
import CartForm from './CartForm';
import CartList from './CartList';

const Cart = () => {
    const [data, setData] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const no = useRef(1)
    const textRef = useRef('')

    const [cart, setCart] = useState(
        { text: '', price: '', amount: '' }
    )
    const changeInput = e => {
        const { name, value } = e.target
        setCart(
            { ...cart, [name]: value }
        )
    }
    const onSubmit = e => {
        e.preventDefault()
        if (!cart.text && cart.amount < 1) return
        if (isEdit) {
            cart.total = Number(cart.price * cart.amount)
            const newData = data.map(item => item.id === cart.id ? { ...item, ...cart } : item)
            setData(newData)
            setCart(
                { text: '', price: '', amount: '' }
            )
            setIsEdit(false)
            textRef.current.focus()
        } else {
            cart.id = no.current++
            cart.total = Number(cart.price * cart.amount)
            setData(
                [...data, cart]
            )
            setCart(
                { text: '', price: '', amount: '' }
            )
            textRef.current.focus()
        }
    }
    const onDel = id => {
        setData(data.filter(item => item.id !== id))
    }
    const onDelAll = () => {
        setData([])
    }
    const onEdit = (item) => {
        setIsEdit(true)
        setCart(item)
    }
    return (
        <>
            <div className="con-box">
                <CartForm cart={cart} onSubmit={onSubmit} changeInput={changeInput} isEdit={isEdit} textRef={textRef} />
                <CartList data={data} onDel={onDel} onDelAll={onDelAll} onEdit={onEdit} />
            </div>
        </>
    );
};

export default Cart;