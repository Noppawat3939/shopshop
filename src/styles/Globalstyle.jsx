import { createGlobalStyle } from "styled-components";

export const LightTheme = {
    bgColor: {
        main: '#ff750f',
        main_light:'#ff7f509b',
        white: '#fff',
        body:'#f0f1f7',
        header: '#fff',
      },
      fontColor: {
        main: '#ff750f',
        main_alt: '#ff6348',
        desc: '#57606f',
        title: '#111',
        body: '#333',
        white: '#fff',
      },
      borderColor: {
        main: '#ff750f',
        white: '#fff',
        body: 'lightgray',
      },
      mobile: '415px',
      tablet: '821px'
}

export const DarkTheme = {
    bgColor: {
        main: '#ff750f',
        main_light:'#ff7f509b',
        white: '#fff',
        body:'#2B2B2B',
        header:'#161616',
      },
      fontColor: {
        main: '#ff750f',
        main_alt: '#ff6348',
        desc: '#747d8c',
        title: '#fff',
        body: '#eee',
        white: '#fff',
      },
      borderColor: {
        main: '#ff750f',
        white: '#fff',
        body: 'rgb(250 250 250 / .07)',
      },
      mobile: '415px',
      tablet: '821px'
}

export const Globalstyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body {
        background-color: ${({theme}) => theme.bgColor.body};
        min-height: 100vh;
        max-width: 100%;
    }

    button {
        cursor: pointer;
        border: 0;
    }

    a {
        text-decoration: none;
    }
`;