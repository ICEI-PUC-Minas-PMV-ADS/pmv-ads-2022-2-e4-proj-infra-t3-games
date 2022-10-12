
interface IInputLoginProps{
    label: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
}

export const InputLabel: React.FC<IInputLoginProps> = (props) => {

    return (
        <label>
            <span> {props.label} </span>
            <input
                type={props.type}
                value={props.value}
                onChange={e => props.onChange(e.target.value)} />
        </label>
    );
}