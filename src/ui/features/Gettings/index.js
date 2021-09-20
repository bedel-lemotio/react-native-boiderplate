import React from 'react';
import {View,Text,FlatList ,TouchableOpacity  } from 'react-native';
import {Appbar} from 'react-native-paper';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import  styles from './styles'

const _handleMore = () => console.log('Shown more');
export default function ({ navigation }) {
    const goTo = () => navigation.navigate("Stepper");

    return (
        <View style={styles.root}>
            <Appbar.Header style={styles.appbar}>
                <Appbar.Action style={styles.appbarIcon} icon="close"  color="#0074D9" onPress={() => _handleMore()} />
            </Appbar.Header>
            <View style={styles.containerBody}>
                <View style={styles.circleUmbrella}>
                    <IconFeather name="umbrella" size={50} color="#0074D9" />
                </View>
                <Text style={styles.title}>So what gives?</Text>
                <View style={styles.listItem}>
                    <FlatList
                        data={[
                            {key: 'Answer a few simple questions about your business'},
                            {key: 'Browse through specially curated quotes'},
                            {key: 'Select your quote-of-choice and receive your policy instantly'},
                        ]}
                        renderItem={({item,index}) => <View style={styles.item}>
                            <View style={styles.circleNumberItem}>
                                <Text style={styles.numberItem}>{index+1}</Text>
                            </View>
                            <Text style={styles.titleItem}>{item.key}</Text>
                        </View>}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={goTo}>
                        <Text style={styles.text}>GET STARTED</Text>
                    </TouchableOpacity>


                </View>
            </View>
            <View style={styles.footer}>
                <IconFontisto name="flash" size={14} color="#BDBDBD" />
                <Text style={styles.footerTitle}>Powered by Blitz</Text>
            </View>
        </View>
    );
}
