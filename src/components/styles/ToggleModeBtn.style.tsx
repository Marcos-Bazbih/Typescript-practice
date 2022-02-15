import styled from "styled-components";

const StyledToggleModeBtn = styled.button`
    cursor: pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    right: 5vw;
    background: ${({ mode }:any) => mode.background};
    color: ${({ mode }:any) => mode.color};
    border: 2px solid ${({ mode }:any) => mode.color};
    border-radius:50%;
    padding:5px 10px;
    font-weight: 900;
    transition:0.2s ease-in-out;

    &:hover{
        background: ${({ mode }:any) => mode.color};
        color: ${({ mode }:any) => mode.background};
    }
`;

export default StyledToggleModeBtn;