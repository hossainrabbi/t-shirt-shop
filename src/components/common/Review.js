import React from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import { Flex } from '../../styles/GlobalStyles';

export default function Review({ review, reviewQuantity }) {
  return (
    <ReviewFlex>
      {review >= 1 ? (
        <FaStar style={{ color: '#f77c29' }} />
      ) : (
        <FaStar style={{ color: '#cccccc' }} />
      )}
      {review >= 2 ? (
        <FaStar style={{ color: '#f77c29' }} />
      ) : (
        <FaStar style={{ color: '#cccccc' }} />
      )}
      {review >= 3 ? (
        <FaStar style={{ color: '#f77c29' }} />
      ) : (
        <FaStar style={{ color: '#cccccc' }} />
      )}
      {review >= 4 ? (
        <FaStar style={{ color: '#f77c29' }} />
      ) : (
        <FaStar style={{ color: '#cccccc' }} />
      )}
      {review >= 5 ? (
        <FaStar style={{ color: '#f77c29' }} />
      ) : (
        <FaStar style={{ color: '#cccccc' }} />
      )}{' '}
      <span>({reviewQuantity} Reviews)</span>
    </ReviewFlex>
  );
}

export const ReviewFlex = styled(Flex)`
  margin-top: 5px;
  span {
    font-size: 14px;
    color: var(--light-dark-gray);
    margin-left: 10px;
    margin-top: 3px;
    &:hover {
      color: var(--secondary-color);
    }
  }
`;
