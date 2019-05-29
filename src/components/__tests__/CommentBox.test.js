import React from 'react';
import { mount } from 'enzyme'; //mount === fulldom
import CommentBox from 'components/CommentBox';
//full dom has interact need to unmount
let wrapped;
beforeEach(() => { wrapped = mount(<CommentBox/>); });
afterEach(() => { wrapped.unmount(); });

it('should has a textarea and a button', () => {  
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('should has a textarea can type in', () => {  
  //fake simulate for changes of event
  wrapped.find('textarea').simulate('change',{ //this obj go merge with real obj in event handler
    target: {value : 'new comment'}
  }); //force update
  wrapped.update();            //this guy take out props
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it('should has a form clear textarea after submit', () => {  
  wrapped.find('textarea').simulate('change',{
    target: { value : 'new comment' }
  }); 
  //because of async notation of setState
  wrapped.update();
  wrapped.find('form').simulate('submit');//exec submit indeed
  wrapped.update();
  expect(wrapped.find('textarea').prop('value')).toEqual('');
});
