import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --black-color: #000000;
    --light-color: #ffffff;
    --light-gray: #f5f5f5;
    --light-dark-gray: #aaaaaa;
    --dark-light-gray: #8c8c8c;
    --dark-gray: #333333;
    --main-color: #f379a7;
    --secondary-color: #95b3e0;
    --transition: 0.3s;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  img {
    max-height: 100%;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  section {
    margin-top: 100px;
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

export const MainCartTitle = styled(Flex)`
  justify-content: space-between;
  margin-bottom: 20px;
  h2 {
    font-size: 30px;
    color: var(--secondary-color);
  }
  a {
    font-size: 14px;
    color: var(--dark-gray);
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0 5px;
`;

export default GlobalStyle;
