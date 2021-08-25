import styled from 'styled-components';
import { Container, Flex, Grid } from '../../styles/GlobalStyles';
import { Logo, NavbarIconButton } from './Navbar.style';

export const SearchBarContainer = styled(Container)`
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--light-gray);
`;

export const Row = styled(Grid)`
  grid-template-columns: 1fr 2fr 1fr;
`;

export const SearchBarLogo = styled(Logo)`
  img {
    display: block;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  input {
    width: 60%;
    padding: 12px 20px;
    border: 1px solid var(--light-gray);
    outline: none;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    color: var(--dark-light-gray);
    font-size: 14px;
    &:focus {
      border: 1px solid var(--main-color);
    }
  }

  button {
    background-color: var(--main-color);
    display: inline-block;
    padding: 12px 10px 8px 10px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    color: var(--light-color);
    font-size: 18px;
    align-self: center;
    padding: 12px 20px 8px 20px;
    transition: background-color var(--transition);
    &:hover {
      background-color: var(--secondary-color);
    }
  }
`;

export const SearchBarIconFlex = styled(Flex)`
  justify-content: flex-end;
`;

export const SearchBarIconButton = styled(NavbarIconButton)`
  display: inline-block;
`;
