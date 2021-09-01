import styled from 'styled-components';
import { Grid } from '../../styles/GlobalStyles';

export const Row = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

export const FeaturedItemContent = styled.article`
  text-align: center;
  border: 5px solid var(--light-gray);
  padding: 30px 25px;
  position: relative;
  transition: border-color var(--transition);
  &:hover {
    border-color: var(--main-color);
  }
  h3 {
    color: var(--dark-gray);
    font-size: 25px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  p {
    color: var(--dark-light-gray);
  }
`;
