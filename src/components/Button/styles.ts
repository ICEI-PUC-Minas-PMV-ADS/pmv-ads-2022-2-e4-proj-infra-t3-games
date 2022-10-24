import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.lightGrey};
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.4;
  `,
  transparent: (theme: DefaultTheme) => css`
    background-color: transparent;
    border: 1px solid ${theme.colors.cian};
    color: ${theme.colors.grey};
    &:hover {
      background-color: ${theme.colors.white};
    }
  `,
  withIcon: () => css`
    padding: 0.5rem 1.3rem;
    svg {
      width: 1.3rem;
      transform: translateY(-1px);
      & + span {
        margin-left: 8px;
      }
    }
  `
}

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, transparent, disabled, hasIcon }) => css`
    font-size: 18px;
    font-weight: ${theme.font.xbold};
    background-color: ${theme.colors.primaryBlue};
    color: ${theme.colors.white};
    padding: 0.5rem 1.8rem;
    border: none;
    border-radius: ${theme.border.radius};
    cursor: pointer;
    transition: 0.3s;
    position: relative;
    box-shadow: ${theme.shadows.black};
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${theme.colors.yellow};
      transform: translateX(100%);
      transition: all 0.1s linear;
    }

    &:hover {
      background-color: ${theme.colors.hoverBlue};
      &::after {
        transform: translateX(0%);
      }
    }

    ${!!disabled && wrapperModifiers.disabled(theme)}
    ${!!transparent && wrapperModifiers.transparent(theme)}
    ${!!hasIcon && wrapperModifiers.withIcon()};
  `}
`
