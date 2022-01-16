import React, { useContext, useState } from 'react';
import { ProductContext } from '../../pages/home/Home';
import {Input, Wrapper } from './style';
import Search_icon from '../../icons/search.svg';

const SearchBar = props => {
    const [value, setValue] = useState('');
    const contextValue = useContext(ProductContext);

    const onChangeInput = e => {
        const {value} = e.target;
        const regex = new RegExp(value.toLowerCase())
        setValue(value);
        const newFilterList = contextValue.products.filter( e => regex.test( e.name.toString().toLowerCase() ) );
        contextValue.setFilteredProducts(newFilterList);
    };

    return <Wrapper>
        <img src={Search_icon}/>
        <Input 
            placeholder='Nome do produto' 
            maxLength={100} 
            onChange={onChangeInput} 
            value={value}
        /> 
    </Wrapper>
}

export default SearchBar;