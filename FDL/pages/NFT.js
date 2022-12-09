import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios'
import {StyleSheet, View, Text, Image, SafeAreaView} from 'react-native';
import StyledText from '../components/util/StyledText';
import ProductDetails from '../components/productDetails';

import { store } from '../redux/store';

const NFT = ({route}) => {
  const { id } = route.params;
  const [details, setDetails] = useState({});
  const globalState = useContext(store);
  const { state} = globalState;
  useEffect(() => {
    axios
        .get(`http://localhost:3000/nft/${id}`)
        .then((res) => {
          // setAuthorizationHeader(res.data.token);
          setDetails(res.data);
          // console.log(res.data.token);
          // history.push('/');
        })
        .catch((err) => {
          console.log(err);
          // dispatch({
          //   type: SET_ERRORS,
          //   payload: err.response.data
          // });
        });
  }, [])
  return (
    <SafeAreaView style={[styles.container]}>
      <View>
        <Image
          style={[styles.image]}
          source={details.imgURL}
        />
      </View>
      <View>
        <StyledText
          children={details.name}
          fontSize="30"
          fontWeight="800"
          color="#000000"
        />
        <StyledText
          children={details.artist}
          fontSize="30"
          fontWeight="700"
          color="#A07D28"
        />
      </View>
      <View>
        <Text>
          {details.description}
        </Text>
        <ProductDetails price={details.price}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 12,
    // borderColor: '#000000',
    // borderWidth: 1,
  },
  image: {
    width: 360,
    height: 360,
    borderRadius: 5,
  },
  gold: {
    color: '#A07D28',
    fontFamily: 'Montserrat',
  },
});

export default NFT;
