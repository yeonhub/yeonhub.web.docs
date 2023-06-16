const CartForm = ({ cart, onSubmit, changeInput, isEdit, textRef }) => {
    const { text, price, amount } = cart

    return (
        <div className="box con1">
            <form onSubmit={onSubmit}>
                <p>
                    <label htmlFor="">품목</label>
                    <input type="text" value={text} name="text" onChange={changeInput} ref={textRef}/>
                </p>
                <p>
                    <label htmlFor="">가격</label>
                    <input type="text" value={price} name="price" onChange={changeInput} />
                </p>
                <p>
                    <label htmlFor="">수량</label>
                    <input type="number" value={amount} name="amount" onChange={changeInput} />
                </p>
                <p>
                    <button type="submit">
                        {
                            isEdit ? "수정" : "등록"
                        }
                    </button>
                </p>
            </form>
        </div>
    );
};

export default CartForm;