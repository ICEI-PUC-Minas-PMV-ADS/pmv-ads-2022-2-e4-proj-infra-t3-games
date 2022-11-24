import {
    ImageBackground,
    ImageSourcePropType,
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';

import {THEME} from '../../theme';
import {styles} from './styles';

export interface GameCardProps {
    id: string;
    nome: string;
    url_imagem: string;
    genero: string;
    descricao: string;
    url_fullImagem: string;
}

interface Props extends TouchableOpacityProps {
    data: GameCardProps;
}

export function GameCard({data, ...rest}: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <ImageBackground
                style={styles.cover}
                source={{uri: data.url_imagem}}
            >
                <LinearGradient
                    colors={THEME.COLORS.FOOTER}
                    style={styles.footer}
                >
                    <Text style={styles.name}>{data.nome}</Text>
                    <Text style={styles.ads}>Gênero: {data.genero}</Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
}
