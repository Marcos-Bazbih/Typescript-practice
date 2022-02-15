import StyledFooter from "../../styles/Footer.style";
import { useContext } from "react";
import { ModeContext } from "../../../contexts/ThemeContext";

const Footer = () => {
    const { mode } = useContext(ModeContext);

    return (
        <StyledFooter <any> mode={mode}>
            <h1>Footer</h1>
        </StyledFooter>
    )
}
export default Footer;