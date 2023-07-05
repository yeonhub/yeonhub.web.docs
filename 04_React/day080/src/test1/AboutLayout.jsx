import { Outlet } from "react-router-dom";

const AboutLayout = () => {
    return (
        <div style={{background:'hotpink', padding:20 }}>
            <h2> AboutLayout 메세지 내용 </h2>
          

            <Outlet />
        </div>
    );
};

export default AboutLayout;
 