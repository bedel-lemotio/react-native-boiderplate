/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Stepper from "./ui/features/stepper/stepper";
import Gettings from "./ui/features/Gettings/index";
import Finnish from "./ui/features/Finnish/index";
import Quotes from "./ui/features/Quotes/index";
import Payment from "./ui/features/Payment/index";



const Stack = createStackNavigator();


export default class App extends React.Component {

  render() {
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Welcome">
            <Stack.Screen name="Gettings" component={Gettings} />
            <Stack.Screen name="Stepper" component={Stepper} />
            <Stack.Screen name="Finnish" component={Finnish} />
            <Stack.Screen name="Quotes" component={Quotes} />
            <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator>
        </NavigationContainer>

    );
  }
}





