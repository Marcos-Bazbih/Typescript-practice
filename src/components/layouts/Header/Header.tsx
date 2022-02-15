import StyledHeader from "../../styles/Header.style";
import { useContext } from "react";
import { ModeContext } from "../../../contexts/ThemeContext";
import StyledToggleModeBtn from "../../styles/ToggleModeBtn.style";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const Header = () => {
    const { mode, ToggleTheme } = useContext(ModeContext);

    return (
        <StyledHeader <any> mode={mode}>
            <h1>Header</h1>
            <StyledToggleModeBtn <any> mode={mode} onClick={ToggleTheme}>
                {
                    mode.isDark ? (
                        <ModeNightIcon style={{ "fontSize": "5rem" }} />
                    )
                        : <WbSunnyIcon style={{ "fontSize": "5rem" }} />
                }
            </StyledToggleModeBtn>
        </StyledHeader>
    )
}
export default Header;