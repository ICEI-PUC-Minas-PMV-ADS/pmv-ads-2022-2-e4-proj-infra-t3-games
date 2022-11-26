import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  disabled?: boolean
  transparent?: boolean
  icon?: React.ReactNode
  onClick?: any
  hasIcon?: boolean
}

const Button = ({
  children,
  disabled = false,
  icon,
  transparent = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    transparent={transparent}
    disabled={disabled}
    hasIcon={!!icon}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
