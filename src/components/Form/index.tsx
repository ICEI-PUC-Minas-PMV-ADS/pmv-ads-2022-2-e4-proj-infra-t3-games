import React, { ComponentPropsWithoutRef } from 'react';
import { StyledForm } from './style';

const Form = ({ children }: ComponentPropsWithoutRef<'form'>) => {
    return <StyledForm>{children}</StyledForm>;
};

export default Form;
