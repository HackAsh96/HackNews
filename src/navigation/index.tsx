import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from '../../types'
import News from '../screens/News.screen'

export const Navigation = () => {
    return <NavigationContainer>
        <RootStack />
    </NavigationContainer>
}

const Stack = createStackNavigator<RootStackParamList>()

const RootStack = () => {
    return <Stack.Navigator initialRouteName='News' screenOptions={{ headerShown: true }}>
        <Stack.Screen name="News" component={News} options={{ headerTitle: 'News' }} />
    </Stack.Navigator>
}