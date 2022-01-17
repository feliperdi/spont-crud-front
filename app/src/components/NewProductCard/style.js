import styled, { keyframes } from "styled-components";

const moveAnimation = keyframes`
    0% {
        transform: translate(-100vw);
    } 
    100% {
        transform: translate(0);
    }
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Background = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    background-color: rgba(255,255,255,0.5);
    width: 100vw;
    height: 100%;
    overflow-y: auto;
    right: 0;
    top: 0;
    z-index: 1;
    position: absolute;
    @media(min-width: 768px){
        align-items: center;
    }
`
export const Card = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin-top: 12px;
    background: #ffffff;
    height: fit-content;
    width: fit-content;
    border-radius: 8px;
    padding: 24px;
    box-sizing: border-box;
    z-index: 2;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    animation: ${moveAnimation};
    animation-duration:0.1s;
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4vh;
    width: 100%;    
`
export const Title = styled.p`
    font-size: 24px;
    margin: 4px;
    @media(min-width: 768px) {
        font-size: 32px;
    }
`
export const CloseCard = styled.button`
    border: none;
    background: none;
    margin-top: 4px;
    img {
        height: 28px;
        width: 28px;
        @media(min-width: 768px) {
            height: 42px;
            width: 42px;
        }
    }
    &:hover {
        cursor: pointer;
    }
`
export const Content = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    margin-top: 18px;
    flex-flow: row wrap;
`


export const UploadButton = styled.button`
    align-self: center;
    border: none;
    font-size: 14px;
    padding: 4px 12px;
    display: flex;
    color: #484848;
    background: #ffff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    align-items: center;
    border-radius: 4px;
    img {
        margin-left: 6px;
    }

`
