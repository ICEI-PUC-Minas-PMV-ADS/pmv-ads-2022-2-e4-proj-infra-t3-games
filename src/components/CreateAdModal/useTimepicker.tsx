import {
    AndroidNativeProps,
    DateTimePickerAndroid,
    DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {useState} from 'react';

export const useTimepicker = () => {
    const [time, setTime] = useState(new Date());
    const [mode, setMode] = useState<AndroidNativeProps['mode']>('time');
    const [show, setShow] = useState(false);

    const onChange = (event: DateTimePickerEvent, selectedHour?: Date) => {
        const currentHour = selectedHour;
        if (currentHour) setTime(currentHour);
    };

    const showMode = (currentMode: AndroidNativeProps['mode']) => {
        DateTimePickerAndroid.open({
            onChange,
            mode: currentMode,
            is24Hour: true,
            value: time,
        });
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return {
        time,
        showTimepicker,
        show,
        mode,
        onChange,
    };
};
