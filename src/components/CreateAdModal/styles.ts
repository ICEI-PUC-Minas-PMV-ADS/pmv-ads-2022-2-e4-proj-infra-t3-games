import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.COLORS.OVERLAY,
        paddingHorizontal: 32,
    },
    content: {
        width: '100%',
        backgroundColor: THEME.COLORS.SHAPE,
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 32,
    },
    closeIcon: {
        alignSelf: 'flex-end',
        marginTop: 16,
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.LG,
        fontFamily: THEME.FONT_FAMILY.BLACK,
        marginBottom: 32,
    },
    label: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        marginBottom: 8,
        fontSize: THEME.FONT_SIZE.MD,
    },
    picker: {
        backgroundColor: THEME.COLORS.BACKGROUND_900,
        marginBottom: 8,
    },
    pickerItem: {
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        color: THEME.COLORS.TEXT,
        backgroundColor: THEME.COLORS.BACKGROUND_900,
    },
    daysGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dayButton: {
        width: 45,
        marginBottom: 8,
    },
    hourGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    hourTitle: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        marginBottom: 2,
        fontSize: THEME.FONT_SIZE.SM,
    },
    hourButton: {
        width: '45%',
        fontSize: THEME.FONT_SIZE.MD,
    },
    checkboxGroup: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    checkbox: {
        marginRight: 8,
    },
    checkboxText: {
        fontSize: THEME.FONT_SIZE.SM,
        color: THEME.COLORS.TEXT,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32,
    },
    buttonCancel: {
        width: 120,
        height: 50,
        borderRadius: 6,
        backgroundColor: THEME.COLORS.CAPTION_500,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    buttonFind: {
        width: 200,
        height: 50,
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
