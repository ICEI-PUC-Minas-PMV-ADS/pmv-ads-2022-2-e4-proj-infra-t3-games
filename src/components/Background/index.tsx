import {ImageBackground} from 'react-native';
import {styles} from './styles';

import backgroundImg from '../../assets/background.jpg';
import {ReactNode} from 'react';

interface Props {
    children: ReactNode;
}

export function Background({children}: Props) {
    return (
        <ImageBackground
            source={backgroundImg}
            defaultSource={backgroundImg}
            style={styles.container}
        >
            {children}
        </ImageBackground>
    );
}
