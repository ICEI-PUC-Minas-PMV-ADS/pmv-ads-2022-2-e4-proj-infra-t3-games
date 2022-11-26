import { TextField } from '@mui/material';

interface IInputLoginProps {
    margin?: "none" | "dense" | "normal" | undefined;
    autocomplete?: string;
    label?: string;
    id?: string;
    type?: string;
    name?: string;
    value?: string;
    required?: boolean;
    fullWidth?: boolean;
    autoFocus?: boolean;
    onChange: ((value: string) => void)
}

export const InputLabel = (props: IInputLoginProps) => {
    return (
        <TextField
            margin={props.margin}
            required={props.required}
            fullWidth={props.fullWidth}
            id={props.id}
            label={props.label}
            name={props.name}
            autoComplete={props.autocomplete}
            autoFocus={props.autoFocus}
            type={props.type}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
        />
    );
};
