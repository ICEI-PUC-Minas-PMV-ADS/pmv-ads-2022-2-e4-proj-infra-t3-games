import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { StyledDiv, StyledInput, ErrorMessage } from './style';

type InputProps = {
    error?: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ error, ...props }, ref) {
    return (
        <StyledDiv>
            <StyledInput {...props} ref={ref} />
            <ErrorMessage>{error}</ErrorMessage>
        </StyledDiv>
    );
});
export default Input;
