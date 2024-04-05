import Navbar from "../Pages/Navbar";
import { Outlet } from "react-router-dom"

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar />
            <Outlet></Outlet>
        </div>
    );
};

export default Root;