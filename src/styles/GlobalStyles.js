import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap');

  :root {
    --black-color: #000000;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }

  img{
    max-height: 100%;
  }

  ul{
    list-style-type: none;
    padding: 0;
  }

  a{
    text-decoration: none;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 1200px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0 5px;
`;

export default GlobalStyle;
