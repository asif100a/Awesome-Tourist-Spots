import { Outlet } from "react-router-dom";
import Navber from "../SharedPage/Navber/Navber";
import Footer from "../SharedPage/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navber />
            <div className="max-w-[95%] md:max-w-[80%] mx-auto pt-8 xl:pt-[48px]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;