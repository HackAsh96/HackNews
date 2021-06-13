import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { NavigationPropsConfiguration } from '../helper.config'

interface NewsProps {
    navigation: NavigationPropsConfiguration
    storiesItem: Array<object>
}

export default class News extends React.Component<NewsProps>{
    componentDidMount() {
        console.log('sjdfhjdhn', this.props.storiesItem)
    }
    render() {
        return <FlatList data={this.props.storiesItem} renderItem={({ item }) => <Text>{item.author.id}</Text>} />
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})