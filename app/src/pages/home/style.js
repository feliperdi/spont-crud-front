import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
`
export const Title = styled.p`
    font-size: 24px;
    margin: 24px;
    @media(min-width: 768px){
        font-size: 48px;
        margin-bottom: 48px;
    }
`
export const Container = styled.div`
    margin-top: 8px;
    max-height: 65vh;
    width: 80vw;
    overflow-y: auto;
    padding: 12px;
    @media(min-width: 1280px) {
        width: 52vw;
    }
`
export const NavBar = styled.div`
    margin-top: 12px;
    width: 80vw;
    display: flex;
    padding: 12px;
    div {
        display: flex;
        align-items: center;
    }
    @media(min-width: 1280px) {
        width: 52vw;
        padding: 12px 0;
    }

`
export const SelectAll = styled.input`
    visibility: hidden;
    height: 0vh;
    width: 0vw;
    margin: 0;
    @media(min-width: 768px) {
        border: 1px solid #dedede;
        height: 3vh;
        width: 6vw;
        visibility: visible;
    }
    @media(min-width: 1280px) {
        margin: 0;
    }    
`
export const NewProductButton = styled.button`
    margin: 0 8px;
    background: #7ADEE4;
    color: #ffff;
    width: 18vw;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    &:hover {
        cursor: pointer;
    }
    @media(min-width: 768px) {
        width: 12vw;
        padding: 12px 14px;
    }
    @media(min-width: 1280px) {
        width: 8vw;
        padding: 14px 18px;
    }        
`
export const DeleteProductButton = styled.button`
    margin: 0 8px;
    display: flex;
    align-items: center;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    color: #ffff;
    background: ${props => props.disabled ? '#D0D0D0' : '#E47171'};;
    &:hover {
        cursor: ${props => props.disabled ? 'default' : 'pointer'};
    }
    img {
        height: 16px;
        margin-right: 2px;
    }
    @media(min-width: 768px) {
        padding: 12px 14px;
    }
    @media(min-width: 1280px) {
        padding: 14px 18px;
    }  
    
`
export const EditProductButton = styled.button`
    background: #ffff;
    margin: 0 8px;
    display: flex;
    align-items: center;
    border: ${props => props.disabled ? '1px solid #dedede' : '1px solid #505050'};;
    padding: 8px 12px;
    border-radius: 4px;
    filter: ${props => props.disabled ? 'opacity(50%)' : 'opacity(100%)'};
    &:hover {
        cursor: ${props => props.disabled ? 'default' : 'pointer'};
    }
    img {
        height: 16px;
    }
    @media(min-width: 768px) {
        padding: 12px 14px;
    }
    @media(min-width: 1280px) {
        padding: 14px 18px;
    }  
`