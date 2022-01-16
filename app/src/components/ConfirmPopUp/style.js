import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: rgba(255,255,255,0.5);
`
export const Card = styled.div`
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    background: #ffff;
    border-radius: 8px;
    width: 80vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 12px;
    div {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
    }
    span {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 18px;
        @media(min-width: 768px){
            font-size: 24px;
        }
    }
    @media(min-width: 425px){
        width: 64vw;
    }

    @media(min-width: 600px){
        width: 52vw;
    }
    @media(min-width: 768px){
        width: 48vw;
    }
    @media(min-width: 856px){
        width: 38vw;
    }
    @media(min-width: 912px){
        width: 36vw;
    }
    @media(min-width: 1280px){
        width: 32vw;
    }
    @media(min-width: 1600px){
        width: 24vw;
    }
`
export const ConfirmButton = styled.button`
    border: 1px solid #E47171;
    color: #E47171;
    background: #ffff;
    padding: 12px;
    border-radius: 4px;
    &:hover {
        border: 1px solid #E47171;
        color: #ffff;
        background: #E47171;
        cursor: pointer;
    }
    @media(min-width: 768px){
        padding: 16px;
        
    }
`
export const CancelButton = styled.button`
    padding: 12px;
    color: #ffff;
    border: none;
    border-radius: 4px;
    background: #7ADEE4;
    padding: 12px;
    &:hover {
        cursor: pointer;
    }
    @media(min-width: 768px){
        padding: 16px;
    }
`