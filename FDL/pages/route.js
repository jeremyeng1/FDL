import React, { useContext, useMemo, Fragment } from 'react'
import { StyleSheet, View } from 'react-native'
import { store } from '../redux/store.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from '../pages/Login';
import Signup from '../pages/Signup';
import MainScreen from '../components/MainScreen';
import NFT from '../pages/NFT';
import Countdown from './Countdown.js';


const Stack = createNativeStackNavigator();


const Route = () => {
  const globalState = useContext(store);
  const { state } = globalState;
  return (
    <Stack.Navigator>
      {state.authenticated === false ? (
        <>
          {/* temporary home page */}
          <Stack.Screen name="Countdown" component={Countdown} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Login" component={Login} options={{
            animationEnabled: true, headerTitleAlign: 'center', headerLeft: () => {
              return <View />
            }
          }} />
          <Stack.Screen name="Signup" component={Signup} options={{
            animationEnabled: true, headerTitleAlign: 'center', headerLeft: () => {
              return <View />
            }
          }} />
        </>
      ) : (
        <Stack.Screen name="Home" component={MainScreen} options={{ animationEnabled: true, headerShown: false }} />
      )}
      <Stack.Screen name="NFT" component={NFT} options={{ animationEnabled: true, headerTitleAlign: 'center', }} />
    </Stack.Navigator>
  )
}

export default Route

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
    // marginBottom: 20,
  },
});