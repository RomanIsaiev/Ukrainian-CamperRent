import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
 body {
        margin: 0;
        font-family: 'Inter';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    .container {
        width: 1440px;
        padding-left: 64px;
        padding-right: 64px;
        margin: 0 auto;
       
    }

    a {
        text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    ul,
    ol {
        margin: 0;
        padding: 0;
    }

     button {
        cursor: pointer;
    }

    .disable-scroll {
        overflow: hidden;
    }

    .active {
        border: 2px solid #E44848;
    }
`;
