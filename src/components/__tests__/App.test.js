import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';
//jest it is global func , organizer of test
//description, func with logic
//jest inside have JSDOM fake deceive react it browser
it('should shows a comment box ', () => {
  //this document is for jsDOm.
  const div = document.createElement('div');
  ReactDOM.render(<App/>,div);
  // console.log(div.innerHTML);
  //(value that we expect).matcherStatement(value we expect to see)
  expect(div.innerHTML).toContain('comment Box');

  ReactDOM.unmountComponentAtNode(div); //clean up
});