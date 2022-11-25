import {Image, TouchableOpacityProps, Text, View} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';

import {THEME} from '../../theme';
import {styles} from './styles';
import React from 'react';

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

export function GameIcon({data, ...rest}: Props) {
    return (
        <View style={styles.container} {...rest}>
            <Image style={styles.cover} source={{uri: data.url_imagem}} />
            <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
                <Text style={styles.name}>{data.nome}</Text>
            </LinearGradient>
        </View>
    );
}
