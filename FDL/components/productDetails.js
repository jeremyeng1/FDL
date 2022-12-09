import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';
import StyledText from './util/StyledText';

const ProductDetails = ({price}) => {
  return (
    <View style={[styles.container]}>
      <View>
        {/* <View style={[styles.row]}>
          <StyledText
            children="Versions Available"
            fontSize="16"
            fontWeight="700"
            color="#000000"
          />
          <StyledText
            children="20/100"
            fontSize="16"
            fontWeight="700"
            color="#000000"
          />
        </View> */}
        <View style={[styles.row]}>
          <StyledText
            children="Price"
            fontSize="16"
            fontWeight="400"
            color="#000000"
          />
          <StyledText
            children={price + " ADA"}
            fontSize="16"
            fontWeight="400"
            color="#000000"
          />
        </View>
      </View>
      <View>
        <Pressable style={[styles.button]}>
          <Text style={styles.text}>Buy/Bid</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: 200,
    padding: 12,
    backgroundColor: 'rgba(160,125,40,.25)',
    margin: 12,
    borderColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1,
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontFamily: 'Montserrat_700Bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: '#A07D28',
  },
  gold: {
    color: '#A07D28',
    fontFamily: 'Montserrat',
  },
});
export default ProductDetails;
