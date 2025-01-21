import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");

  body {
    font-family: 'Pretendard';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  *, *::before, *::after {
    box-sizing: border-box; 
    font-family: 'Pretendard';
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Pretendard';
    margin: 0;
  }

  p, a, button, input {
    font-family: 'Pretendard';
  }
`;

export default GlobalStyle;
