import { useContext } from "react";
import { ModeContext } from "../../../contexts/ThemeContext";
import StyledSidebar from "../../styles/Sidebar.style";
import StyledSidebarLink from "../../styles/SidebarLink.style";
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';

const Sidebar = () => {
    const { mode } = useContext(ModeContext);
    return (
        <StyledSidebar <any> mode={mode}>
            <StyledSidebarLink <any> mode={mode} to={"/"}>
                <HomeIcon style={{ "fontSize": "5rem" }} />
            </StyledSidebarLink>
            <StyledSidebarLink <any> mode={mode} to={"/student"}>
                <PersonIcon style={{ "fontSize": "5rem" }} />
            </StyledSidebarLink>
            <StyledSidebarLink <any> mode={mode} to={"/game"}>
                <VideogameAssetIcon style={{ "fontSize": "5rem" }} />
            </StyledSidebarLink>
            <StyledSidebarLink <any> mode={mode} to={"/lotto"}>
                <MonetizationOnIcon style={{ "fontSize": "5rem" }} />
            </StyledSidebarLink>
            <StyledSidebarLink <any> mode={mode} to={"/apartment"}>
                <ApartmentIcon style={{ "fontSize": "5rem" }} />
            </StyledSidebarLink>
        </StyledSidebar>
    )
}
export default Sidebar;