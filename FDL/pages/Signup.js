import React, { useContext, useState } from 'react'
import { View, TextInput, Pressable, StyleSheet } from 'react-native'
import StyledText from '../components/util/StyledText';
import axios from 'axios'

import { SET_AUTHENTICATED } from '../redux/types';
import { store } from '../redux/store';

const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [handle, setHandle] = useState('');
  const [password, setPassword] = useState('');

  const globalState = useContext(store);
  const { dispatch } = globalState;

  const signupUser = (newUserData) => {
    // dispatch({ type: LOADING_UI });
    axios
      .post('http://api.fdlnft.art/signup', newUserData)
      .then((res) => {
        setAuthorizationHeader(res.data.token);
        dispatch({ type: SET_AUTHENTICATED });
      })
      .catch((err) => {
        console.log(err);
        // dispatch({
        //   type: SET_ERRORS,
        //   payload: err.response.data
        // });
      });
  }
  return (
    <View style={[styles.container]}>
      <View style={[styles.centered]}>
        <TextInput
          style={[styles.input]}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input]}
          placeholder="Username"
          value={handle}
          onChangeText={setHandle}
        />
        <TextInput
          style={[styles.input]}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Pressable style={[styles.button]} onPress={() => signupUser({ email: email, password: password, handle: handle })
        }>
          <StyledText
            children="Sign Up"
            color="#fff"
            fontSize="20"
            fontWeight="600"
          />
        </Pressable>
      </View>
      <View style={[styles.navigation, styles.account]}>
        <StyledText
          children="Have an account? "
          color="#000"
          fontSize="20"
          fontWeight="600"
        />
        <Pressable onPress={() => { navigation.navigate('Login') }}>
          <StyledText
            children="Login"
            color="#A07D28"
            fontSize="20"
            fontWeight="600"
          />
        </Pressable>
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: '100%'
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigation: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
    height: 40,
    width: '70%',
    margin: 10,
    padding: 5,
    fontFamily: 'Montserrat_300Light',
    border: '1px solid #000',
    borderRadius: 5
  },
  account: {
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: 'rgba(160, 125, 40, 0.7);',
    cursor: 'pointer'
  },
});
