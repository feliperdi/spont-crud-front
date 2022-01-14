import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
    overflow: hidden;
`
export const Title = styled.h2`

`
export const Container = styled.div`
    margin-top: 8px;
    max-height: 65vh;
    width: 80vw;
    overflow-y: auto;
    padding: 12px;
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

`
export const SelectAll = styled.div`
    @media(min-width: 768px) {
        border: 1px solid #dedede;
        height: 4vh;
        width: 6vw;
        margin: 0 8px;
        visibility: visible;
    }
    visibility: hidden;
    height: 0vh;
    width: 0vw;
    margin: 0;
    
`
export const NewProductButton = styled.button`
    margin: 0 8px;
    background: #7ADEE4;
    color: #ffff;
    width: 18vw;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
`
export const DeleteProductButton = styled.button`
    margin: 0 8px;
    display: flex;
    align-items: center;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    color: #ffff;
    background: #E47171;
    img {
        height: 16px;
        margin-right: 2px;
    }
    
`
export const EditProductButton = styled.button`
    background: #ffff;
    margin: 0 8px;
    display: flex;
    align-items: center;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    img {
        height: 16px;
    }
`