import React,{ useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Colors, IconButton} from "react-native-paper";
import {Appbar} from 'react-native-paper';
import images from "../../../constants/images";
import metrics from "../../../constants/metrics";
import PagerView from 'react-native-pager-view';

import InsurancePage from "./pages/Insurance";
import BusinessPage from "./pages/Business";
import DesignPage from "./pages/Design";
import DatePage from "./pages/Date";


const _handleMore = () => console.log('Shown more');

export default function ({ navigation }) {

    const [num, setPage] = useState(0);
    const list_pages = [
        <InsurancePage key="1"/>,
        <BusinessPage key="2"/>,
        <DesignPage key="3"/>,
        <DatePage navigation={navigation} key="4"/>
        ];

    return (
        <View style={styles.root}>
            <Appbar.Header style={styles.appbar}>
                <Appbar.Action style={styles.appbarIcon} icon="umbrella"  color="#0074D9" onPress={() => _handleMore()} />
                <Appbar.Content style={styles.appbarTitle} subtitle="Umbrella Hub" color="#0074D9" size={14}  />
                <Appbar.Action style={styles.appbarIcon} icon="close"  color="#0074D9" onPress={() => _handleMore()} />
            </Appbar.Header>
            <View style={styles.pageView}>
                <PagerView
                    scrollEnabled={true}
                    transitionStyle={'curl'}
                    style={styles.pagerView}
                    onPageSelected={(e) => {
                        //console.log("onPageSelected", e.nativeEvent.position);
                        setPage(e.nativeEvent.position);
                    }}
                    initialPage={num}>
                    {list_pages.map((screen) =>  screen)}
                    {/*list_pages[num]*/}
                </PagerView>
            </View>
            <View style={styles.footer}>
                <View>
                    <Text style={styles.footerTitle}>{num+1}/4</Text>
                </View>
                <View  style={styles.footerGroupButton}>
                    <IconButton
                        icon="arrow-up"
                        color={Colors.black}
                        size={15}
                        style={styles.footerButton}
                        onPress={() => {
                            if (num<list_pages.length-1 )
                                setPage(num + 1)
                        }}
                    />
                    <IconButton
                        icon="arrow-down"
                        color={Colors.black}
                        size={15}
                        style={styles.footerButton}
                        onPress={() => {
                            if (num>=1 )
                            setPage(num - 1)}}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
    },

    page: {
        flex: 1,
        height: metrics.screenHeight,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent:'center'
    },

    root: {
        width: metrics.screenWidth,
        height: metrics.screenHeight,
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        paddingBottom:30
    },
    pageView: {
        width: metrics.screenWidth,
        height: metrics.screenHeight,
        backgroundColor: 'white',
    },
    appbar:{
        width: metrics.screenWidth,
        height: metrics.navBarHeight,
        backgroundColor: "white",
        elevation:0,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    appbarIcon:{
        color:"#7064FB",
        textAlign:'right',
    },

    containerBody: {
        width: metrics.screenWidth,
        flex: 1,
        alignItems: 'center',
    },
    appbarTitle:{
        color:'#0074D9',
        textAlign:'left',
        marginBottom:30,
        marginLeft:0,
        paddingLeft:0,
        fontWeight:"normal",
        fontSize:14,
    },



    footer: {
        width: metrics.screenWidth,
        height:60,
        paddingLeft:20,
        paddingRight:20,
        alignItems: 'center',
        flexDirection: 'row',
        alignContent:'space-between',
        justifyContent:'space-between',
        backgroundColor: '#0074D9',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },

    footerGroupButton: {
        alignItems: 'center',
        flexDirection: 'row',
    },

    footerButton: {
        borderRadius:0,
        height:30,
        elevation:4,
        width:30,
        backgroundColor:"white"
    },

    footerTitle: {
        alignItems: 'center',
        justifyContent:'center',
        fontSize:18,
        fontWeight:'700',
        color:"white"
    },


});
