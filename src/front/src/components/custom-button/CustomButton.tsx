import {Button, CircularProgress } from '@mui/material';
import React from 'react';

interface ICustomButtonProps {
    variant?: "text" | "contained" | "outlined";
    fullWidth?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
}

export const CustomButton: React.FC<ICustomButtonProps> = (props) => {
    return(
        <Button
        variant={props.variant}
        fullWidth
        disabled={props.disabled}
        onClick={props.onClick}
        endIcon={
            props.disabled ? (
                <CircularProgress
                    variant='indeterminate'
                    color='inherit'
                    size={20}
                />
            ) : undefined
        }
    >
        {props.children}
    </Button>
    );
}