import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from '../../types'
import News from '../screens/News.screen'
import { View } from 'react-native'
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

export const Navigation = () => {
    return <NavigationContainer>
        <RootStack />
    </NavigationContainer>
}

const Stack = createStackNavigator<RootStackParamList>()
const navigatorOptions = {
    headerTitleStyle: {
        fontSize: 25,
        fontFamily: Fonts.bold
    },
    headerTintColor: Colors.white,
    headerShown: true,
    headerBackground: () => <View style={{
        flex: 1,
        backgroundColor: Colors.cornflowerBlue
    }} />
}
const RootStack = () => {
    return <Stack.Navigator initialRouteName='News' screenOptions={navigatorOptions}>
        <Stack.Screen name="News" component={News} options={{ headerTitle: 'News' }} />
    </Stack.Navigator>
}