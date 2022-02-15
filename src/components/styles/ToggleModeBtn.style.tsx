import styled from "styled-components";

const StyledToggleModeBtn = styled.button`
    cursor: pointer;
    position:absolute;
    right: 5vw;
    background: ${({ mode }:any) => mode.background};
    color: ${({ mode }:any) => mode.color};
    border: 2px solid ${({ mode }:any) => mode.color};
    font-size: 2rem;
    padding:10px;
    font-weight: 900;
    transition:0.2s ease-in-out;

    &:hover{
        background: ${({ mode }:any) => mode.color};
        color: ${({ mode }:any) => mode.background};
    }
`;

export default StyledToggleModeBtn;