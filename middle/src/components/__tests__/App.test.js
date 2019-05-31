import React from 'react';
import { shallow } from 'enzyme'; //render comp not children
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
// //jest it is global func , organizer of test
// //description, func with logic
// //jest inside have JSDOM fake deceive react it browser
// it('should shows a comment box ', () => {
//   //this document is for jsDOm.
//   const div = document.createElement('div');
//   ReactDOM.render(<App/>,div);
//   // console.log(div.innerHTML);
//   //(value that we expect).matcherStatement(value we expect to see)
//   //it is bad practice to access another comp from other
//   // expect(div.innerHTML).toContain('comment Box');
//   ReactDOM.unmountComponentAtNode(div); //clean up
// }); 
let wrapped;
beforeEach(()=>{
  wrapped = shallow(<App/>);
});
it('should shows a commentBox', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});
it('should shows a commentList', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});