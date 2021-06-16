import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import Fonts from '../constants/Fonts'
import { FontAwesome } from '@expo/vector-icons';
import { convertDateFormat } from '../helper.config';
import * as Linking from 'expo-linking';
import { StoriesItemInterface } from '../redux/types';

interface INewsListCardProps {
    data: StoriesItemInterface
}

export default class NewsListCard extends React.Component<INewsListCardProps>{
    state = {
        showUserDetails: false
    }
    setUserDetails = (item: StoriesItemInterface) => {
        const details = [
            {
                detail: item.author.id, extra: <FontAwesome name="user" size={17} color={Colors.lochmara} />
            },
            {
                detail: item.author.author_karma_score, extra: <FontAwesome name="thumbs-o-up" size={17} color={Colors.carribeanGreen} />
            }]
        return details.map(value => {
            if (!value.detail) return null
            return <View style={styles.innerBottomCardContainer}>
                {value.extra}
                <Text style={styles.innerBottomText}>{value.detail}</Text>
            </View>
        })

    }
    render() {
        const { data } = this.props
        return <View style={styles.cardContainer}>
            <View style={styles.innerCardContainer}>
                <View style={{ flex: 2 }}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text
                        style={styles.creationDateText}><Text
                            style={{
                                fontFamily: Fonts.bold
                            }}>{data.score} points</Text> by <Text
                                style={{
                                    fontFamily: Fonts.bold,
                                    textDecorationLine: 'underline'
                                }}
                                onPress={() => this.setState({ showUserDetails: !this.state.showUserDetails })}
                            >{data.author.id}</Text> {convertDateFormat(data.timestamp)} </Text>
                    <Text
                        style={styles.url} onPress={() => Linking.openURL(data.url)}>{!data.url ? <Text style={{ textDecorationLine: 'none', color: Colors.gray }}>This story does not have link</Text> : data.url}</Text>
                </View>
            </View>
            {this.state.showUserDetails && <View style={styles.bottomCardContainer}>
                {this.setUserDetails(data)}
            </View>}
        </View >
    }
}

const styles = StyleSheet.create({
    url: {
        fontFamily: Fonts.regular,
        fontSize: 16,
        color: Colors.lochmara
    },
    creationDateText: {
        marginVertical: 5,
        fontFamily: Fonts.regular,
        fontSize: 18,
        color: Colors.gray
    },
    title: {
        fontFamily: Fonts.bold,
        fontSize: 20,
        color: Colors.chileanHeath
    },
    innerCardContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        marginVertical: 10,
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
    },
    bottomCardContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderTopColor: Colors.lightGray,
        borderTopWidth: 1,
        marginTop: 15,
        paddingTop: 15
    },
    innerBottomCardContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },
    innerBottomText: {
        fontFamily: Fonts.semiBold,
        fontSize: 18,
        color: Colors.gray,
        marginLeft: 5
    }
})