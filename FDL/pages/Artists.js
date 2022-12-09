// added by Iccha below:

import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  StatusBar,
  Pressable,
} from 'react-native';
//** this should be done for artists

//** instead of SET_USERS it would be SET_ARTISTS
//** haven't changed because state hasn't been made yet
import { SET_ARTISTS } from '../redux/types';
import { store } from '../redux/store';

import ProductCard from '../components/productCard';
import StyledText from '../components/util/StyledText';



//** Hardcoded NFTS here, could have the same ones for now
//** until NFTs minted and added into DB (then, dynamic)

const data = [
  {

    id: '1',
    title: 'First NFT',
    author: '@Idriss',
    image: require('../assets/static/jake-album.jpeg'),
  },
  {
    id: '2',
    title: 'Second NFT',
    author: '@Idriss',
    image: require('../assets/static/jake-album.jpeg'),
  },
  {
    id: '3',
    title: 'Third NFT',
    author: '@Idriss',
    image: require('../assets/static/jake-album.jpeg'),
  },
  {
    id: '4',
    title: 'Fourth NFT',
    author: '@Idriss',
    image: require('../assets/static/jake-album.jpeg'),
  },
];

// ** This would be Artist from Artists.js 
// ** instead of Profile (like in users)


const Artists = () => {
  // functional component in react (use func instead of class components)
  // we can tell func comp bc it has useState (for functional comps ONLY)
  // useState helps us dynamically change vars

  // defining the state
  const [isActive, setActive] = useState(false);
  const globalState = useContext(store);
  const { dispatch, state } = globalState;

  // Code below: Superseded by state

  // isActive is a variable
  // setActive is setter (like setter/getter)
  // setActive setter is changing the value of isActive var


  // initializing/declaring bio & handle variable to empty strin
  // in the state

  // const [bio, setBio] = useState("");
  // const [handle, setHandle] = useState("");

  // useEffect(() => {
  //   console.log(setActive);
  // }, [setActive]);

  // const [user, setData] = useState({});
  // declare a NEW function
  // look up component that's called useEffect for functional components 
  // (class components use the didmMount)


  // has to be BEFORE return
  // lambda function
  // which is:

  useEffect(() => { // useEffect is used in React.js

    fetch("http://localhost:3000/artist") // fetch the api, and then == JS
      // artists would be endpoint here, instead of users (or crypt which was a filler)

      // the return val of fetch is the response to the fetch function, 
      // and this is passed into the resp var which is a param of the func that we're passing into 
      // ( called then )
      // passing a function into the function (named then)
      // func we're passing into then (function) is  --> resp => resp.json()


      // The then function takes the RETURN value of prev function and PUTS that value into the param of the next function

      .then(resp => resp.json()) // this is entire func with resp being parameter
      // promising to get data in json as param (resp.json)

      .then(data => {
        dispatch({ // exclusive func in state
          // letting state know that change is going to be made on state

          type: SET_ARTISTS, // action being changed
          // ** Should be SET_ARTISTS, not changing bc state hasn't been made

          payload: data // sending data through payload
        })
      });
  }, [])
  return (
    // all of this HTML looking stuff is called JSX in React.js
    <View style={[styles.container]}>
      <View style={[styles.row]}>
        <View>
          <Image
            style={[styles.image]}
            source={require('../assets/static/jake-album.jpeg')}
          />
        </View>
        <View>
          <StyledText
            // is also a component (just like Profile), this component is being CALLED in (return portion) of Profile (not component of Profile)
            // children="Idriss Dimson" // attributes for component
            children={state.artists[Object.keys(state.artists)[0]]?.name}
            color="#000000"
            fontSize="20"
            fontWeight="600"
          />
          <StyledText
            // children="@JAKE"
            // Dynamically adding in users

            // this (?.) is called an optional chaining operator. It checks that the statement preceding
            // the operator is true before running the next parameter
            // In this case, the code is waiting for state to be defined before it calls the handle property 
            // in the object.
            children={Object.keys(state.artists)[0]}
            // ** Should be state.artists, not changing bc state hasn't been made



            // check the braces here, single or double ****
            // use this for passing vars in attributes in react
            color="#A07D28"
            fontSize="20"
            fontWeight="600"
          />
          <Text style={[styles.paragraph]}>

            {/* Character Count is a free online tool that calculates the number of
            ... The one that most people are likely aware of is the 140
            character li */}

            {state.artists[Object.keys(state.artists)[0]]?.bio}

          </Text>
        </View>
      </View>
      <View style={[styles.divider]} />
      <View style={[styles.container]}>
        <View style={[styles.header]}>
          <Pressable
            onPress={() => {
              setActive(true);
            }}>
            <StyledText
              children="Collection"
              color={isActive ? '#000000' : '#00000059'}
              fontSize="20"
              fontWeight="600"
            />
          </Pressable>
          <StyledText
            children="/"
            color="#000000"
            fontSize="20"
            fontWeight="600"
          />
          {/* <Pressable */}
          {/*    onPress={() => {
               setActive(false);
             }}>
             <StyledText
               children="Following"
               color={isActive ? '#00000059' : '#000000'}
               fontSize="20"
               fontWeight="600"
             />
           </Pressable> */}
        </View>
        <Text style={[styles.text]}>{isActive ? 'NFTs' : 'Artists'}</Text>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ProductCard
              image={item.image}
              title={item.title}
              author={item.author}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

        <View style={[styles.container]}>
          <Text style={[styles.text]}>
            {isActive ? 'Collectibles' : 'Friends'}
          </Text>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <ProductCard
                image={item.image}
                title={item.title}
                author={item.author}
              />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
    // flexDirection: 'row',
    // alignItems: 'center',
    // borderColor: '#000000',
    // borderWidth: 1,
  },
  row: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    paddingLeft: 10,
    flexDirection: 'row',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },

  text: {
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Montserrat_400Regular',
  },
  paragraph: {
    fontFamily: 'Montserrat_400Regular',
    width: 200,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#A07D28',
    margin: 10,
  },
});

export default Artists;
