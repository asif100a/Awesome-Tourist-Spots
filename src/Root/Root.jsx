import { Outlet } from "react-router-dom";
import Navber from "../SharedPage/Navber/Navber";
import Footer from "../SharedPage/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navber />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;