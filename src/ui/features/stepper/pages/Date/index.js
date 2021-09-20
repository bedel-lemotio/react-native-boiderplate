import React from 'react';
import {View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, FlatList,} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import  styles from './styles'
import { IconButton} from "react-native-paper";
import metrics from "./../../../../../constants/metrics";

class DatePage extends  React.Component {
    constructor (props) {
        super(props);
        this.state = {hasFocus: false};

    }


    render () {
        const goTo = () => this.props.navigation.navigate('Payment');

        return (
            <View style={styles.root}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.item}>
                        <View style={styles.circleNumberItem}>
                            <Text style={styles.numberItem}>7</Text>
                        </View>
                        <Text style={styles.titleItem} numberOfLines={2}  >When did your business begin?</Text>
                    </View>
                    <View>
                        <View style={{
                            height: 40,
                            flex:1,
                            flexDirection:"row",
                            justifyContent:'center'
                        }}>
                            <TextInput
                                style={{
                                    width: metrics.screenWidth-90,
                                    height: 40,
                                    borderBottomWidth: this.state.borderBottomWidth??1,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    borderColor: this.state.borderColor,
                                    color: '#0074D9',
                                }}
                                placeholder="dd/mm/yyyy"
                                keyboardType="number-pad"
                                onBlur={ () => this.onBlur() }
                                onFocus={ () => this.onFocus() }
                            />
                            <IconButton
                                icon="calendar"
                                color= '#0074D9'
                                size={30}
                                style={styles.footerButton}
                                onPress={() => null}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.buttonOK}>
                            <View style={{
                                flexDirection: 'row',
                                alignContent:'center',
                                justifyContent:'center',
                            }}>
                                <IconFeather name="check" size={20} color="#0074D9" />
                                <Text style={styles.textOK}>OK</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={goTo}
                            >
                            <Text style={styles.text}>GET QUOTES</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
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

export  default  DatePage;
