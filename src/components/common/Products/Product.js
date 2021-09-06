import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';
import styled from 'styled-components';
import { Button } from '../../../styles/GlobalStyles';
import Review from '../../common/Review';

export default function Product(props) {
  return (
    <ProductCart>
      <ProductImage>
        {props.discount > 0 && <span>-{props.discount}%</span>}
        <ShopButton className="product__image">
          <Button title="Add to cart">
            <FiShoppingBag />
          </Button>
          <Button title="Add to wishlist">
            <FiHeart />
          </Button>
          <Button title="Quick view">
            <AiOutlineEye />
          </Button>
        </ShopButton>
        <img src={props.image[0]} alt={props.name} />
      </ProductImage>
      <ProductCartDetails>
        <h6>{props.name}</h6>
        <Review review={props.review} reviewQuantity={props.reviewCount} />
        <h4>
          <ins>
            ${(props.price - (props.discount / 100) * props.price).toFixed(2)}
          </ins>
          {props.discount > 0 && <span>${props.price}</span>}
        </h4>
      </ProductCartDetails>
    </ProductCart>
  );
}

export const ProductCart = styled.article`
  width: 100%;
  height: 100%;
  position: relative;
  box-shadow: 1px 1px 3px var(--light-dark-gray);
  transition: box-shadow solid var(--transition);
  &:hover {
    box-shadow: 1px 1px 5px var(--light-dark-gray);
    & .product__image {
      display: block;
    }
  }
`;

export const ProductImage = styled.div`
  position: relative;
  overflow: hidden;
  height: 250px;
  background-color: var(--light-gray);
  span {
    position: absolute;
    color: var(--light-gray);
    background-color: var(--secondary-color);
    top: 15px;
    left: 15px;
    padding: 3px 6px;
    font-size: 14px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    text-align: center;
  }
`;

export const ShopButton = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  display: none;
  button {
    display: block;
    font-size: 18px;
    color: var(--dark-light-gray);
    background-color: var(--light-color);
    width: 42px;
    height: 40px;
    line-height: 49px;
    text-align: center;
    margin-bottom: 5px;
    border-radius: 50%;
    transition: var(--transition);
    &:hover {
      color: var(--light-color);
      background-color: var(--secondary-color);
    }
  }
`;

export const ProductCartDetails = styled.div`
  color: var(--dark-gray);
  padding: 8px;
  h6 {
    font-size: 14px;
    font-weight: 600;
  }
  h4 {
    margin-top: 5px;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    ins {
      margin-right: 5px;
      text-decoration: none;
    }
    span {
      text-decoration: line-through;
      color: var(--light-dark-gray);
      margin-left: 5px;
    }
  }
`;
