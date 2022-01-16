import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Cancel from '../../icons/cancel.svg';
import ProductForm from '../ProductForm/ProductForm';
import { 
    Background,
    Card,
    CloseCard,
    Content,
    Header,
    ProductCard,
    Title,
    Wrapper,

} from './style';


const EditProductCard = props => {
    const {data, handleEditProduct, handleClose} = props;
    const [editProduct, setEditProduct] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
   

    const selectProductForEditing = (product) => {
        setEditProduct(product);
        setIsEditing(true);
    }

    useEffect(() => {
        if(data.length === 0) handleClose(false);
    },[data.length]);

    return <Wrapper>
        <Background>
            <Card>
                <Header>
                    <Title>Atualizar Produto</Title>
                    <CloseCard onClick={!isEditing ? () => handleClose(false) : () => setIsEditing(false)}><img src={Cancel}/></CloseCard>
                </Header>
                { !isEditing 
                    ?
                    <Content>
                        {data && data.map( (product,i) => {
                            return <ProductCard key={i} onClick={() => selectProductForEditing(product)}>
                                <span>{`${i+1} - ${product.name}`}</span>
                            </ProductCard>
                        })}
                    </Content>
                    : 
                    <ProductForm editValues={editProduct}  handleEditProduct={handleEditProduct} handleClose={() => setIsEditing(false)}/>
                }
            </Card>
        </Background>
    </Wrapper>
}

export default EditProductCard;