import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {useNavigation} from '@react-navigation/native';

const HeaderRight = () => {
  // const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.container]}
      // onPress={() => navigation.toggleDrawer()}
    >
      <Icon name="search" size={25} color="#A07D28" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
  },
});

export default HeaderRight;
