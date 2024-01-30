import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increament} from '../redux/features/CounterSlice';
import {logout} from '../redux/features/AuthSlice';

const CounterScreen = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.Value);
  return (
    <View style={styles.container}>
      <Text style={styles.countStyle}>{count}</Text>
      <Button onPress={() => dispatch(increament())} title="Increment" />
      <Button onPress={() => dispatch(decrement())} title="Decrement" />
      <View style={styles.logoutStyle}>
        <Button onPress={() => dispatch(logout())} title="Logout" />
      </View>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  logoutStyle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  countStyle: {
    color: '#000',
    fontSize: 18,
    marginBottom: 15,
  },
});
