import styled from 'styled-components';
import { Button, Flex, Grid } from '../../styles/GlobalStyles';

export const Nav = styled.nav`
  background-color: var(--light-color);
`;

export const Row = styled(Grid)`
  grid-template-columns: 2fr 5fr 2fr;
  height: 69px;
`;

export const Logo = styled.div`
  height: 40px;
  align-self: center;
  img {
    display: none;
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  li a {
    color: var(--black-color);
    text-transform: uppercase;
    margin: 0 30px;
    font-weight: 500;
    font-size: 14px;
  }
`;

export const NavbarIconFlex = styled(Flex)`
  justify-content: flex-end;
`;

export const NavbarIconButton = styled(Button)`
  font-size: 20px;
  color: var(--dark-gray);
  margin: 0 5px;
  position: relative;
  display: none;
  span {
    position: absolute;
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    color: var(--light-color);
    background-color: var(--main-color);
    font-size: 10px;
    border-radius: 50%;
    top: -6px;
    right: -4px;
  }
`;
