import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 32,
        flex: 1,
    },
    title: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.LG,
        fontFamily: THEME.FONT_FAMILY.BLACK,
    },
    subtitle: {
        color: THEME.COLORS.CAPTION_400,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
    },
    button: {
        width: 200,
        height: 60,
        borderRadius: 6,
        backgroundColor: THEME.COLORS.PRIMARY,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    buttonTitle: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        fontSize: THEME.FONT_SIZE.MD,
        marginLeft: 8,
    },
});
