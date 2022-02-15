import StyledHeader from "../../styles/Header.style";
import { useContext } from "react"; 
import { ModeContext } from "../../../contexts/ThemeContext";
import StyledToggleModeBtn from "../../styles/ToggleModeBtn.style";

const Header = () => {
    const { mode, ToggleTheme } = useContext(ModeContext);

    return(
        <StyledHeader <any> mode={mode}>
            <h1>Header</h1>
            <StyledToggleModeBtn <any> mode={mode} onClick={ToggleTheme}>Dark Mode</StyledToggleModeBtn>
        </StyledHeader>
    )
}
export default Header;