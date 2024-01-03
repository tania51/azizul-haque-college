import { Outlet } from "react-router-dom";
import StickyNavbar from "../components/Shared/Navbar/StickyNavbar";


const Layout = () => {
    return (
        <div className="font-serif">
            <StickyNavbar></StickyNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;