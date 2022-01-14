import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

const Input = styled.input`
    margin-right: 8px;
    width: 50vw;
    height: 4vh;
    box-sizing: border-box;
    padding-left: 8px;
    outline: none;
    border: 1px solid #8b8b8b;
    border-radius: 2px;
    color: #282828;
    &:focus {
        border: 1px solid #6EC5F5;
    }
`
const Filter = styled.select`
    width: 24vw;
    height: 4vh;
    outline: none;
    color: #484848;
    &:focus {
        border: 1px solid #6EC5F5;
        background: #ffff;
    }
`
const SearchBar = props => {
    return <Wrapper>
        <Input
            placeholder='Pesquisar'
        />
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