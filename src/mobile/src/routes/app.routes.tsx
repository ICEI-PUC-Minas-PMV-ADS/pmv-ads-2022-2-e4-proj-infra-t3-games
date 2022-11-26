import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../screens/Home';
import {Game} from '../screens/Game';
import {Login} from '../screens/Login';
import {Cadastro} from '../screens/Cadastro';
import {Code} from '../screens/Code';
import {Biblioteca} from '../screens/Biblioteca';
import {useEffect, useState} from 'react';
import {Auth, Hub} from 'aws-amplify';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {styles} from './styles';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
    const [user, setUser] = useState<any>(undefined);

    const checkUser = async () => {
        try {
            const authUser = await Auth.currentAuthenticatedUser({
                bypassCache: true,
            });
            setUser(authUser);
        } catch (error: any) {
            setUser(null);
        }
    };

    useEffect(() => {
        checkUser();
    }, []);

    useEffect(() => {
        const listener = (data: any) => {
            if (
                data.payload.event === 'signIn' ||
                data.payload.event === 'signOut'
            ) {
                checkUser();
            }
        };
        Hub.listen('auth', listener);
    }, []);

    if (user === undefined) {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        );
    }
    return (
        <Navigator screenOptions={{headerShown: false}}>
            {user ? (
                <>
                    <Screen name='home' component={Home} />
                    <Screen name='game' component={Game} />
                    <Screen name='biblioteca' component={Biblioteca} />
                </>
            ) : (
                <>
                    <Screen name='login' component={Login} />
                    <Screen name='cadastro' component={Cadastro} />
                    <Screen name='code' component={Code} />
                </>
            )}
        </Navigator>
    );
}
