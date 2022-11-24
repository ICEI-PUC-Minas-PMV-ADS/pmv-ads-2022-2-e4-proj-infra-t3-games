import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
    container: {},
    label: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        marginBottom: 8,
        fontSize: THEME.FONT_SIZE.MD,
    },
    input: {
        backgroundColor: THEME.COLORS.BACKGROUND_900,
        color: THEME.COLORS.TEXT,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 8,
        fontSize: THEME.FONT_SIZE.MD,
        position: 'relative',
    },
});
