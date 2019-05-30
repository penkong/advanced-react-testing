import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import reduxPromise from 'redux-promise';
import async from 'middlewares/async';

import reducers from 'reducers';
//we did this comp for test files can access to store for test
//handling
//by middleware we can delay action
//its HOC func for index
export default ({children, initialState = {}}) => {
  const store = createStore(
    reducers, 
    initialState, 
    applyMiddleware(async)
  );
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}