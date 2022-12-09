import React, {useContext} from 'react';
import {
    SET_USERS
} from '../types';
import axios from 'axios';
import { store } from '../store.js';

export const getNFTs = () => {
    const globalState = useContext(store);
    const { dispatch } = globalState;

    // dispatch({ type: LOADING_UI });
    // axios
    //     .post('/login', userData)
    //     .then((res) => {
    //         setAuthorizationHeader(res.data.token);
    //         dispatch(getUserData());
    //         dispatch({ type: CLEAR_ERRORS });
    //         // history.push('/');
    //     })
    //     .catch((err) => {
    //         // dispatch({
    //         //   type: SET_ERRORS,
    //         //   payload: err.response.data
    //         // });
    //     });
    fetch("http://localhost:3000/crypt") // fetch and then == JS

    // the return val of fetch is the response to the fetch function, 
    // and this is passed into the resp var which is a param of the func that we're passing into then
    // func we're passing into then is  --> resp => resp.json()


    // then takes the RETURN value of prev function and PUTS that value into the param of the next function

    .then(resp => resp.json()) // this is entire func with resp being parameter
    .then(data => {
        dispatch({
            type: SET_USERS,
            payload: data
        })
        console.log(globalState);
    //   setHandle(data[Object.keys(data)[0]].handle)
    //   setBio(data[Object.keys(data)[0]].bio)
    });
};
