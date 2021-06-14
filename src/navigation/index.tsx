import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from '../../types'
import NewsContainer from '../redux/containers/news.container'

export const Navigation = () => {
    return <NavigationContainer>
        <RootStack />
    </NavigationContainer>
}

const Stack = createStackNavigator<RootStackParamList>()
const RootStack = () => {
    return <Stack.Navigator initialRouteName='News' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="News" component={NewsContainer} options={{ headerTitle: 'News' }} />
    </Stack.Navigator>
}