import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <Link className="sidebar-link" to={"/"}>Home</Link>
            <Link className="sidebar-link" to={"/student"}>Student</Link>
            <Link className="sidebar-link" to={"/game"}>Game</Link>
        </nav>
    )
}
export default Sidebar;