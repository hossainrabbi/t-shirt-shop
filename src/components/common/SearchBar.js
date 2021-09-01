import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';
import {
  Row,
  SearchBarArea,
  SearchBarIconButton,
  SearchBarIconFlex,
  SearchBarLogo,
  SearchForm,
} from '../../styles/common/SearchBar.style';
import { Button, Container } from '../../styles/GlobalStyles';

export default function SearchBar() {
  return (
    <SearchBarArea>
      <Container>
        <Row>
          <SearchBarLogo>
            <img src="/assets/images/logo.png" alt="kidol" />
          </SearchBarLogo>
          <SearchForm>
            <input type="search" placeholder="Search Everything" />
            <Button>
              <BsSearch />
            </Button>
          </SearchForm>
          <SearchBarIconFlex>
            <SearchBarIconButton>
              <FiHeart />
            </SearchBarIconButton>
            <SearchBarIconButton>
              <span>01</span>
              <FiShoppingBag />
            </SearchBarIconButton>
          </SearchBarIconFlex>
        </Row>
      </Container>
    </SearchBarArea>
  );
}
