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
    _renderNewsCard = ({ item }: any) => {
        return <NewsListCard
            data={item}
        />
    }
    render() {
        const { storiesItem } = this.props
        return <View style={styles.viewWrapper}>
            <View style={styles.headerTitleContainer}><Text style={styles.headerTitle}>NewsHacker</Text></View>
            <FlatList
                keyExtractor={() => Math.random().toString()}
                data={storiesItem}
                style={styles.container}
                showsVerticalScrollIndicator={true}
                indicatorStyle='black'
                renderItem={this._renderNewsCard}
            />
        </View>
    }
}

const styles = StyleSheet.create({
    viewWrapper: {
        flex: 1,
        backgroundColor: Colors.cherryPie
    },
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    headerTitleContainer: {
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    headerTitle: {
        fontFamily: Fonts.bold,
        fontSize: 40,
        color: Colors.chileanHeath
    }
})