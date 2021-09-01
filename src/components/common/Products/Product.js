import React from 'react';
import styled from 'styled-components';
import Review from '../../common/Review';

export default function Product(props) {
  return (
    <ProductCart>
      <img src={props.image[0]} alt={props.title} />
      <ProductCartDetails>
        <h6>{props.title}</h6>
        <Review />
        <h4>
          <div>${props.price}</div>
          <span>$345.5</span>
        </h4>
      </ProductCartDetails>
    </ProductCart>
  );
}

export const ProductCart = styled.article`
  width: 100%;
  height: 100%;
  box-shadow: 1px 1px 3px var(--light-dark-gray);
  transition: box-shadow solid var(--transition);
  &:hover {
    box-shadow: 1px 1px 5px var(--light-dark-gray);
  }
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    text-align: center;
  }
`;

export const ProductCartDetails = styled.div`
  color: var(--dark-gray);
  padding: 8px;
  h6 {
    font-size: 14px;
    font-weight: 500;
  }
  h4 {
    margin-top: 5px;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    justify-content: space-evenly;
  }
  span {
    text-decoration: line-through;
    color: var(--light-dark-gray);
  }
`;
