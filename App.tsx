import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen  from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import AddDishScreen from './screens/SelectionScreen'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="AddDish" component={AddDishScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );}