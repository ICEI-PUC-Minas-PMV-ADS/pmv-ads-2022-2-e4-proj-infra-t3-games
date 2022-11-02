import React, { ComponentPropsWithoutRef } from 'react';
import { StyledForm } from './style';

const Form = ({ children, ...props }: ComponentPropsWithoutRef<'form'>) => {
    return <StyledForm {...props}>{children}</StyledForm>;
};

export default Form;
