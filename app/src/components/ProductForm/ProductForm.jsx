import React, { useState } from 'react';
import moment from 'moment';
import * as yup from 'yup';
import { Formik } from 'formik';

import { 
    CategorySelect,
    Description,
    Errors,
        Footer,
        Form, 
        Input, 
        InputBox, 
        Label, 
        SubimitButton, 
        Wrapper 
} from './style';
import { mock_categories } from '../../mock_data';


const productSchema = yup.object().shape({
    name: yup.string().required('Nome inválido'),
    description: yup.string(),
    height: yup.number().required('Altura inválido').integer(),
    width: yup.number().required('Largura inválido').integer(),
    length: yup.number().required('Comprimento inválido').integer(),
    weight: yup.number().required('Peso inválido').integer(),
    bar_code: yup.number().required('Codigo de barras inválido').integer(),
    category: yup.string().required('Selecione uma categoria'),
    value: yup.number().required('Valor inválido').integer(),
    date: yup.date().required('Data de aquisição inválido'),
    product_image: yup.mixed(),
})


const ProductForm = props => {
    const {editValues, handleInsertProduct, handleEditProduct, handleClose} = props;
    const [categories, setCategories] = useState(mock_categories);
    const [defaultValues, setDefaultValues] = useState({
        name: '',
        description: '',
        height: '',
        width: '',
        length: '',
        weight: '',
        bar_code: '',
        category: 'Outros',
        value: '',
        date: '',
        product_image: '',
        id: Math.random(),
    });
    const [focusInput, setFocusInput] = useState('');
    const [date, setDate] = useState(moment().format("yyyy-MM-DD").toString());

    return <Wrapper>
        <Formik
            initialValues={ editValues || defaultValues}
            validationSchema={productSchema}
            enableReinitialize
            onSubmit={(values, {setSubmitting}) => {
                handleInsertProduct && handleInsertProduct(values);
                handleEditProduct && handleEditProduct(values);
                setSubmitting(false);
                handleClose();
            }}
        >
        {({ 
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
            values,
            isSubmitting
        }) => (
            <Form onSubmit={handleSubmit}>
                <InputBox>
                    <Label isFocus={focusInput}  htmlFor='name' error={(errors.name && touched.name)}>Nome:</Label>
                    <Input
                        onFocus={(e) => setFocusInput(e.target.name)}
                        isFocus={focusInput}
                        type='text' 
                        name='name'
                        placeholder='exemplo nome'
                        maxLength={100}
                        onBlur={e => {
                            setFocusInput('');
                            handleBlur(e);
                        }}
                        onChange={handleChange}
                        value={values.name}
                        error={(errors.name && touched.name)}
                    />
                    {errors.name && touched.name && <Errors>{errors.name}</Errors>}
                </InputBox>
                <InputBox>
                    <Label isFocus={focusInput}  htmlFor='height' error={(errors.height && touched.height)}>Altura:</Label>
                    <Input
                        onFocus={(e) => setFocusInput(e.target.name)}
                        type='number'
                        width={'26vw'}
                        min={0}
                        placeholder='cm'
                        name='height'
                        onChange={handleChange}
                        onBlur={e => {
                            setFocusInput('');
                            handleBlur(e);
                        }}
                        value={values.height}
                        error={(errors.height && touched.height)}
                    />
                    {errors.height && touched.height && <Errors>{errors.height}</Errors>}
                </InputBox>
                <InputBox>
                    <Label isFocus={focusInput}  htmlFor='width' error={(errors.width && touched.width)}>Largura:</Label>
                    <Input
                        onFocus={(e) => setFocusInput(e.target.name)}
                        type='number'
                        width={'26vw'}
                        min={0} 
                        name='width'
                        placeholder='cm'
                        onChange={handleChange}
                        onBlur={e => {
                            setFocusInput('');
                            handleBlur(e);
                        }}
                        value={values.width}
                        error={(errors.width && touched.width)}
                    />
                    {errors.width && touched.width && <Errors>{errors.width}</Errors>}
                </InputBox>
                <InputBox>
                    <Label isFocus={focusInput}  htmlFor='length' error={(errors.length && touched.length)}>Comprimento:</Label>
                    <Input
                        onFocus={(e) => setFocusInput(e.target.name)}
                        type='number'
                        width={'26vw'}
                        min={0} 
                        name='length'
                        placeholder='cm'
                        onChange={handleChange}
                        onBlur={e => {
                            setFocusInput('');
                            handleBlur(e);
                        }}
                        value={values.length}
                        error={(errors.length && touched.length)}
                    />
                    {errors.length && touched.length && <Errors>{errors.length}</Errors>}
                </InputBox>
                <InputBox>
                    <Label isFocus={focusInput} htmlFor='weight' error={(errors.weight && touched.weight)}>Peso:</Label>
                    <Input
                        onFocus={(e) => setFocusInput(e.target.name)}
                        type='number'
                        width={'26vw'}
                        min={0} 
                        name='weight'
                        placeholder='cm'
                        onChange={handleChange}
                        onBlur={e => {
                            setFocusInput('');
                            handleBlur(e);
                        }}
                        value={values.weight}
                        error={(errors.weight && touched.weight)}
                    />
                    {errors.weight && touched.weight && <Errors>{errors.weight}</Errors>}
                </InputBox>
                <InputBox>
                    <Label isFocus={focusInput}  htmlFor='bar_code' error={(errors.bar_code && touched.bar_code)}>Código de barrras:</Label>
                    <Input
                        onFocus={(e) => setFocusInput(e.target.name)}
                        type='number'
                        width={'26vw'}
                        min={0} 
                        name='bar_code'
                        placeholder='000000000000000'
                        onChange={handleChange}
                        onBlur={e => {
                            setFocusInput('');
                            handleBlur(e);
                        }}
                        value={values.bar_code}
                        error={(errors.bar_code && touched.bar_code)}
                    />
                    {errors.bar_code && touched.bar_code && <Errors>{errors.bar_code}</Errors>}
                </InputBox>
                <InputBox>
                    <Label isFocus={focusInput}  htmlFor='category' error={(errors.category && touched.category)}>Categoria:</Label>
                    <CategorySelect 
                        name='category'
                        onChange={handleChange}
                        value={values.category}
                        error={(errors.category && touched.category)}>
                        {categories ? categories.map( (e,i) => <option key={i} value={e}>{e}</option>) : null}
                        </CategorySelect>
                    {errors.category && touched.category && <Errors>{errors.category}</Errors>}
                </InputBox>
                <InputBox>
                    <Label isFocus={focusInput}  htmlFor='value' error={(errors.value && touched.value)}>Valor:</Label>
                    <Input
                        type='number'
                        width={'26vw'}
                        onFocus={(e) => setFocusInput(e.target.name)}
                        min={0} 
                        name='value'
                        placeholder='Preço'
                        onChange={handleChange}
                        onBlur={e => {
                            setFocusInput('');
                            handleBlur(e);
                        }}
                        value={values.value}
                        error={(errors.value && touched.value)}
                    />
                    {errors.value && touched.value && <Errors>{errors.value}</Errors>}
                </InputBox>
                <InputBox>
                    <Label isFocus={focusInput}  htmlFor='date' error={(errors.date && touched.date)}>Data de aquisição:</Label>
                    <Input
                        onFocus={(e) => setFocusInput(e.target.name)}
                        width={'fit-content'}
                        type='date' 
                        name='date'
                        onChange={handleChange}
                        onBlur={e => {
                            setFocusInput('');
                            handleBlur(e);
                        }}
                        max={date}
                        value={values.date}
                        error={(errors.date && touched.date)}
                    />
                    {errors.date && touched.date && <Errors>{errors.date}</Errors>}
                </InputBox>
                <InputBox>
                    <Label isFocus={focusInput}  error={errors.product_image}>Imagem:</Label>
                    <Input
                        onFocus={(e) => setFocusInput(e.target.name)}
                        type='file'
                        accept='image'
                        name='product_image'
                        onChange={handleChange}
                        error={errors.product_image}
                    />
                    {errors.product_image && touched.product_image && <Errors>{errors.product_image}</Errors>}
                </InputBox>
                <InputBox>
                    <Label isFocus={focusInput} htmlFor='description'  error={errors.description}>Descrição:</Label>
                    <Description
                        onFocus={(e) => setFocusInput(e.target.name)}
                        name='description'
                        onBlur={e => {
                            setFocusInput('');
                            handleBlur(e);
                        }}
                        onChange={handleChange}
                        value={values.description}
                    />
                    {errors.description && touched.description && <Errors>{errors.description}</Errors>}
                </InputBox>
                <Footer>
                    <SubimitButton  type='submit' disabled={isSubmitting}>Salvar</SubimitButton>
                </Footer>             
            </Form>
        )}
        </Formik>
    </Wrapper>
}

export default ProductForm;