import React from "react";
import { CancelButton, Card, ConfirmButton, Wrapper } from "./style";


const ConfirmPopUp = props => {
    const {handleCancel, handleDelete} = props;
    
    return <Wrapper>
        <Card>
            <span>Excluir produto(s) ?</span>
            <div>
                <ConfirmButton onClick={handleDelete}>Excluir produto(s)</ConfirmButton>
                <CancelButton onClick={() => handleCancel(false)}>Cancelar</CancelButton>
            </div>
        </Card>
    </Wrapper>
}

export default ConfirmPopUp;