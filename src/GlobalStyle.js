import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
      box-sizing: inherit;
    }

    body {
      background-color: rgb(240, 240, 240);
      font-family: "Lato", sans-serif;
    }

`;
