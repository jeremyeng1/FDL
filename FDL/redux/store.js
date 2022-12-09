// Where everything is being stored in the state

import {
  SET_ARTISTS,
  SET_USER,
  SET_USERS,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_NFTS,
  LOADING_USER,
  SET_ERRORS,
  CLEAR_ERRORS
} from './types';
import React, { createContext, useReducer } from 'react';


// everything in state (b4 logging in) should be empty
const initialState = {
  authenticated: false,
  loading: false,
  credentials: {},
  user: {}, // empty user data before logging in
  artists: {},
  nfts: []
};

// store is the object (in the state) that stores the users
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state = initialState, action) => {
    switch (action.type) {
      case SET_AUTHENTICATED:
        return {
          ...state,
          authenticated: true
        };
      case SET_UNAUTHENTICATED:
        return initialState;
      case SET_USER:
        return {
          // will set user object using log in info
          ...state,
          authenticated: true,
          loading: false,
          user: action.payload
        };
      case LOADING_USER:
        return {
          ...state,
          loading: true
        };
      case SET_ERRORS:
        return {
          ...state,
          loading: false,
          errors: action.payload
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          loading: false,
          errors: null
        };
      // test case rn
      case SET_USERS: 
        return {
          ...state,
          user: action.payload
          // set user object
          // data we get from api (with endpoint of users)
        }
      case SET_ARTISTS:
        return {
          ...state,
          artists: action.payload
        }
      case SET_NFTS:
        return {
          ...state,
          nfts: action.payload
        }
      default:
        return state;
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }