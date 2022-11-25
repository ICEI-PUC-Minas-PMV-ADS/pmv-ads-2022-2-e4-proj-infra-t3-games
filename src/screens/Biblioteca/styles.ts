import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center'},
    scrollview: {alignItems: 'center'},
    logo: {
        maxWidth: 120,
        maxHeight: 120,
        marginTop: 72,
        marginBottom: 28,
    },
    heading: {
        marginTop: 32,
        marginBottom: 22,
        width: '100%',
    },
    contentList: {paddingLeft: 32, paddingRight: 64},
    gamesContainer: {
        flex: 1,
        maxWidth: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    button: {
        width: 90,
        height: 36,
        paddingHorizontal: 12,
        borderRadius: 6,
        backgroundColor: THEME.COLORS.OVERLAY,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 32,
        alignSelf: 'flex-end',
        marginRight: 32,
    },
    buttonTitle: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        fontSize: THEME.FONT_SIZE.MD,
    },
});
