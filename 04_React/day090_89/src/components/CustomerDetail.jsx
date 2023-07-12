import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { remove } from "../store/modules/customerSlice";


const CustomerDetail = () => {
    const { customerID } = useParams()
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.customer)
    const customerItem = data.find(item => item.id === Number(customerID))
    const { id, title, name, content, date } = customerItem
    const navigate = useNavigate()

    const onDel = id => {
        dispatch(remove(id))
        navigate('/customer')
    }
    const onEdit = (customerItem) => {
        dispatch(edit(customerItem))
        navigate('/customer/customeredit')
    }


    return (
        <div className="inner">
            <h2> {id}번 문의 </h2>
            <div className="notice-con">
                <p> {title} </p>
                <p> {name} </p>
                <p> {content} </p>
                <p> {date}</p>
            </div>

            <button onClick={() => navigate('/customer')}>목록으로</button>
            <button onClick={() => onEdit(customerItem)}>수정하기</button>
            <button onClick={() => onDel(id)}>삭제하기</button>
        </div>
    );
};

export default CustomerDetail;