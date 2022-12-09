import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import StyledText from '../components/util/StyledText';
import HeaderLeft from '../components/HeaderLeft';
import MenuItems from '../components/util/MenuItems';
import HeaderRight from '../components/HeaderRight';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Wallet from '../pages/Wallet';
import Artists from '../pages/Artists';
import Collections from '../pages/Collections';
import SettingScreen from '../pages/SettingScreen';
import HelpSection from '../pages/HelpSection';

const Drawer = createDrawerNavigator();
const MainScreen = () => {
  return (
    <Drawer.Navigator
      drawerType="front"
      initialRouteName="Home"
      screenOptions={{
        activeTintColor: '#A07D28',
        itemStyle: { marginVertical: 10 },
        drawerLabelStyle: {
          fontFamily: 'Montserrat_700Bold',
        },
        drawerActiveTintColor: '#A07D28',
        drawerInactiveTintColor: '#000000',
        drawerActiveBackgroundColor: '#ffffff',
        headerTitleAlign: 'center',
        headerLeft: () => {
          return <HeaderLeft />;
        },
        headerRight: () => {
          return <HeaderRight />;
        },
        headerTitle: () => {
          return (
            <View style={[styles.container]}>
              <StyledText
                children="A"
                fontSize="24"
                fontWeight="700"
                color="#000000"
              />
              <StyledText
                children="V"
                fontSize="24"
                fontWeight="700"
                color="#A07D28"
              />
              <StyledText
                children="THX"
                fontSize="24"
                fontWeight="700"
                color="#000000"
              />
            </View>
          );
        },
      }}>
      <Drawer.Group>
        {MenuItems.map(drawer => (
          <Drawer.Screen
            key={drawer.name}
            name={drawer.name}
            component={
              drawer.name === 'My Feed'
                ? Home
                : drawer.name === 'My Profile'
                  ? Profile
                  : drawer.name === 'My Artists'
                    ? Artists
                    : drawer.name === 'My Collection'
                      ? Collections
                      : Wallet
            }
          />
        ))}
      </Drawer.Group>
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
    // marginBottom: 20,
  },
});
export default MainScreen;