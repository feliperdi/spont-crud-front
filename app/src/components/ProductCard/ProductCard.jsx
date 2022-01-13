import React, { useState } from 'react';
import ExpandMoreIcon from '../../icons/expand_more.svg'

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
    const {data} = props;
    const [showBody, setShowBody] = useState(false);

    const formatterToBRL = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });


    return <Wrapper>
        <Category color={data.color}>{data.categoria}</Category>
        <Header>
            <Select/>
            <Name>{data.nome}</Name>
            <ExpandMoreButton onClick={() => setShowBody(!showBody)}><img src={ExpandMoreIcon}/></ExpandMoreButton>
        </Header>
        {showBody ? <Body>
            <ProductImage src={"https://picsum.photos/200/300"}/>
            <Description>{data.descricao}</Description>
            <BodyContent>
                <div>
                    <p>{`Altura: ${data.altura} cm`}</p>
                    <p>{`Largura: ${data.largura} cm`}</p>
                    <p>{`Comprimento: ${data.comprimento} cm`}</p>
                    <p>{`Peso: ${data.peso} kg`}</p>
                </div>
                <div>
                    <p>{`Adicionado em: ${data.data}`}</p>
                    <p>Código: {data.codigo}</p>
                    <p>Valor: {formatterToBRL.format(data.valor)}</p>
                </div>
            </BodyContent>
        </Body> : null}
    </Wrapper>
}

export default ProductCard;