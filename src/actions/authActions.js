import axios from 'axios';

import { GET_ERRORS } from './type';
import setAuthToken from '../utils/setAuthToken';

//Register new user
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Login new user
export const loginUser = userData => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => {
      //save to local storage
      const { token } = res.data;
      //set token to localstorage
      localStorage.setItem('jwtToken', token);
      //set token to auth header
      setAuthToken(token);
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
