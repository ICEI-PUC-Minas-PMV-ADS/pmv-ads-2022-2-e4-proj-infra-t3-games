import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center'},
    scrollview: {alignItems: 'center'},
    logo: {
        maxWidth: 120,
        maxHeight: 120,
        marginTop: 14,
        marginBottom: 28,
    },
    contentList: {paddingLeft: 32, paddingRight: 64},
    gamesContainer: {flexGrow: 0},
    button: {
        width: 90,
        height: 36,
        paddingHorizontal: 12,
        borderRadius: 6,
        backgroundColor: THEME.COLORS.PRIMARY,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 32,
        alignSelf: 'flex-start',
        marginLeft: 32,
    },
    buttonTitle: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        fontSize: THEME.FONT_SIZE.MD,
    },
});
