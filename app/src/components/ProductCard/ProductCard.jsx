import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '../../icons/expand_more.svg'
import NoProductImage from '../../image/sem_foto.jpg';

import {
    Wrapper,
    Header,
    Select,
    Name,
    Category,
    ExpandMoreButton,
    Body,
    ProductImage,
    Description,
    BodyContent,
} from './style';


const ProductCard = props => {
    const {data, selectedProducts, handleSelection} = props;
    const [showBody, setShowBody] = useState(false);
    const [checked, setChecked] = useState(false)

    const formatterToBRL = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    useEffect( () => {
        const checked = selectedProducts.find( e => e.id == data.id );
        if(checked) setChecked(true);
        else setChecked(false)
    },[selectedProducts])

    useEffect( () => {
        setShowBody(false);
    }, [data])

    return <Wrapper>
        <Category >{data.category}</Category>
        <Header>
            <Select type='checkbox' checked={checked} value={data.id} onChange={handleSelection}/>
            <div onClick={() => setShowBody(!showBody)}>
                <Name>{data.name}</Name>
                <ExpandMoreButton onClick={() => setShowBody(!showBody)}><img src={ExpandMoreIcon}/></ExpandMoreButton>
            </div>
        </Header>
        {showBody ? <Body>
            {/* 
                A imagem teria que ser enviada para o back ou tratada de alguma outra maneira.
                Por enquanto fica esse jpg no lugar.  =/
            */}
            <ProductImage src={NoProductImage}/> 
            <Description>{data.description}</Description>
            <BodyContent>
                <div>
                    <p>{`Altura: ${data.height} cm`}</p>
                    <p>{`Largura: ${data.width} cm`}</p>
                    <p>{`Comprimento: ${data.length} cm`}</p>
                    <p>{`Peso: ${data.weight} kg`}</p>
                </div>
                <div>
                    <p>{`Adicionado em: ${data.date}`}</p>
                    <p>Código: {data.bar_code}</p>
                    <p>Valor: {formatterToBRL.format(data.value)}</p>
                </div>
            </BodyContent>
        </Body> : null}
    </Wrapper>
}

export default ProductCard;