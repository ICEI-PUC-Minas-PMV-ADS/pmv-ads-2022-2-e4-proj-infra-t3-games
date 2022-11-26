import React, { ComponentPropsWithoutRef } from 'react';
import { StyledGrid } from './style';

const Grid = ({ children }: ComponentPropsWithoutRef<'div'>) => {
    return <StyledGrid>{children}</StyledGrid>;
};

export default Grid;
