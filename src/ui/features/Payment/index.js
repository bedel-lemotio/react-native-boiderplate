import React  from 'react';
import {View, Text, TouchableOpacity, Image, FlatList, ScrollView, SafeAreaView, TextInput} from 'react-native';
import {Appbar, Avatar, Card, Paragraph, Title} from 'react-native-paper';
import IconFeather from 'react-native-vector-icons/Feather';
import { Rating, AirbnbRating } from 'react-native-ratings';
import  styles from './styles'
import images from "../../../constants/images";
import metrics from "../../../constants/metrics";


class PaymentScreen extends  React.Component {
    constructor (props) {
        super(props);
        this.state = {hasFocus: false};
    }


    render () {
        let data = [
            {      value: 'Banana',    },
            {      value: 'Mango',    },
            {      value: 'Pear',    }];

        return (
            <View style={styles.root}>
                <Appbar.Header style={styles.appbar}>
                    <Appbar.Action style={styles.appbarIcon} icon="umbrella"  color="#0074D9" onPress={() => _handleMore()} />
                    <Appbar.Content style={styles.appbarTitle} subtitle="Umbrella Hub" color="#0074D9" size={14}  />
                    <Appbar.Action style={styles.appbarIcon} icon="close"  color="#0074D9" onPress={() => _handleMore()} />
                </Appbar.Header>
                <FlatList
                    ListHeaderComponent={
                        <View style={styles.containerBody}>
                            <View style={styles.circleUmbrella}>
                                <IconFeather name="credit-card" size={50} color="#0074D9" />
                            </View>
                            <Text style={styles.title}>Woah, slow down there cowboy!</Text>
                            <View style={{height:20}}/>
                            <Text style={styles.titleItem}>We’re gonna need to see some payment info</Text>
                            <View style={{height:20}}/>


                            <View>
                                <View  style={{flexDirection:'row',width: metrics.screenWidth-60,justifyContent:'space-between', flexWrap: "wrap",}}>
                                    <Text style={styles.labelInput}>Credit Card Number</Text>
                                    <View style={{flexDirection:'row', width:60}}>
                                        <Image
                                            resizeMode='contain'
                                            style={styles.imagePayment}
                                            source={images.images.american_express}
                                        />
                                        <Image
                                            resizeMode='contain'
                                            style={styles.imagePayment}
                                            source={images.images.new_visa_big}
                                        />
                                        <Image
                                            resizeMode='contain'
                                            style={styles.imagePayment}
                                            source={images.images.mastercard}
                                        />
                                    </View>
                                </View>

                                <View style={{height:10}}/>
                                <TextInput
                                    style={{
                                        height: 40,
                                        borderBottomWidth: this.state.borderBottomWidth??1,
                                        paddingTop: 10,
                                        paddingBottom: 10,
                                        width: metrics.screenWidth-60,
                                        borderColor: this.state.borderColor,
                                        color: '#0074D9',
                                    }}
                                    placeholder="Enter"
                                    keyboardType="numeric"
                                    onBlur={ () => this.onBlur() }
                                    onFocus={ () => this.onFocus() }
                                />
                            </View>
                            <View style={{height:50}}/>
                            <View style={{flexDirection:'row', width: metrics.screenWidth-60,}}>
                                <View style={{flex:1}}>
                                    <Text style={styles.labelInput}>Expiry Date</Text>
                                    <View style={{height:10}}/>
                                    <TextInput
                                        style={{
                                            height: 40,
                                            borderBottomWidth: this.state.borderBottomWidth??1,
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            borderColor: this.state.borderColor,
                                            color: '#0074D9',
                                        }}
                                        placeholder="Enter"
                                        keyboardType="numeric"
                                        onBlur={ () => this.onBlur() }
                                        onFocus={ () => this.onFocus() }
                                    />
                                </View>
                                <View style={{width:30}}/>
                                <View style={{flex:1}}>
                                    <Text style={styles.labelInput}>CVV</Text>
                                    <View style={{height:10}}/>
                                    <TextInput
                                        style={{
                                            height: 40,
                                            borderBottomWidth: this.state.borderBottomWidth??1,
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            borderColor: this.state.borderColor,
                                            color: '#0074D9',
                                        }}
                                        placeholder="Enter"
                                        keyboardType="numeric"
                                        onBlur={ () => this.onBlur() }
                                        onFocus={ () => this.onFocus() }
                                    />
                                </View>
                            </View>
                            <View style={{height:50}}/>
                        </View>
                    }
                    data={[
                        {
                            image: images.images.progressive,
                            rating: 3.5,
                            quantity: '$120/mo',
                            price: '$1440 per year',
                        },
                    ]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item,index}) => <View>
                        <Text style={styles.description}>selected coverage</Text>
                        <TouchableOpacity  style={{alignSelf:'center', marginBottom:20}}>
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
                                            selectedColor='#0074D9'
                                            showRating={false}
                                            defaultRating={item.rating}
                                            size={20}
                                        />
                                    </View>
                                    <View style={{height:50}}/>
                                    <View style={{alignSelf:'center'}}>
                                        <Title style={{alignSelf:'center'}}>{item.quantity}</Title>
                                        <Paragraph style={{alignSelf:'center',color:'#828282'}}>{item.price}</Paragraph>
                                    </View>
                                </Card.Content>
                            </Card>
                        </TouchableOpacity>
                    </View>
                    }
                    ListFooterComponent={
                        <>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.text}>COMPLETE PURCHASE</Text>
                            </TouchableOpacity>
                            <View style={{height:20}}/>
                        </>
                    }
                />
            </View>
        );
    }

    onFocus() {
        this.setState({
            borderColor: '#0074D9',
            borderBottomWidth: 2,
        })
    }

    onBlur() {
        this.setState({
            borderColor: '#333333',
            borderBottomWidth: 1,
        })
    }

}

export  default  PaymentScreen;
