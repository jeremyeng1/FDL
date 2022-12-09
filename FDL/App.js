import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useMemo } from 'react';

import { StateProvider } from './redux/store.js';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_300Light, Montserrat_600SemiBold, Montserrat_800ExtraBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Route from './pages/route';

const linking = {
  prefixes: [
    /* your linking prefixes */
    ['http://fdlnft.art']
  ],
  config: {
    /* configuration for matching screens with paths */
    screens: {
      Countdown: '/',
      Login: 'login',
      Signup: 'signup',
      Home: {
        screens: {
          'My Feed': 'app',
          'My Profile': 'app/profile',
          'My Artists': 'app/artists',
          'My Collection': 'app/collections',
          'Wallet': 'app/wallet'
        },
      },
      NFT: 'app/nft'
    },
  },
};



// const setAuthorizationHeader = (token) => {
//   const FBIdToken = `Bearer ${token}`;
//   localStorage.setItem('FBIdToken', FBIdToken);
//   axios.defaults.headers.common['Authorization'] = FBIdToken;
// };
const App = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
    Montserrat_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <StateProvider>
        <NavigationContainer linking={linking}>
          <Route />
        </NavigationContainer>
      </StateProvider>
    );
  }
};
export default App;