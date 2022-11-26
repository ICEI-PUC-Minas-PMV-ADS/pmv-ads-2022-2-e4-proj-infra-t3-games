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
