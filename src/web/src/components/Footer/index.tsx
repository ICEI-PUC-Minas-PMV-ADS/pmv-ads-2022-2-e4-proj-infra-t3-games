import React, { ComponentPropsWithoutRef } from 'react';
import { StyledFooter } from './style';

const Footer = ({ children }: ComponentPropsWithoutRef<'footer'>) => {
    return <StyledFooter>{children}</StyledFooter>;
};

export default Footer;
