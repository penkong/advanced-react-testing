import React from 'react';
import { mount } from 'enzyme'; //mount === fulldom
import CommentBox from 'components/CommentBox';
import Root from 'Root';


//full dom has interact need to unmount
let wrapped;
beforeEach(() => { 
  wrapped = mount( //now in test CommentBox have access to store
    <Root> 
      <CommentBox/>
    </Root>
    ); 
});
afterEach(() => { wrapped.unmount(); });

it('should has a textarea and 2 buttons', () => {  
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});
//desc group tests in a func and has own beforeEach
describe('the textarea', () => {
  beforeEach(()=>{
    //fake simulate for changes of event 
    wrapped.find('textarea').simulate('change', { //this obj go merge with real obj in event handler
      target: { value: 'new comment' }
    });
  });
  it('should has a textarea can type in', () => {
     //force update
    wrapped.update(); //this guy take out props
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('should has a form clear textarea after submit', () => {
    wrapped.update();
    wrapped.find('form').simulate('submit'); //exec submit indeed
    //because of async notation of setState
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
})



