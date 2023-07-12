import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";


const NoticeDetail = () => {
  const { noticeID } = useParams()
  const { data } = useSelector(state => state.notice)
  const noticeItem = data.find(item => item.id === Number(noticeID))
  const { id, title, content, date } = noticeItem
  const navigete = useNavigate()

  return (
    <>
      <div className="inner">
        <h2>{title} </h2>
        <div className="notice-con">
          <p> {content} </p>
          <p> {date}</p>
        </div>
        <button onClick={()=>navigete('/notice')}>목록으로</button>
      </div>
    </>
  );
};

export default NoticeDetail;