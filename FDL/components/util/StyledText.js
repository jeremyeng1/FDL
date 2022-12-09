import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const StyledText = ({children, fontSize, fontWeight, color}) => {
  let fontFamily = '';
  switch(fontWeight){
    case "300":
      fontFamily = 'Montserrat_300Light'
      break;
    case "600":
      fontFamily = 'Montserrat_600SemiBold'
      break;
    case "700":
      fontFamily = 'Montserrat_700Bold'
      break;
    case "800":
      fontFamily = 'Montserrat_800ExtraBold'
      break;
    default:
      fontFamily = 'Montserrat_300Light'
      break;
  }
  const styles = StyleSheet.create({
    text: {
      fontFamily: fontFamily,
      fontSize: parseInt(fontSize, 10),
      fontWeight: fontWeight,
      color: color,
    },
  });
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default StyledText;
