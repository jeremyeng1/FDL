import jwtDecode from "jwt-decode";
import React, { useContext, useState, useEffect } from 'react'
import { View, TextInput, Pressable, StyleSheet, Text } from 'react-native'
import StyledText from '../components/util/StyledText';
import axios from 'axios'

import { SET_UNAUTHENTICATED, SET_AUTHENTICATED } from '../redux/types';
import { store } from '../redux/store';

const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};

const Login = ({navigation}) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const token = localStorage.FBIdToken;

  useEffect(() => {
    try {
      if (token) {
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp * 1000 < Date.now()) {
          dispatch({ type: SET_UNAUTHENTICATED });
          localStorage.removeItem('FBIdToken');
          delete axios.defaults.headers.common['Authorization'];
        } else {
          dispatch({ type: SET_AUTHENTICATED });
          axios.defaults.headers.common['Authorization'] = token;
        }
      }
    } catch (error) {
      console.log(error);
    }
   
  }, [])

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = (userData, history) => {
    axios
      .post('http://api.fdlnft.art/signin', userData)
      .then((res) => {
        setAuthorizationHeader(res.data.token);
        dispatch({ type: SET_AUTHENTICATED });
        // dispatch({ type: SET_USER, payload: res.data.token });
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
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Pressable style={[styles.button]} onPress={() => loginUser({ email: email, password: password })}>
          <StyledText
            children="Log in"
            color="#fff"
            fontSize="20"
            fontWeight="600"
          />
        </Pressable>
      </View>
      <View style={[styles.navigation, styles.account]}>
        <StyledText
          children="Don't have an account? "
          color="#000"
          fontSize="20"
          fontWeight="600"
        />
        <Pressable onPress={() => {navigation.navigate('Signup')}}>
          <StyledText
            children="Sign Up"
            color="#A07D28"
            fontSize="20"
            fontWeight="600"
          />
        </Pressable>
      </View>
    </View>
  );
}

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

export default Login
