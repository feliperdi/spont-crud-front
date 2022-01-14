import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import ProductCard from '../../components/ProductCard/ProductCard';
import NewProductOrEditProductCard from '../../components/NewProductOrEditProductCard/NewProductOrEditProductCard';
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


const Home = props => {
    const [products, setProducts] = useState([{
        "id": 1,
        "nome": "Lamprotornis chalybaeus",
        "categoria": "Starling, greater blue-eared",
        "altura": 190,
        "comprimento": 48,
        "largura": 83,
        "peso": 69,
        "codigo": 13,
        "valor": 1227.64,
        "data": "07/04/2021",
        "color": "#597094",
        "descricao": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
      }, {
        "id": 2,
        "nome": "Ammospermophilus nelsoni",
        "categoria": "Squirrel, nelson ground",
        "altura": 231,
        "comprimento": 215,
        "largura": 55,
        "peso": 21,
        "codigo": 13,
        "valor": 1947.37,
        "data": "21/10/2021",
        "color": "#508be0",
        "descricao": "In congue. Etiam justo. Etiam pretium iaculis justo."
      }, {
        "id": 3,
        "nome": "Boselaphus tragocamelus",
        "categoria": "Nilgai",
        "altura": 95,
        "comprimento": 25,
        "largura": 76,
        "peso": 78,
        "codigo": 13,
        "valor": 2008.78,
        "data": "23/12/2021",
        "color": "#e1b841",
        "descricao": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
      }, {
        "id": 4,
        "nome": "Aquila chrysaetos",
        "categoria": "Eagle, golden",
        "altura": 52,
        "comprimento": 134,
        "largura": 10,
        "peso": 24,
        "codigo": 13,
        "valor": 1796.93,
        "data": "30/12/2021",
        "color": "#2025a0",
        "descricao": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
      }, {
        "id": 5,
        "nome": "Butorides striatus",
        "categoria": "Little heron",
        "altura": 67,
        "comprimento": 234,
        "largura": 16,
        "peso": 75,
        "codigo": 13,
        "valor": 555.13,
        "data": "24/01/2021",
        "color": "#ab24bb",
        "descricao": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
      }]
    );
    const [showNewProductOrEditProductCard, setShowNewProductOrEditProductCard] = useState(false);
    const [showConfirmPopUp, setShowConfirmPopUp] = useState(true);
    const [selectedProducts, setSelectedProduct] = useState([]);
    
    const handleClose = () => {
      setShowNewProductOrEditProductCard(!showNewProductOrEditProductCard);
    }
  
    const selectProduct = () => {

    }

    const insertProduct = () => {
      
    }

    const editProduct = () => {
      
    }

    const removeProduct = () => {

    }

    return <Wrapper>

        <Title>Sponte</Title>
          <SearchBar/>
            <NavBar>
                <div>
                  <SelectAll/>
                  <DeleteProductButton onClick={() => setShowConfirmPopUp(true)}><img src={DeleteIcon}/>Deletar</DeleteProductButton>
                  <EditProductButton onClick={() => setShowNewProductOrEditProductCard(true)}><img src={EditIcon}/></EditProductButton>
                  <NewProductButton onClick={() => setShowNewProductOrEditProductCard(true)}>Novo</NewProductButton>
                </div>
            </NavBar>
          <Container>
              {products && products.map( (e, i) =>  <ProductCard key={i} data={e}/>)}
          </Container>
          {showNewProductOrEditProductCard ? <NewProductOrEditProductCard handleClose={handleClose}/> : null}
          {showConfirmPopUp ? <ConfirmPopUP/> : null}    
    </Wrapper>
}

export default Home;