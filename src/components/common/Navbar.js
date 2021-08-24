import React from 'react';
import { BiUser } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Container, Flex, Grid } from '../../styles/GlobalStyles';

export default function Navbar() {
  return (
    <AppBar>
      <Container>
        <Row>
          <Logo className="logo">
            <img src="/assets/images/logo.png" alt="kidol" />
          </Logo>
          <Ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/pages">Pages</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </Ul>
          <NavbarIconFlex>
            <NavbarIconButton>
              <BsSearch />
            </NavbarIconButton>
            <NavbarIconButton>
              <BiUser />
            </NavbarIconButton>
            <NavbarIconButton>
              <FiHeart />
            </NavbarIconButton>
            <NavbarIconButton>
              <FiShoppingBag />
            </NavbarIconButton>
          </NavbarIconFlex>
        </Row>
      </Container>
    </AppBar>
  );
}

export const AppBar = styled.div`
  background-color: #ddd;
`;

export const Row = styled(Grid)`
  grid-template-columns: 2fr 5fr 2fr;
  height: 69px;
`;

export const Logo = styled.div`
  height: 40px;
  align-self: center;
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
  color: var(--black-color);
  margin: 0 5px;
`;
