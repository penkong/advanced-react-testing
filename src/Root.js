import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';
//we did this comp for test files can access to store for test
//handling
const store = createStore(reducers, {});
export default (props) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
}