import React from 'react';
import styled from 'styled-components';
import productData from '../../../data/fakeData/products.fakeData';
import { Grid } from '../../../styles/GlobalStyles';
import Product from './Product';

export default function Products() {
  return (
    <ProductItems>
      {productData.map((item) => (
        <Product {...item} key={item._id} />
      ))}
    </ProductItems>
  );
}

export const ProductItems = styled(Grid)`
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 25px;
`;
