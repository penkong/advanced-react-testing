import tv4 from 'tv4';
import stateSchema from './stateSchema';

export default ({ dispatch, getState }) => next => action => {
  next(action); //first go do all your job then back for validate
  if(!tv4.validate(getState(),stateSchema)){
    console.warn('Invalid State input');
  };
};