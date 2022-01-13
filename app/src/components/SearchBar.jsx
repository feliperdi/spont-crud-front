import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`

const Input = styled.input`
    
`
const Filter = styled.select`
    
`
const SearchBar = props => {
    return <Wrapper>
        <Input/>
        <Filter>
            <option>Nome</option>
            <option>Preço</option>
            <option>Categoria</option>
            <option>Data de aquisição</option>
            <option>Peso</option>
            <option>Altura</option>
            <option>Largura</option>
            <option>Comprimento</option>
            <option>Código de Barras</option>
        </Filter>
    </Wrapper>
}

export default SearchBar;