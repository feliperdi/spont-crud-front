import styled from "styled-components";

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
`
export const CloseCard = styled.button`
    border: none;
    background: none;
    margin-top: 4px;
    img {
        height: 28px;
        width: 28px;
    }
`
export const Content = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    margin-top: 24px;
    flex-flow: row wrap;
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    margin-right: 12px;
    margin-top: 8px;
    #categorySelectBox {
        display: flex;
        align-items: center;
    }
`
export const Label = styled.label`
    margin-bottom: 4px;
    color: #484848;
`
export const Input = styled.input`
    width: ${ props => props.width ? props.width : "75vw"};
    font-size: 16px;
    outline: none;
    border-radius: 2px;
    padding: 6px;
    border: 1px solid #8b8b8b;
    color: #484848;
    @media(min-width: 426px) {
        width: ${ props => props.width ? '22vw' : "80vw"};
    }
`
export const CategorySelect = styled.select`
    padding: 6px;
    margin-right: 6px;
    border: 1px solid #8b8b8b;
    background-color: #ffff;
    color: #484848;
    border-radius: 2px;
`
export const CategoryColor = styled.div`
    background: red;
    height: 28px;
    width: 28px;
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
export const Description = styled.textarea`
    width: 80vw;
    height: 12vh;
    resize: none;
    border: 1px solid #8b8b8b;
    border-radius: 4px;
    align-self: center;
    outline: none;
    box-sizing: border-box;
    padding: 8px;
    overflow-y: auto;
`
export  const Save = styled.button`
    height: 36px;
    width: 126px;
    border: none;
    align-self: center;
    margin-top: 4px;
    background: #7ADEE4;
    color: #ffff;
    border-radius: 4px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`