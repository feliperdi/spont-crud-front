import React from "react";
import uploadIcon from '../../icons/upload.svg';
import cancelIcon from '../../icons/cancel.svg'
import {
    Wrapper,
    Background,
    Card,
    Header,
    Title,
    CloseCard,
    Content,
    InputBox,
    Label,
    Input,
    CategorySelect,
    CategoryColor,
    UploadButton,
    Description,
    Save
} from './style'
const NewProductOrEditProductCard = props => {
    const {handleClose} = props;

    return <Wrapper>
        <Background>
            <Card>
                <Header>
                    <Title>{`Novo produto`}</Title>
                    <CloseCard onClick={handleClose}><img src={cancelIcon}/></CloseCard>
                </Header>
                <Content>
                    <InputBox>
                        <Label>Nome</Label>
                        <Input maxLength={100}/>
                    </InputBox>
                    <InputBox>
                        <Label>Valor</Label>
                        <Input width={'34vw'}/>
                    </InputBox>
                    <InputBox>
                        <Label>Data da aquisição</Label>
                        <Input width={'34vw'}/>
                    </InputBox>
                    <InputBox>
                        <Label>Altura</Label>
                        <Input width={'34vw'}/>
                    </InputBox>
                    <InputBox>
                        <Label>Largura</Label>
                        <Input width={'34vw'}/>
                    </InputBox>
                    <InputBox>
                        <Label>Comprimento</Label>
                        <Input width={'34vw'}/>
                    </InputBox>
                    <InputBox>
                        <Label>Peso</Label>
                        <Input width={'34vw'}/>
                    </InputBox>
                    <InputBox>
                        <Label>Codigo de barras</Label>
                        <Input width={'34vw'}/>
                    </InputBox>
                    <InputBox>
                        <Label>Categoria</Label>
                        <div id='categorySelectBox'>
                            <CategorySelect>
                                <option>TESTE OPTION</option>
                                <option>TESTE OPTION</option>
                                <option>TESTE OPTIONfafafafaf</option>
                            </CategorySelect>
                            <CategoryColor></CategoryColor>
                        </div>
                    </InputBox>
                    <InputBox>
                        <Label>Imagem do produto</Label>
                        <UploadButton>Enviar imagem<img src={uploadIcon}/></UploadButton>
                    </InputBox>
                    <InputBox>
                        <Label>Descrição</Label>
                        <Description
                            
                        />
                    </InputBox>
                </Content>
                <Save>Save</Save> 
            </Card>
        </Background>
    </Wrapper>
}

export default NewProductOrEditProductCard;