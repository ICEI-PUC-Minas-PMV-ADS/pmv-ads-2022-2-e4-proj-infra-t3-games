import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
    label: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        marginBottom: 8,
        fontSize: THEME.FONT_SIZE.MD,
    },
    input: {
        minWidth: '100%',
        backgroundColor: THEME.COLORS.CAPTION_300,
        color: THEME.COLORS.BACKGROUND_900,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 8,
        borderRadius: 6,
        fontSize: THEME.FONT_SIZE.MD,
    },
});
