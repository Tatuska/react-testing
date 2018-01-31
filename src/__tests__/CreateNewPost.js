import React from 'react';
import { render,mount, shallow  } from 'enzyme';

import CreateNewPost from '../components/CreateNewPost';






it('submit a new post', () => {
    localStorage.clear();
    const wrapper = mount(<CreateNewPost updatePosts={() => {}}
        author='tatev'
       />);
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('tatev')).toBeDefined();
  })