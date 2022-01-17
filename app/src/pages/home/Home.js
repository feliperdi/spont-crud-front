import React, { createContext, useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import ProductCard from '../../components/ProductCard/ProductCard';
import NewProductCard from '../../components/NewProductCard/NewProductCard';
import ConfirmPopUP from '../../components/ConfirmPopUp/ConfirmPopUp';
import DeleteIcon from '../../icons/delete.svg';
import EditIcon from '../../icons/edit.svg';
import {
    Title,
    Wrapper,
    Container,
    NavBar,
    SelectAll,
    DeleteProductButton,
    NewProductButton,
    EditProductButton,
} from './style';
import EditProductCard from '../../components/EditProductCard/EditProductCard';
import useMockData from '../../hooks/useMockData';
import { mock_categories, mock_products } from '../../mock_data';

export const ProductContext = createContext();

const Home = props => {
    const [products, getData, inserData] = useMockData(mock_products);
    const [filteredProducts, setFilteredProducts] = useState([])
    const [showNewProductCard, setShowNewProductCard] = useState(false);
    const [isEditingProductCard, setIsEditingProductCard] = useState(false);
    const [isDeletingPopUp, setIsDeletingPopUp] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
  
    const handleSelectAll = (e) => {
        if(selectAll) {
          setSelectAll(false);
          setSelectedProducts([]);
        } else {
          setSelectAll(true);
          const newProductList = products.map(e => e);
          setSelectedProducts(newProductList);
        }
    }

    const showEditProductCard =  (show) => {
      if(show) {
        setIsEditingProductCard(true);
      } else {  
        setIsEditingProductCard(false);
        setSelectAll(false);
        setSelectedProducts([]);
      }
    }

    const showDeleteProductCard =  (show) => {
      if(show) {
        setIsDeletingPopUp(true);
      } else {  
        setSelectAll(false);
        setIsDeletingPopUp(false);
        setSelectedProducts([]);
      }
    }

    const selectProduct = (e) => {
      const {value} = e.target;
      let index = null;

      if(selectedProducts.find( e => value == e.id)) {
          let newProductList = selectedProducts.map( e => e);
          newProductList = newProductList.filter(e => e.id != value);
          setSelectedProducts(newProductList);
      } else {
        let newProductList = selectedProducts.map( e => e);
        index = products.findIndex( e =>  e.id == value );
        newProductList.push(products[index])
        setSelectedProducts(newProductList);
      }
    }

    const insertProduct = (data) => {
        const newProductList = products.map(e => e);
        newProductList.push(data);
        inserData(newProductList);
        getData();
    }

    const editProduct = (data) => {
        const newProductList = products.map( e => (e.id === data.id )  ? data : e);
        const newSelectedProducts = selectedProducts.filter( e => e.id !== data.id);
        setSelectedProducts(newSelectedProducts);
        inserData(newProductList);
        getData();
    }

    const deleteProduct = () => {
        const newProductList = products.filter( e => !selectedProducts.includes(e))
        inserData(newProductList);
        getData(newProductList);
        showDeleteProductCard(false);
    }


    useEffect( () => {
        getData();
    },[]);

    useEffect( () => {
      setFilteredProducts(products);
    },[products])


    return <Wrapper>
      <ProductContext.Provider 
        value={{
          products: products, 
          categories: mock_categories, 
          filteredProducts: filteredProducts, 
          setFilteredProducts: (data) => setFilteredProducts(data)
        }}>
        <Title>Sponte</Title>
          <SearchBar/>
            <NavBar>
                <div>
                  <SelectAll 
                    type='checkbox' 
                    checked={selectAll} 
                    onChange={handleSelectAll}
                    disabled={filteredProducts.length === 0}
                  />
                  <DeleteProductButton 
                    disabled={selectedProducts.length <= 0} 
                    onClick={() => showDeleteProductCard(true)}
                    >
                      <img src={DeleteIcon}/>
                      Deletar
                    </DeleteProductButton>
                  <EditProductButton 
                    disabled={selectedProducts.length <= 0} 
                    onClick={() => showEditProductCard(true)}
                    >
                      <img src={EditIcon}/>
                    </EditProductButton>
                  <NewProductButton  onClick={() => setShowNewProductCard(true)}>Novo</NewProductButton>
                </div>
            </NavBar>
          <Container>
              {filteredProducts && filteredProducts.map( (e, i) =>  <ProductCard selectedProducts={selectedProducts} handleSelection={selectProduct} key={i} data={e}/>)}
          </Container>
          {showNewProductCard ? <NewProductCard handleInsertProduct={insertProduct} handleClose={() =>  setShowNewProductCard(!showNewProductCard)}/> : null}
          {isEditingProductCard ? <EditProductCard data={selectedProducts}  handleEditProduct={editProduct} handleClose={showEditProductCard}/> : null}
          {isDeletingPopUp ? <ConfirmPopUP handleDelete={deleteProduct} handleCancel={showDeleteProductCard} /> : null}    
      </ProductContext.Provider>
    </Wrapper>
}

export default Home;