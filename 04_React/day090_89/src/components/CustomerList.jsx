import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomerItem from "./CustomerItem";

const CustomerLIst = () => {
    const { data } = useSelector(state => state.customer)
    const navigate = useNavigate()

    return (
        <>
            <table className="customerTable">
                <caption>게시판</caption>
                <colgroup>
                    <col className="num" />
                    <col className="title" />
                    <col className="name" />
                    <col className="date" />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        [...data]
                            .sort((a, b) => b.id - a.id)
                            .map(item => <CustomerItem key={item.id} item={item} />)
                    }
                </tbody>
            </table>
            <p><button onClick={() => navigate('/customer/customeradd')}>글 작성 </button></p>
        </>
    );
};

export default CustomerLIst;