import { StyleSheet } from 'react-native';
import metrics from "../../../../../constants/metrics";

const styles = StyleSheet.create({
  root: {
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    backgroundColor: 'white',
    paddingBottom:30,
    alignContent: 'center',
    justifyContent:'center',
    paddingRight:20,
    paddingLeft:20
  },

  item:{
    width: metrics.screenWidth-40,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent:'center',
    marginTop:30,
    marginBottom:30,
  },

  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },


  button: {
    width:90,
    alignItems: 'center',
    justifyContent: 'center',
    height:50,
    borderRadius: 8,
    elevation: 3,
    marginTop:20,
    backgroundColor: '#A8DAFF',
  },
  text: {
    fontSize: 18,
    fontWeight: 'normal',
    marginLeft:8,
    letterSpacing: 0.25,
    color: '#0074D9',
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
    color:"red",
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




});

export default styles;
