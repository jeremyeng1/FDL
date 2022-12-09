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
import { SET_USERS } from '../redux/types';
import { store } from '../redux/store';

import ProductCard from '../components/productCard';
import StyledText from '../components/util/StyledText';
import { getNFTs } from '../redux/actions/nftActions';

const data = [
  {
    // this data will have to be dynamic eventually

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

const Profile = () => {
  // functional component in react (use func instead of class components)
  // we can tell func comp bc it has useState (for functional comps ONLY)
  // useState helps us dynamically change vars

  // defining the state
  const [isActive, setActive] = useState(false);
  const globalState = useContext(store);
  const { dispatch, state } = globalState;
  
  // this is superseded by state
  
  // isActive is var
  // setActive is setter (like setter/getter)
  // setActive is changing the value of isActive


  // initializing/declaring bio variable to empty string
  // const [bio, setBio] = useState("");

  // const [handle, setHandle] = useState("");

  // useEffect(() => {
  //   console.log(setActive);
  // }, [setActive]);

  // const [user, setData] = useState({});
  // declare a NEW function
  // look up component that's called useEffect for functional components (class components use the didmMount)


  // has to be BEFORE return
  // lambda function (???)
  useEffect(() => { // useEffect = React
    fetch("http://localhost:3000/crypt") // fetch the api, and then == JS

      // the return val of fetch is the response to the fetch function, 
      // and this is passed into the resp var which is a param of the func that we're passing into then
      // func we're passing into then is  --> resp => resp.json()


      // then takes the RETURN value of prev function and PUTS that value into the param of the next function

      .then(resp => resp.json()) // this is entire func with resp being parameter
      // promise to get data in json
      .then(data => {
        dispatch({ // exclusive func in state
          // letting state know that change is going to be made on state
          type: SET_USERS, // action being changed
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
            children="Idriss Dimson" // attributes for component
            color="#000000"
            fontSize="20"
            fontWeight="600"
          />
          <StyledText
          
          // Dynamically adding in users
          
            // this (?.) is called an optional chaining operator. It checks that the statement preceding
            // the operator is true before running the next parameter
            // In this case, the code is waiting for state to be defined before it calls the handle property 
            // in the object.
            children={state.user[Object.keys(state.user)[0]]?.handle}
            // accessing the first user
            // what it will be:
            // children = state.user.handle; // bc we'll have the person logged in
            
            
            // check the braces here, single or double ****
            // use this for passing vars in attributes in react
            color="#A07D28"
            fontSize="20"
            fontWeight="600"
          />
          <Text style={[styles.paragraph]}>

            {/* // Character Count is a free online tool that calculates the number of
            // ... The one that most people are likely aware of is the 140
            // character li */}

            {state.user[Object.keys(state.user)[0]]?.bio}

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
          <Pressable
            onPress={() => {
              setActive(false);
            }}>
            <StyledText
              children="Following"
              color={isActive ? '#00000059' : '#000000'}
              fontSize="20"
              fontWeight="600"
            />
          </Pressable>
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
      </View>
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

export default Profile;
