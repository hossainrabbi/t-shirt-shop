import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Flex } from '../../styles/GlobalStyles';

export const TopBarStyle = styled.div`
  color: var(--dark-gray);
  background-color: var(--light-gray);
  padding: 15px 0;
  font-size: 14px;
`;

export const Row = styled(Flex)`
  justify-content: space-between;
`;

export const TopBarIcon = styled.a`
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  border-right: 1px solid var(--light-dark-gray);
  span,
  svg {
    color: var(--dark-gray);
    font-size: 14px;
    display: inline-block;
  }
  svg {
    margin-right: 4px;
  }
`;

export const TopBarIconLink = styled(Link)`
  display: flex;
  align-items: center;
  padding-left: 15px;
  span,
  svg {
    color: var(--dark-gray);
    font-size: 14px;
    display: inline-block;
  }
  svg {
    margin-right: 4px;
  }
`;
