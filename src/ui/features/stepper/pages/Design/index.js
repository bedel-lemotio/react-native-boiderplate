import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Icon,
    FlatList,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { Avatar , Card,} from 'react-native-paper';

import  styles from './styles'

export default function DesignPage() {
    return (
        <View style={styles.root}>
            <ScrollView style={styles.scrollView}>
                <View>
                    <View style={styles.item}>
                        <View style={styles.circleNumberItem}>
                            <Text style={styles.numberItem}>1</Text>
                        </View>
                        <Text style={styles.titleItem} numberOfLines={2}  >What type of insurance are you looking for?</Text>
                    </View>
                    <Text style={{
                        marginBottom: 20,
                        paddingLeft: 55,
                        flex:1,
                    }}>Does your business provide design services?</Text>
                    <TouchableOpacity>
                        <Card style={styles.flipCardContainer}>
                            <Card.Title
                                style={styles.flipCardContainerTitle}
                                titleStyle={{
                                    color: '#333333',
                                }}
                                subtitleStyle={{
                                    color: '#333333',
                                }}
                                leftStyle={{
                                    padding:0,
                                    margin:0,
                                }}
                                title='Yes'
                                subtitle='We do designs in-house'
                                left={props => <Avatar.Icon style={styles.avatarItem} size={50} color="#0074D9" icon='water-outline'/>} />
                        </Card>
                    </TouchableOpacity>
                    <View style={{
                        marginTop: 20,
                    }}/>
                    <TouchableOpacity>
                        <Card style={styles.flipCardContainer}>
                            <Card.Title
                                style={styles.flipCardContainerTitle}
                                titleStyle={{
                                    color: '#333333',
                                }}
                                subtitleStyle={{
                                    color: '#333333',
                                }}
                                leftStyle={{
                                    padding:0,
                                    margin:0,
                                }}
                                title='No'
                                subtitle='We’re gonna need some assistance'
                                left={props => <Avatar.Icon style={styles.avatarItem} size={50} color="#0074D9" icon='desktop-mac'/>} />
                        </Card>
                    </TouchableOpacity>

                    <View style={styles.item}>
                        <View style={styles.circleNumberNextItem}>
                            <Text style={styles.numberNextItem}>2</Text>
                        </View>
                        <Text style={styles.titleNextItem}>What’s the name of your business?</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}