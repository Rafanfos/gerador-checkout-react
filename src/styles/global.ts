import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
:root{
    --color-primary: #123142  ;
    --color-primary-light: #3b657a ;
    --color-primary-dark: #142026 ;

    --background-primary: #e9f0c9;
    --background-secondary: #142026 ;
   
    --color-grey-0: #F8F9FA;
    --color-grey-1: #868E96;
    --color-grey-2: #121214;
    
    
}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'Inter';
    
}


ul,ol,li{
    list-style: none;
    
}


button{
    cursor: pointer;
    border: none;
    background:transparent;
}

a{
    text-decoration:none;
}

body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}


#root{
    height:100%;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;
