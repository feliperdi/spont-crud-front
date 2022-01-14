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
`
export const Select = styled.div`
    border: 1px solid #dedede;
    height: 4vh;
    width: 6vw;
    margin-right: 4px;
`
export const Name = styled.div`
    margin-right: 8px;
    width: 56vw;
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 4px;
`
export const Category = styled.div`
    width: 50vw;
    padding: 4px;
    color: #ffff;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    background: ${props => props.color ? props.color : '#fffff'};
`
export const ExpandMoreButton = styled.button`
      border: none;
      background: none;
      width: 16vw;
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
`
export const BodyContent = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 80vw;
    height: fit-content;
    div {
        width: 40vw;
    }
    p {
        font-size: 12px;
        width: fit-content;
        margin: 8px 4px;
    }

`

export const Description = styled.div`
    display: flex;
    flex-flow: row wrap;
    overflow-y: auto;
    height: 12vh;
    width: 48vw;
`