
import { useSelector } from 'react-redux';
import './NoticeList.css'
import NoticeItem from './NoticeItem';

const NoticeList = () => {
    const { data } = useSelector(state => state.notice)

    return (
        <table className="noticeTable">
            <caption>게시판</caption>
            <colgroup>
                <col className="num" />
                <col className="title" />
                <col className="date" />
            </colgroup>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성일</th>
                </tr>
            </thead>
            <tbody>
                {
                    [...data]
                        .sort((a, b) => b.id - a.id)
                        .map(item => <NoticeItem key={item.id} item={item} />)
                }
            </tbody>
        </table>
    );
};

export default NoticeList;