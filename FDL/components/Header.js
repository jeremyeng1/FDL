import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const Header = ({screen}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon name="bars" size={25} color="#A07D28" />
      </TouchableOpacity>
      <View style={[styles.box]}>
        <Text style={[styles.text]}>{screen}</Text>
      </View>
      <View style={[styles.box]}>
        <Icon name="search" size={25} color="#A07D28" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   maxWidth: '95%',
  //   backgroundColor: '#F6F1F1',
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  container: {
    width: '100%',
    backgroundColor: '#fa7da7',
    height: StatusBar.currentHeight + 50,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '900',
    fontFamily: 'Montserrat',
  },
  gold: {
    color: '#A07D28',
  },
});

export default Header;
