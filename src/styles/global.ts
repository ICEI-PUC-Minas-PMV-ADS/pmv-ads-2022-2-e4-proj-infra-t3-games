import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
        * {
            font-family: 'Inter', sans-serif;
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

        body {
            background: #211b23;
        }

        .swiper-pagination {
            top: 0px;
            text-align: right;
            z-index: 0;
        }

        .swiper-pagination-bullet {
            opacity: 0.5;
            background: #ffffff;
        }

        .swiper-pagination-bullet-active {
            opacity: 1;
            background: #7800b3;
        }
    `}
`;
