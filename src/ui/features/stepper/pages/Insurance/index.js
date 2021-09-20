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

export default function InsurancePage() {
    return (
        <View style={styles.root}>
            <FlatList
                ListHeaderComponent={
                    <View style={styles.item}>
                        <View style={styles.circleNumberItem}>
                            <Text style={styles.numberItem}>1</Text>
                        </View>
                        <Text style={styles.titleItem} numberOfLines={2}  >What type of insurance are you looking for?</Text>
                    </View>
                }
                data={[
                    {
                        title: 'Professional Liability',
                        subTitle: 'Erros & Omissions (E&O insurance)',
                        icon: 'bag-checked',
                    },
                    {
                        title: 'General Liability',
                        subTitle: 'Help mitigate against loss (CGL insurance)',
                        icon: 'weather-lightning-rainy',
                    },
                    {
                        title: 'Business Owner’s Policy',
                        subTitle: 'The complete package (BOP)',
                        icon: 'cube',
                    },
                    {
                        title: 'Cyber',
                        subTitle: 'Internet-bsed risks (CLIC)',
                        icon: 'wifi',
                    },


                ]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item,index}) => <TouchableOpacity
                    keyExtractor={(item, index) => index.toString()}>
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
                            title={item.title}
                            subtitle={item.subTitle}
                            left={props => <Avatar.Icon style={styles.avatarItem} size={50} color="#0074D9" icon={item.icon}/>} />
                    </Card>
                </TouchableOpacity>
                }
                ListFooterComponent={
                    <>
                        <View style={styles.item}>
                            <View style={styles.circleNumberNextItem}>
                                <Text style={styles.numberNextItem}>2</Text>
                            </View>
                            <Text style={styles.titleNextItem}>What’s the name of your business?</Text>
                        </View>
                        <View style={{height:20}}/>
                </>
                }
            />
        </View>
    );
}