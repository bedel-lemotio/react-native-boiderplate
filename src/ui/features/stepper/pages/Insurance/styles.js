import { StyleSheet } from 'react-native';
import metrics from "../../../../../constants/metrics";

const styles = StyleSheet.create({
  root: {
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    alignItems: 'center',
    backgroundColor: "white",
    paddingBottom:30,
    marginTop:0,
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
  appbarTitle:{
    color:'#0074D9',
    textAlign:'left',
    marginBottom:30,
    marginLeft:0,
    paddingLeft:0,
    fontWeight:"normal",
    fontSize:14,
  },

  listItem:{
    marginTop:30,
    paddingLeft:40,
    paddingRight:40,
  },

  item:{
    width: metrics.screenWidth-40,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent:'center',
    marginTop:30,
    marginBottom:30,
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
    flex:1,
    marginLeft: 20,
    fontSize:24,
    fontWeight:"700",
    color:"#333333",
    justifyContent:'center',
  },

  flipCardContainer:{
    width: metrics.screenWidth-40,
    elevation:4,
    marginBottom:20,
    borderColor: "#BDBDBD",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  flipCardContainerTitle:{
    color:"white",
    padding:0
  },

  avatarItem:{
    backgroundColor:"transparent",
  },

  numberNextItem: {
    fontSize:18,
    color:'#00E5E5E5',
    fontWeight: "700",
  },

  circleNumberNextItem: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 35 ,
    backgroundColor:'#E5E5E5',

  },

  titleNextItem: {
    flex:1,
    marginLeft: 20,
    fontSize:24,
    fontWeight:"700",
    color:"#E5E5E5",
    justifyContent:'center',
  },

  numberItem: {
    fontSize:18,
    color:'#0074D9',
    fontWeight: "700",
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

export default styles;
