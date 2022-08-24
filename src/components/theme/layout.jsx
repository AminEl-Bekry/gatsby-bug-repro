import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Header from './header/header.component'

// importing fonts
import "@fontsource/barlow/100.css"
import "@fontsource/barlow/200.css"
import "@fontsource/barlow/300.css"
import "@fontsource/barlow/400.css"
import "@fontsource/barlow/500.css"
import "@fontsource/barlow/600.css"
import "@fontsource/barlow/700.css"
import "@fontsource/barlow/800.css"
import "@fontsource/barlow/900.css"
import "@fontsource/barlow-semi-condensed/400.css"
import "@fontsource/barlow-semi-condensed/500.css"
import "@fontsource/barlow-semi-condensed/600.css"
import "@fontsource/barlow-semi-condensed/700.css"
import "@fontsource/barlow-semi-condensed/800.css"
import "@fontsource/barlow-semi-condensed/900.css"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    body {
        background-color:#1C1C26;
        font-family: 'Barlow';
        position: relative;
    }

    h1 {
        font-size: 2rem;
        font-weight: 900;
        color: white;

        @media screen and (min-width: 901px) {
            font-size: 5rem;
        }
    }

    h2 {
        font-family: 'Barlow Semi Condensed';
        font-size: 1.625rem;
        font-weight: 700;
        color: white;
    }

    h3 {
        font-family: 'Barlow Semi Condensed';
        font-size: 1.375rem;
        font-weight: 700;
        color: white;
    }

    h4 {
        font-size: 1.25rem;
        font-weight: 500;
        color: white;

        @media screen and (min-width: 901px) {
            font-size: 1.5rem;
        }
    }

    h5 {
        font-size: 1.125rem;
        font-weight: 500;
        color: white;
    }

    h6 {
        font-size: 1rem;
        font-weight: 500;
        color: white;
    }

    p {
        font-size: 1.125rem;
        color: white;
        line-height: 1.6rem;
        font-weight: 300;
    }

    a {
        text-decoration: none;
    }
`

const Layout = ( {children} ) => {
    return (
        <div>
            <GlobalStyle />
            <Header />
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout

