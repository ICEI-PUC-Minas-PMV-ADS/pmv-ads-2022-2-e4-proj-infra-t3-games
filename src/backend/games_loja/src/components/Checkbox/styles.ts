import styled, { css } from 'styled-components'
import { CheckboxProps } from '.'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
`

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.cian};
    border-radius: 0.2rem;
    transition: background border 0.1s;
    position: relative;
    outline: none;

    &:before {
      content: '';
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;
      transition: 0.1s;
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primaryBlue};
    }

    &:checked {
      border-color: ${theme.colors.primaryBlue};
      background: ${theme.colors.primaryBlue};

      &:before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    cursor: pointer;
    padding-left: 0.8rem;
    color: ${theme.colors.grey};
    font-weight: 500;
    line-height: 1.8rem;
  `}
`
