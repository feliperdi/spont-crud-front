import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: rgba(255,255,255,0.5);
`
const Card = styled.div`
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    background: #ffff;
    width: 80vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 12px;
    div {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
    }
`
const ConfirmButton = styled.button`
    border: 1px solid #E47171;
    color: #E47171;
    background: #ffff;
    padding: 12px;
    border-radius: 4px;
    &:hover {
        border: 1px solid #E47171;
        color: #ffff;
        background: #E47171;
        cursor: pointer;
    }

`
const CancelButton = styled.button`
    padding: 12px;
    color: #ffff;
    border: none;
    border-radius: 4px;
    background: #7ADEE4;
    padding: 12px;
    &:hover {
        cursor: pointer;
    }
`

const ConfirmPopUp = props => {
    const {handleCancel} = props;
    
    return <Wrapper>
        <Card>
            <h4>Excluir produto(s) ?</h4>
            <div>
                <ConfirmButton>Excluir produto(s)</ConfirmButton>
                <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
            </div>
        </Card>
    </Wrapper>
}

export default ConfirmPopUp;