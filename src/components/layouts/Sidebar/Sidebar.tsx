import { useContext } from "react"; 
import { ModeContext } from "../../../contexts/ThemeContext";
import StyledSidebar from "../../styles/Sidebar.style";
import StyledSidebarLink from "../../styles/SidebarLink.style";

const Sidebar = () => {
    const { mode } = useContext(ModeContext);
    return (
        <StyledSidebar <any> mode={mode}>
            <StyledSidebarLink <any> mode={mode} to={"/"}>Home</StyledSidebarLink>
            <StyledSidebarLink <any> mode={mode} to={"/student"}>Student</StyledSidebarLink>
            <StyledSidebarLink <any> mode={mode} to={"/game"}>Game</StyledSidebarLink>
            <StyledSidebarLink <any> mode={mode} to={"/lotto"}>Lotto</StyledSidebarLink>
            <StyledSidebarLink <any> mode={mode} to={"/apartment"}>Apartment</StyledSidebarLink>
        </StyledSidebar>
    )
}
export default Sidebar;