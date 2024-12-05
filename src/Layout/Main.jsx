import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="w-11/12 mx-auto">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;