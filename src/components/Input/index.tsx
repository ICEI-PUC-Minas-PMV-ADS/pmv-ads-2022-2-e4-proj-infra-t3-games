import { ComponentPropsWithoutRef, forwardRef } from 'react';
import StyledInput from './style';

const Input = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<'input'>>(function Input(
    { ...props },
    ref,
) {
    return <StyledInput {...props} ref={ref} />;
});
export default Input;
