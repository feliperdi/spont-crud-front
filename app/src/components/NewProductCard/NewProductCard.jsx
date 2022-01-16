import React from "react";
import ProductForm from "../ProductForm/ProductForm";
import cancelIcon from '../../icons/cancel.svg'
import {
    Wrapper,
    Background,
    Card,
    Header,
    Title,
    CloseCard,
} from './style';

const NewProductCard = props => {
    const {handleClose, handleInsertProduct} = props;

    return <Wrapper>
        <Background>
            <Card>
                <Header>
                    <Title>{`Novo produto`}</Title>
                    <CloseCard onClick={handleClose}><img src={cancelIcon}/></CloseCard>
                </Header>
                <ProductForm editValues={null} handleClose={handleClose} handleInsertProduct={handleInsertProduct}/>
            </Card>
        </Background>
    </Wrapper>
}

export default NewProductCard;