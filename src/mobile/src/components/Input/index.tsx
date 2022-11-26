import {View, TextInput, TextInputProps, Text} from 'react-native';
import {THEME} from '../../theme';

import {styles} from './styles';

interface InputProps extends TextInputProps {
    label: string;
}

export function Input(props: InputProps) {
    return (
        <View>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                style={styles.input}
                {...props}
                autoComplete='off'
                placeholderTextColor={THEME.COLORS.CAPTION_500}
                selectionColor={THEME.COLORS.PRIMARY}
            />
        </View>
    );
}
