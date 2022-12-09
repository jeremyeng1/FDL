import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Welcome = () => {
  return (
    <View>
      <Text style={[styles.container]}>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default Welcome;
