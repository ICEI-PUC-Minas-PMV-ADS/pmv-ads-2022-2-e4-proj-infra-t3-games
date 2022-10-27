import { ComponentPropsWithoutRef } from 'react';
import StyledButton from './styles';

const Button = ({ children, ...props }: ComponentPropsWithoutRef<'button'>) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
