import { ComponentPropsWithoutRef } from 'react';
import StyledTitle from './style';

const Title = ({ children }: ComponentPropsWithoutRef<'h1'>) => {
    return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
