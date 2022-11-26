import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
        * {
            font-family: 'Montserrat', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;

            &::before,
            &::after {
            box-sizing: inherit;
            }

            ::-webkit-scrollbar {
            width: 10px;
            }
            ::-webkit-scrollbar-track {
            background-color: ${theme.colors.lightGrey};
            border-radius: 40px;
            }
            ::-webkit-scrollbar-thumb {
            background: ${theme.colors.cian};
            border-radius: 40px;
            }
        }
    `}
`
