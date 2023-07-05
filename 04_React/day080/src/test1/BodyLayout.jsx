import { Outlet } from "react-router-dom";

const BodyLayout = () => {
    return (
        <div style={{background:'skyblue', padding:20 }}>
        <h2> body  </h2>     

        <Outlet />
    </div>
    );
};

export default BodyLayout;