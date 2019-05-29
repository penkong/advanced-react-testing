import React from 'react';
import { mount } from 'enzyme'; //mount === fulldom
import CommentList from 'components/CommentList';
import Root from 'Root';


//full dom has interact need to unmount
let wrapped;
beforeEach(() => { 
  const initialState = {
    comments: ['comment1','comment2']
  }
  wrapped = mount( //now in test CommentBox have access to store
    <Root initialState={initialState}> 
      <CommentList/>
    </Root>
    ); 
});
afterEach(() => { wrapped.unmount(); });

it('should creates a li per comment', () => {  
  expect(wrapped.find('li').length).toEqual(2);
});

it('should shows text for each comment', () => {  
  //render in enzyme back cheerio lib like jquery;
  expect(wrapped.render().text()).toContain('comment1');
  expect(wrapped.render().text()).toContain('comment2');
});




