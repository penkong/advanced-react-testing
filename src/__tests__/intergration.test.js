//in big app it can be comment integration vs others
import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';

it('should can fetch a list of comment and display', () => {
  const wrapped = mount(<Root><App/></Root>);
  wrapped.find('.fetch-comments').simulate('click');
  expect(wrapped.find('li').length).toEqual(500);
});

