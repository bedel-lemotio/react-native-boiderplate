import React from 'react';
//import { Dropdown } from 'react-native-material-dropdown';

import {
    View,
    Text,
    Animated,
    SafeAreaView,
    ScrollView, TextInput, TouchableOpacity,
} from 'react-native';

import IconFeather from 'react-native-vector-icons/Feather';

import  styles from './styles'

class BusinessPage extends React.Component {
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
                <ScrollView style={styles.scrollView}>
                    <View style={styles.item}>
                        <View style={styles.circleNumberItem}>
                            <Text style={styles.numberItem}>2</Text>
                        </View>
                        <Text style={styles.titleItem} numberOfLines={2}  >What’s the name of your business?</Text>
                    </View>
                    <View>
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
                        <TouchableOpacity
                            style={styles.button}>
                            <View style={{
                              flexDirection: 'row',
                                alignContent:'center',
                                justifyContent:'center',
                            }}>
                                <IconFeather name="check" size={20} color="#0074D9" />
                                <Text style={styles.text}>OK</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View  style={{
                        marginTop: 20,
                    }}>
                        <View>
                            <View style={styles.item}>
                                <View style={styles.circleNumberNextItem}>
                                    <Text style={styles.numberNextItem}>3</Text>
                                </View>
                                <Text style={styles.titleNextItem}>What’s the phone number?</Text>
                            </View>
                        </View>
                        <View style={{
                            marginTop: 25,
                        }}>
                            <TextInput
                                style={{
                                    height: 40,
                                    borderBottomWidth:1,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    borderColor: '#00E5E5E5',
                                    color: '#0074D9',
                                }}
                                placeholder="Enter"
                                keyboardType="numeric"
                            />
                        </View>
                    </View>
                    <View  style={{
                        marginTop: 20,
                    }}>
                        <View>
                            <View style={styles.item}>
                                <View style={styles.circleNumberNextItem}>
                                    <Text style={styles.numberNextItem}>4</Text>
                                </View>
                                <Text style={styles.titleNextItem}>What state do you operate from?</Text>
                            </View>
                        </View>
                        <View style={{
                            marginTop: 25,
                        }}>
                            <TextInput
                                //label='Favorite Fruit'
                                style={{
                                    height: 40,
                                    borderBottomWidth:1,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    borderColor: '#00E5E5E5',
                                    color: '#0074D9',

                                }}
                                //data={data}
                            />
                        </View>
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

export  default  BusinessPage;
