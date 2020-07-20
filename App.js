/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import AcountScreen from './src/screens/AcountScreen';
import UpdatePassword from './src/screens/UpdatePassword';
import AcountVerification from './src/screens/AcountVerification';
import Test from './src/screens/Test';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown:false
        }}>
        
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Acount" component={AcountScreen} />
              <Stack.Screen name="AcountVerification" component={AcountVerification} />
              <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
              
        </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
