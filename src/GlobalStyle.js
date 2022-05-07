import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        box-sizing: border-box;
    }
    html, body, #root{
        height: 100%;
        width: 100%;
        background-color: #F5F5F5;
                
    }
    *, button, input{
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    :root {
        --color-1: white;
    }
`