import React from 'react';
import {View,Text,FlatList ,TouchableOpacity  } from 'react-native';
import {Appbar} from 'react-native-paper';
import IconFeather from 'react-native-vector-icons/Feather';
import  styles from './styles'

export default function ({ navigation }) {

    return (
        <View style={styles.root}>
            <Appbar.Header style={styles.appbar}>
                <Appbar.Action style={styles.appbarIcon} icon="umbrella"  color="#0074D9" onPress={() => _handleMore()} />
                <Appbar.Content style={styles.appbarTitle} subtitle="Umbrella Hub" color="#0074D9" size={14}  />
                <Appbar.Action style={styles.appbarIcon} icon="close"  color="#0074D9" onPress={() => _handleMore()} />
            </Appbar.Header>
            <View style={styles.containerBody}>
                <View style={styles.circleUmbrella}>
                    <IconFeather name="check-circle" size={50} color="#0074D9" />
                </View>
                <Text style={styles.title}>That worked!</Text>
                <View style={styles.listItem}>
                    <Text style={styles.titleItem}>Your payment was successful,
                        and your policy documents are on their way to their new home - your inbox!</Text>

                    <TouchableOpacity
                        style={styles.button}
                       // onPress={goTo}
                    >
                        <Text style={styles.text}>DOWNLOAD POLICY DOCS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonOK}>
                        <View style={{
                            flexDirection: 'row',
                            alignContent:'center',
                            justifyContent:'center',
                        }}>
                            <IconFeather name="arrow-left" size={20} color="#0074D9" />
                            <Text style={styles.textOK}>Go back to my portal</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    );
}
