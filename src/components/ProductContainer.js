import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const ProductContainer = (props) =>{
    return(
        <Container>
        
            {props.products.map((product) => {
                return(
                    <ProductCard key={product._id} id={product._id} product={product}/>
                )
            })}
        </Container>
    )

}
const Container = styled.div`

    display: flex;
    flex-wrap: wrap;
    height: 100%;
    overflow:auto;
    justify-content: center;
    &::-webkit-scrollbar-thumb {
        background-image: linear-gradient(180deg, #1F65F0, #1188D9);
        border-radius: 30px;
    }
    &::-webkit-scrollbar-track {
        background-color: #F5F5F5;
        border-radius: 30px;
    }
    &::-webkit-scrollbar {
        width: 10px;
    }

    `

export default ProductContainer;