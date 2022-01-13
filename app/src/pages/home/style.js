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
    margin-top: 24px;
    max-height: 65vh;
    width: 80vw;
    overflow-y: auto;
    padding: 12px;
    background: #f5f5f5;
`
export const NavBar = styled.div`
    margin-top: 12px;
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
`
export const SelectAll = styled.div`
    border: 1px solid #8b8b8b;
    height: 4vh;
    width: 8vw;
`