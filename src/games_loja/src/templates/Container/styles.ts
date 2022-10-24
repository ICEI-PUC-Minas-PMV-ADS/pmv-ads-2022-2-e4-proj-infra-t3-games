import styled, { css } from 'styled-components'
import myImage from '../../img/Component 1 (2).svg';

export const Container = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex: 1;

    background-color: ${theme.colors.lightGrey};
  `}
`
export const Back = styled.img.attrs({
    src: `${myImage}`
  })`
position: absolute;
width: 2169px;
height: 1076.5px;

  `;