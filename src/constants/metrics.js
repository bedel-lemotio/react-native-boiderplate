/*
 * platform/application wide metrics for proper styling
 */
import {Dimensions, Platform } from 'react-native';

const width  = Dimensions.get('window').width;
const height  = Dimensions.get('window').height;

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 54 : 66,
};

export default metrics;
