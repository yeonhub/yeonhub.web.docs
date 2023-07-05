import { Outlet } from "react-router-dom";

const CeoLayout = () => {
    return (
        <div style={{background:'yellow', padding:20 }}>
            <h2> CEO 메세지 내용 </h2>
            {/* 화면에 들어올 영역 */}

            <Outlet />
        </div>
    );
};

export default CeoLayout;