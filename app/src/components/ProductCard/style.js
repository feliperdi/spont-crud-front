import styled from "styled-components";


export const Wrapper = styled.div`
    margin-bottom: 16px;
    border-radius: 3px;
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    background: #ffff;
    padding: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    &:hover {
        cursor: pointer;
    }
`
export const Select = styled.input`
    border: 1px solid #dedede;
    height: 4vh;
    width: 6vw;
    margin-right: 4px;
    @media(min-width: 426px) {
        height: 3vh;
        width: 6vw;
    }
`
export const Name = styled.div`
    margin-right: 8px;
    width: 90%;
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 4px;
    @media(min-width: 1280px ) {
        font-size: 24px;
    }
`
export const Category = styled.div`
    width: fit-content;
    padding: 4px;
    color: #484848;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    background: '#fffff';
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 12px;

`
export const ExpandMoreButton = styled.button`
    
      border: none;
      background: none;
      align-self: flex-end;
`
export const Body = styled.div`
    display: flex;
    flex-flow: row wrap;
    height: fit-content;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    background-color: #ffffff;
`

export const ProductImage = styled.img`
    height: 14vh;
    width: 32vw;
    @media(min-width: 1280px ) {
        width: 14vw;
        font-size: 18px;
        padding-left: 38px;
    }
`
export const BodyContent = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 80vw;
    height: fit-content;
    div {
        width: 40vw;
        @media(min-width: 768px) {
            width: 32vw;
            margin-left: 24px;
        }
        @media(min-width: 1280px ) {
            width: 22vw;
        }
    }
    p {
        font-size: 12px;
        width: fit-content;
        margin: 8px 4px;
        @media(min-width: 768px) {
            font-size: 18px;
            width: fit-content;
            margin: 8px 4px;
        }
        @media(min-width: 1280px ) {
            font-size: 20px;
        }
    }
`

export const Description = styled.div`
    display: flex;
    flex-flow: row wrap;
    overflow-y: auto;
    height: 12vh;
    width: 48vw;
    @media(min-width: 768px) {
        font-size: 18px;
    }
    @media(min-width: 1280px ) {
        width: 24vw;
        font-size: 24px;
        padding-left: 38px;
    }
`