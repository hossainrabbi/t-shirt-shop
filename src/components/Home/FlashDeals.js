import React from 'react';
import { Link } from 'react-router-dom';
import { Container, MainCartTitle } from '../../styles/GlobalStyles';
import Products from '../common/Products/Products';

export default function FlashDeals() {
  return (
    <section>
      <Container>
        <MainCartTitle>
          <h2>Flash Deals</h2>
          <Link to="/">Shop All</Link>
        </MainCartTitle>
        <Products />
      </Container>
    </section>
  );
}
