import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <div className="">
                <Header></Header>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;