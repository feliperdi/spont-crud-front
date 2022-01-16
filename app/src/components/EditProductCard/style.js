import styled, { keyframes } from 'styled-components';

const moveAnimation = keyframes`
    0% {
        transform: translate(0, -100vh);
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
    height: 100vh;
    width: 100vw;
    right: 0;
    top: 0;
    z-index: 1;
    position: absolute;
    @media(min-width: 1280px){
        margin-top: 32px;
    } 
`
export const Card = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin-top: 24px;
    background: #ffffff;
    height: fit-content;
    width: fit-content;
    border-radius: 8px;
    padding: 24px;
    box-sizing: border-box;
    z-index: 2;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    animation: ${moveAnimation};
    animation-duration: 0.1s;
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
    margin-right: 32px;
    @media(min-width: 768px){
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
        @media(min-width: 768px){
            height: 38px;
            width: 38px;
        } 
    }
    &:hover {
        cursor: pointer;
    }
`
export const ProductCard = styled.div`
    display: flex;
    padding: 12px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    margin-top: 12px;
    border-radius: 4px;
    min-width: 60vw;
    &:hover {
        cursor: pointer;
    }
    span {
        text-overflow: ellipsis;
        @media(min-width: 768px){
            font-size: 18px;
        } 
    }
    @media(min-width: 1280px){
        min-width: 24vw;
    } 
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    height: fit-content;
    padding: 12px 0;
    overflow-y: auto;
`