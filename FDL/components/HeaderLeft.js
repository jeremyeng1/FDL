import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const HeaderLeft = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() => navigation.toggleDrawer()}>
      <Icon name="bars" size={25} color="#A07D28" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
  },
});

export default HeaderLeft;
