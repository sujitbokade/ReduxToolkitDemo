import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CounterScreen from '../screens/CounterScreen';
import Login from '../screens/Login';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const AppNavigation = () => {
  const {userData} = useSelector(state => state.auth);
  console.log('userData', userData);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userData ? (
          <Stack.Screen name="CounterScreen" component={CounterScreen} />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
