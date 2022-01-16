import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 8px;
    
    @media(min-width: 768px ) {
            margin-bottom: 12px;
    }
    
    img {
        position: absolute;
        @media(min-width: 768px ) {
            width: 32px;
            height: 32px
        }
    }
   
`

export const Input = styled.input`
    width: 75vw;
    height: 36px;
    box-sizing: border-box;
    padding-left: 32px;
    outline: none;
    border:none;
    border-bottom: 1px solid #8b8b8b;
    border-radius: 2px;
    color: #282828;
    &:focus {
        border-bottom: 1px solid #6EC5F5;
    }
    @media(min-width: 768px ) {
        width: 48vw;
        font-size: 18px;
        padding-left: 38px;
    }
    @media(min-width: 1280px ) {
        width: 32vw;
        font-size: 18px;
        padding-left: 38px;
    }
`

