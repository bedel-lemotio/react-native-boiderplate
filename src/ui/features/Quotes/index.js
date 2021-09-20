import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList,ScrollView} from 'react-native';
import {Appbar, Avatar, Card, Paragraph, Title} from 'react-native-paper';
import IconFeather from 'react-native-vector-icons/Feather';
import { Rating, AirbnbRating } from 'react-native-ratings';
import  styles from './styles'
import images from "../../../constants/images";


export default function ({ navigation }) {

    return (
        <View style={styles.root}>
            <Appbar.Header style={styles.appbar}>
                <Appbar.Action style={styles.appbarIcon} icon="umbrella"  color="#0074D9" onPress={() => {}} />
                <Appbar.Content style={styles.appbarTitle} subtitle="Umbrella Hub" color="#0074D9" size={14}  />
                <Appbar.Action style={styles.appbarIcon} icon="close"  color="#0074D9" onPress={() => {}} />
            </Appbar.Header>

            <FlatList
                ListHeaderComponent={
                    <View style={styles.containerBody}>
                        <View style={styles.circleUmbrella}>
                            <IconFeather name="wind" size={50} color="#0074D9" />
                        </View>
                        <Text style={styles.title}>Fast like the wind!</Text>
                        <View style={{height:20}}/>
                        <Text style={styles.titleItem}>We dove deep through the internet to get you these great quotes</Text>
                        <View style={{height:20}}/>
                    </View>
                }
                data={[
                    {
                        image: images.images.progressive,
                        rating: 3.5,
                        quantity: '$120/mo',
                        price: '$1440 per year',
                    },
                    {
                        image: images.images.geico,
                        rating: 5,
                        quantity: '$125/mo',
                        price: '$1440 per year',
                    },
                    {
                        image: images.images.state_farm,
                        rating: 4,
                        quantity: '$120/mo',
                        price: '$1440 per year',
                    },
                ]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item,index}) => <TouchableOpacity  style={{alignSelf:'center', marginBottom:20}}>
                    <Card style={styles.flipCardContainer}>
                        <Card.Content style={styles.cardContent}>
                            <View style={{height:10}}/>
                            <View>
                                <Image
                                    resizeMode='contain'
                                    style={styles.imageCard}
                                    source={item.image}
                                />
                                <View style={{height:20}}/>
                                <AirbnbRating
                                    count={5}
                                    type='star'
                                    showRating={false}
                                    selectedColor='#0074D9'
                                    defaultRating={item.rating}
                                    size={20}
                                />
                            </View>
                            <View style={{height:20}}/>
                            <View style={{alignSelf:'center'}}>
                                <Title style={{alignSelf:'center'}}>{item.quantity}</Title>
                                <Paragraph style={{alignSelf:'center',color:'#828282'}}>{item.price}</Paragraph>
                            </View>
                            <View style={{height:40}}/>
                            <TouchableOpacity
                                style={styles.button}
                                // onPress={goTo}
                            >
                                <Text style={styles.text}>BUY NOW</Text>
                            </TouchableOpacity>
                            <View style={{height:10}}/>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>
                }

                ListFooterComponent={
                    <>
                        <View style={{height:30}}/>
                        <Text style={styles.titleSummary}>Your Summary:</Text>
                        <View style={{height:10}}/>
                        <Text style={styles.contentSummary}>
                            <Text style={styles.textSummaryUnderline}>Hoop Heaven</Text>
                            <Text style={styles.textSummary}>, established on </Text>
                            <Text style={styles.textSummaryUnderline}>Dec 12 2012,</Text>
                            <Text style={styles.textSummary}> and operating out of </Text>
                            <Text style={styles.textSummaryUnderline}>Texas</Text>
                            <Text style={styles.textSummary}>, is interested in purchasing </Text>
                            <Text style={styles.textSummaryUnderline}>cyber insurance</Text>
                            <Text style={styles.textSummaryUnderline}> .{"\n\n"}</Text>


                            <Text style={styles.textSummary}>Hoop Heaven would also like </Text>
                            <Text style={styles.textSummaryUnderline}>building coverage included </Text>
                            <Text style={styles.textSummary}>in their policy. {"\n\n"}</Text>

                            <Text style={styles.textSummary}>Hoop Heaven does their own</Text>
                            <Text style={styles.textSummaryUnderline}>designs in-house. {"\n\n"}</Text>


                            <Text style={styles.textSummary}>Hoop Heaven can be reached at </Text>
                            <Text style={styles.textSummaryUnderline}>231-676-4324.</Text>

                        </Text>
                        <View style={{height:20}}/>
                    </>
                }
            />

        </View>

    );
}
