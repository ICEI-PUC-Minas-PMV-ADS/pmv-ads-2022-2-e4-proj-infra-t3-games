import {GameController, MagnifyingGlassPlus} from 'phosphor-react-native';
import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native';
import {THEME} from '../../theme';

import {styles} from './styles';

interface Props extends TouchableOpacityProps {
    togglePress: () => void;
}

export function BibliotecaBanner({togglePress}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Acesse a biblioteca</Text>
            <Text style={styles.subtitle}>Sua coleção de jogos está aqui</Text>
            <TouchableOpacity style={styles.button} onPress={togglePress}>
                <GameController size={24} color={THEME.COLORS.TEXT} />
                <Text style={styles.buttonTitle}>Biblioteca</Text>
            </TouchableOpacity>
        </View>
    );
}
