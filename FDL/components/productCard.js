import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import StyledText from './util/StyledText';

const ProductCard = ({image, title, author}) => {
  return (
    <View style={[styles.container]}>
      <View>
        <Image style={[styles.image]} source={image} />
      </View>
      <View>
        <StyledText
          children={title}
          color="#000000"
          fontSize="20"
          fontWeight="600"
        />
      </View>
      <View>
        <Text style={[styles.gold]}>{author}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 200,
    backgroundColor: '#ffffff',
    marginVertical: 12,
    marginHorizontal: "auto",
    // borderColor: '#000000',
    // borderWidth: 1,
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: '300',
    fontFamily: 'Montserrat_400Regular',
  },
  gold: {
    color: '#A07D28',
    fontFamily: 'Montserrat_400Regular',
  },
});
export default ProductCard;
