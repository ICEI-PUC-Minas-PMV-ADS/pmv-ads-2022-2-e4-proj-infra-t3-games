import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    scrollview: {alignItems: 'center'},
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 32,
        marginTop: 28,
        justifyContent: 'space-between',
    },
    logo: {
        width: 80,
        height: 80,
    },
    right: {
        width: 20,
        height: 20,
        marginBottom: 20,
    },
    coverContainer: {
        width: '100%',
        paddingHorizontal: 32,
    },
    cover: {
        width: '100%',
        height: 230,
        borderRadius: 8,
        marginTop: 32,
    },
    containerList: {
        width: '100%',
    },
    contentList: {
        paddingLeft: 32,
        paddingRight: 64,
        alignItems: 'flex-start',
    },
    emptyListContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyListText: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
    },
    button: {
        width: 200,
        height: 60,
        paddingHorizontal: 32,
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
    },
});
