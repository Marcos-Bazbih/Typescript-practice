import styled from "styled-components";

const StyledFooter = styled.footer`
    grid-area: footer;
    background: ${({ mode }:any) => mode.background};
    color: ${({ mode }:any) => mode.color};
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid ${({ mode }:any) => mode.color};
    font-size: 2rem;
    font-weight: 900;
`;

export default StyledFooter;