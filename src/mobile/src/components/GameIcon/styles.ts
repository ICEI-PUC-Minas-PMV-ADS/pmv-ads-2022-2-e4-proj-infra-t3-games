import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
    container: {
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 22,
    },
    cover: {
        width: 160,
        height: 160,
        borderRadius: 160 / 2,
    },
    footer: {
        width: 160,
        marginTop: 12,
        paddingHorizontal: 6,
    },
    name: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        textAlign: 'center',
    },
});
