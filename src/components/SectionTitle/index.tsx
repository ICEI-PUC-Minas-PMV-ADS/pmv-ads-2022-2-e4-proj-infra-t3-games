import React, { ComponentPropsWithoutRef } from 'react';
import { StyledTitle, TitleWrapper } from './style';

const SectionTitle = ({ children }: ComponentPropsWithoutRef<'h2'>) => {
    return (
        <TitleWrapper>
            <StyledTitle>{children}</StyledTitle>
        </TitleWrapper>
    );
};

export default SectionTitle;
