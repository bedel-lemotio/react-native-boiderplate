import { StyleSheet } from 'react-native';
import metrics from "../../../constants/metrics";

const styles = StyleSheet.create({
  root: {
    width: metrics.screenWidth,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
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
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title:{
    color:'#333333',
    textAlign:'center',
    fontWeight:"bold",
    fontSize:35,

    //fontFamily:"Roboto-Medium"
  },

  listItem:{
    width: metrics.screenWidth,
    marginTop:30,
    paddingLeft:40,
    paddingRight:40,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent:'center',
  },

  button: {
    width: metrics.screenWidth-80,
    alignItems: 'center',
    justifyContent: 'center',
    height:50,
    borderRadius: 8,
    elevation: 3,
    marginTop:60,
    backgroundColor: '#71F79F',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },

  item:{
    flexDirection: 'row',
    alignItems: 'center',
    alignContent:'center',
    marginBottom:10,
  },

  circleNumberItem: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 35 ,
    backgroundColor:'#A8DAFF',
  },

  titleItem: {
    marginLeft: 20,
    fontSize:16,
    fontWeight:"400",
    color:"#333333",
    justifyContent:'center',
  },

  numberItem: {
    fontSize:18,
    color:'#0074D9',
    fontWeight: "700",
  },


  circleUmbrella: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 100 ,
    marginBottom:20,
    backgroundColor:'#A8DAFF',

  },
  footer: {
    width: metrics.screenWidth,
    height:30,
    marginTop:30,
    marginBottom:30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:'center',
  },

  footerTitle: {
    alignItems: 'center',
    justifyContent:'center',
    fontSize:14,
    marginLeft:8,
    color:"#BDBDBD"
  },


});

export default styles;
