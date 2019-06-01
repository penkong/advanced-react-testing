import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';
//formProps
export const signup = ({email, password}) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signup', { email, password });
    dispatch({ type: AUTH_USER, payload: response.data.token });
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};