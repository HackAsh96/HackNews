import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationPropsConfiguration } from '../helper.config'

interface NewsProps {
    navigation: NavigationPropsConfiguration
}

export default class News extends React.Component<NewsProps>{
    render() {
        return <View style={styles.container}>
            <Text>This is the news screen</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})