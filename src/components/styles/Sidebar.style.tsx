import styled from "styled-components";

const StyledSidebar = styled.nav`
    grid-area: sidebar;
    background: ${({ mode }:any) => mode.background};
    color: ${({ mode }:any) => mode.color};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    grid-area: sidebar;
`;

export default StyledSidebar;