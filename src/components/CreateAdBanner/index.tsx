import {MagnifyingGlassPlus} from 'phosphor-react-native';
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

export function CreateAdBanner({togglePress}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Não encontrou seu duo?</Text>
            <Text style={styles.subtitle}>
                Publique um anúncio para encontrar novos players
            </Text>
            <TouchableOpacity style={styles.button} onPress={togglePress}>
                <MagnifyingGlassPlus size={24} color={THEME.COLORS.TEXT} />
                <Text style={styles.buttonTitle}>Publicar anúncio</Text>
            </TouchableOpacity>
        </View>
    );
}
