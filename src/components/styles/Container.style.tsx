import styled from "styled-components";

const StyledContainer = styled.section`
    grid-area: main;
    background: ${({ mode }:any) => mode.background};
    color: ${({ mode }:any) => mode.color};
    border-left: 2px solid ${({ mode }:any) => mode.color};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default StyledContainer;