import React, { useContext, useEffect } from 'react'
// import type {Node} from 'react';
import {
  // Button,
  Pressable,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import axios from 'axios'
import ProductCard from '../components/productCard';

import { SET_NFTS } from '../redux/types';
import { store } from '../redux/store';

const Home = ({ navigation }) => {
  const globalState = useContext(store);
  const { state, dispatch } = globalState;

  useEffect(() => {
    axios
      .get('http://localhost:3000/nft')
      .then((res) => {
        dispatch({ type: SET_NFTS, payload: res.data });
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
    <SafeAreaView style={styles.container}>
      <View style={[styles.sectionContainer]}>
        <FlatList
          ListHeaderComponent={() => (
            <View style={[styles.sectionDescription]}>
              <Text style={[styles.sectionTitle]}>Trending NFTs</Text>
            </View>
          )}
          data={state?.nfts}
          renderItem={({ item }) => (
            <Pressable style={{cursor: 'pointer'}} onPress={() => {
              navigation.push("NFT", {
                id: item.id
              });
            }}>
              <ProductCard
                image={item.imgURL}
                title={item.name}
                author={item.artist}
              />
            </Pressable>
          )}
          numColumns="2"
        // horizontal={true}
        // showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ffffff',
    height: "100%"
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: 'Montserrat_600SemiBold',
    fontWeight: '600',
  },
  sectionContainer: {
    height: '100%',
    marginLeft: 12,
  },
  sectionDescription: {
    marginLeft: 12,
    marginBottom: 12,
    marginTop: 13,
  },
  productList: {
    flexDirection: 'row',
    overflow: 'scroll',
  },
});

export default Home;
