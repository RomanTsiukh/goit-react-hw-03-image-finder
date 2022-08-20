import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

body {
    margin: ${p => p.theme.space[0]}px;
    background-color: ${p => p.theme.colors.bgColorForm};

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

h1, h2, h3, h4, h5, h6, p {
    margin: ${p => p.theme.space[0]}px;
}

ul {
    margin: ${p => p.theme.space[0]}px;
    padding: ${p => p.theme.space[0]}px;
}
`;
