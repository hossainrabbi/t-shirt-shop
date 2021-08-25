import React from 'react';
import { BiUser } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Logo,
  Nav,
  NavbarIconButton,
  NavbarIconFlex,
  Row,
  Ul,
} from '../../styles/common/Navbar.style';
import { Container } from '../../styles/GlobalStyles';

export default function Navbar() {
  return (
    <Nav>
      <Container>
        <Row>
          <Logo>
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
              <span>01</span>
              <FiShoppingBag />
            </NavbarIconButton>
          </NavbarIconFlex>
        </Row>
      </Container>
    </Nav>
  );
}
