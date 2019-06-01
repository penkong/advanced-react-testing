import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';
//formProps
export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signup',formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback(); //this is history call on submit on comp
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signin',formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback(); //this is history call on submit on comp
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Ivalid login info' });
  }
};

export const signout = () =>  {
  localStorage.removeItem('token');
  return { type: AUTH_USER, payload: '' };
};