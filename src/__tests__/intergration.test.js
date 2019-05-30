//in big app it can be comment integration vs others
import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';


beforeEach(()=>{ 
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
    //this obj return back to axios
    status: 200,
    response: [{name:'fetch#1'}, {name:'fetch#2'}]
  })
  //that turn off axios
});

afterEach(()=>{ moxios.uninstall()});

it('should can fetch a list of comment and display', done => {
  //done let us hold back jest for that timeout
  const wrapped = mount(<Root><App/></Root>);
  wrapped.find('.fetch-comments').simulate('click');
  //set time out to let moxios do his req
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    done();
    wrapped.unmount();
  });
  //axios can not get out of full dom env because it is fake req => moxios <=> axios
  //moxios fraud axios that req is done as soon as pos
});

