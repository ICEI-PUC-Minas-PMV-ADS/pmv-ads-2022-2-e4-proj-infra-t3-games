import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../screens/Home';
import {Game} from '../screens/Game';
import {Login} from '../screens/Login';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name='login' component={Login} />
            <Screen name='home' component={Home} />
            <Screen name='game' component={Game} />
        </Navigator>
    );
}
