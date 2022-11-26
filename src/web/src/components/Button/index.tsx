import { ComponentPropsWithoutRef } from 'react';
import StyledButton from './style';

const Button = ({ children, ...props }: ComponentPropsWithoutRef<'button'>) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
