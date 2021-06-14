import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import NewsListCard from '../components/NewsListCard'
import Colors from '../constants/Colors'
import Fonts from '../constants/Fonts'
import { NavigationPropsConfiguration } from '../helper.config'
import { StoriesItemInterface } from '../redux/types'

interface INewsProps {
    navigation: NavigationPropsConfiguration
    storiesItem: StoriesItemInterface[]
}

export default class News extends React.Component<INewsProps>{
    componentDidMount() {
        console.log('sjdfhjdhn', this.props.storiesItem)
    }
    _renderNewsCard = ({ item }: any) => {
        return <NewsListCard
            data={item}
        />
    }
    render() {
        return <View style={{ flex: 1 }}>
            <View style={{ borderWidth: 1, backgroundColor: Colors.cornflowerBlue }}><Text style={{ fontFamily: Fonts.bold, fontSize: 30, color: Colors.cherryPie }}>NewsHacker</Text></View>
            <FlatList
                keyExtractor={() => Math.random().toString()}
                data={this.props.storiesItem}
                style={{ flex: 1, backgroundColor: Colors.cornflowerBlue }}
                showsVerticalScrollIndicator={true}
                indicatorStyle='black'
                renderItem={this._renderNewsCard}
            /></View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})