import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import Fonts from '../constants/Fonts'
import { AntDesign, Octicons } from '@expo/vector-icons';
import { convertDateFormat } from '../helper.config';

interface INewsListCard {
    data: any
}

export default class NewsListCard extends React.Component<INewsListCard>{
    render() {
        const { data } = this.props
        return <TouchableOpacity onPress={() => null} activeOpacity={0.6} style={styles.cardContainer}>
            <View style={styles.innerCardContainer}>
                <View style={{ flex: 2 }}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text
                        style={styles.creationDateText}>Written by <Text
                            style={{
                                fontFamily: Fonts.bold
                            }}>{data.author.id}</Text> in {convertDateFormat(data.timestamp)} </Text>
                    <Text
                        style={styles.description}>{data.url}</Text>
                </View>
            </View>
        </TouchableOpacity >
    }
}

const styles = StyleSheet.create({
    description: {
        fontFamily: Fonts.regular,
        fontSize: 12,
        color: Colors.lochmara
    },
    creationDateText: {
        marginVertical: 5,
        fontFamily: Fonts.regular,
        fontSize: 13,
        color: Colors.gray
    },
    title: {
        fontFamily: Fonts.regular,
        fontSize: 17,
        color: Colors.lochmara
    },
    innerCardContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        marginHorizontal: 10,
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
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopColor: Colors.lightGray,
        borderTopWidth: 1,
        marginTop: 15,
        paddingTop: 15
    },
    innerBottomCardContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerBottomText: {
        fontFamily: Fonts.semiBold,
        fontSize: 16,
        color: Colors.gray,
        marginLeft: 5
    },
    languageColorContainer: {
        height: 10,
        width: 10,
        borderRadius: 5
    }
})