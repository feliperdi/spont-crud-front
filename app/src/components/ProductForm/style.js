import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding: 24px;
    width: 64vw;
    @media(max-width: 426px) {
        padding: 12px;
    }
`
export const Form = styled.form`
    display: flex;
    flex-flow: row wrap;
    
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    margin-right: 12px;
    margin-top: 8px;
    width: fit-content;
    #categorySelectBox {
        display: flex;
        align-items: center;
    }
`

export const Input = styled.input`
    width: ${ props => props.width ? props.width : "60vw"};
    font-size: 16px;
    outline: none;
    border-radius: 2px;
    padding: 6px;
    height: 28px;
    border: ${props => props.error ? "1px solid #F54242" : "1px solid #8b8b8b"};
    color: ${props => props.error ? "#F54242" : "#484848"};
    &:focus {
        border: ${props => props.error ? "1px solid #F54242" : "1px solid #7ADEE4"};
    }
    @media(min-width: 320px) {
        width: ${ props => props.width ? '22vw' : "60vw"};
    }
    @media(min-width: 768px) {
        font-size: 18px;
        height: 32px;
    }
`

export const Label = styled.label`
    margin-bottom: 4px;
    width: fit-content;
    color: ${props => props.error ? "#F54242" : ( (props.isFocus === props.htmlFor) ? '#7ADEE4' : "#484848")};
    @media(min-width: 768px) {
        font-size: 16x;
    }
`

export const CategorySelect = styled.select`
    padding: 6px;
    height: 42px;
    border: 1px solid #8b8b8b;
    background-color: #ffff;
    color: #484848;
    border-radius: 2px;
    outline: none;
    &:focus {
        border: ${props => props.error ? "1px solid #F54242" : "1px solid #7ADEE4"};
    }
    option {
        outline: none;
    }
    option:focus {
            border: ${props => props.error ? "1px solid #F54242" : "1px solid #7ADEE4"};
    }
`
export const Description = styled.textarea`
    width: 24vw;
    height: 12vh;
    resize: none;
    border: 1px solid #8b8b8b;
    border-radius: 4px;
    align-self: center;
    outline: none;
    box-sizing: border-box;
    padding: 8px;
    overflow-y: auto;
    &:focus {
        border: ${props => props.error ? "1px solid #F54242" : "1px solid #7ADEE4"};
    }
    @media(min-width: 320px) {
        width: 64vw;
    }

`

export const Errors = styled.div`
    font-size: 12px;
    margin-top: 2px;
    color: #F54242;
    width: 100%;
`
export const Footer = styled.div`
    margin-top: 24px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export  const SubimitButton = styled.button`
    height: 36px;
    width: 126px;
    border: none;
    align-self: center;
    margin-top: 4px;
    background: #7ADEE4;
    color: #ffff;
    border-radius: 4px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    &:hover {
        cursor: pointer;
    }
`