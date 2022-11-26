import {Background} from './src/components/Background';
import {StatusBar} from 'react-native';
import {
    useFonts,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
} from '@expo-google-fonts/inter';

import {Routes} from './src/routes/';
import {Loading} from './src/components/Loading';

import {Amplify} from 'aws-amplify';

import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);

const signUpConfig = {
    hideAllDefaults: true,
    signUpFields: [
        {
            label: 'Email',
            key: 'username',
            required: true,
            displayOrder: 1,
            type: 'string',
            placeholder: 'Email',
        },
        {
            label: 'Senha',
            key: 'password',
            required: true,
            displayOrder: 2,
            type: 'password',
            placeholder: 'Senha',
        },
    ],
};

// const customTheme = {
//     ...AmplifyTheme,
//     container: {
//         ...AmplifyTheme.container,
//         flexDirection: 'row',
//         backgroundColor: '',
//     },
//     section: {
//         ...AmplifyTheme.section,
//         paddingHorizontal: 32,
//     },
//     button: {
//         ...AmplifyTheme.button,
//         backgroundColor: THEME.COLORS.PRIMARY,
//         borderRadius: 6,
//         width: 200,
//         alignSelf: 'center',
//     },
//     buttonDisabled: {
//         ...AmplifyTheme.buttonDisabled,
//         backgroundColor: THEME.COLORS.PRIMARY,
//         borderRadius: 6,
//         width: 200,
//         alignSelf: 'center',
//         opacity: 0.5,
//     },
//     sectionFooterLink: {
//         ...AmplifyTheme.sectionFooterLink,
//         color: THEME.COLORS.CAPTION_500,
//     },
//     inputLabel: {
//         ...AmplifyTheme.inputLabel,
//         marginBottom: 8,
//         fontSize: THEME.FONT_SIZE.MD,
//     },
//     input: {
//         ...AmplifyTheme.input,
//         backgroundColor: THEME.COLORS.CAPTION_300,
//         color: THEME.COLORS.BACKGROUND_900,
//         paddingVertical: 12,
//         paddingHorizontal: 16,
//         marginBottom: 8,
//         borderRadius: 6,
//         fontSize: THEME.FONT_SIZE.MD,
//     },
// };

const App: any = () => {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_900Black,
    });
    return (
        <Background>
            <StatusBar
                barStyle={'light-content'}
                backgroundColor='transparent'
                translucent
            />
            {fontsLoaded ? <Routes /> : <Loading />}
        </Background>
    );
};

export default App;
