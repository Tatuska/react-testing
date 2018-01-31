import React from 'react';
import { render,mount, shallow  } from 'enzyme';

import CreateNewComment from '../components/CreateNewComment';






it('submit a new comment', () => {
  localStorage.clear();
    const wrapper = mount(<CreateNewComment postId='_alskmo'
      author='tatev' comment='hello,good morning to everyone!'
      updateComments={() => {}} />);
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('tatev')).toBeDefined();
  })