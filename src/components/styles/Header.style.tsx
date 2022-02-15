import styled from "styled-components";

const StyledHeader = styled.header`
    grid-area: header;
    background: ${({ mode }:any) => mode.background};
    color: ${({ mode }:any) => mode.color};
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid ${({ mode }:any) => mode.color};
    font-size: 2rem;
    font-weight: 900;
`;

export default StyledHeader;