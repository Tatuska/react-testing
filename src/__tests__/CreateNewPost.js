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

  it('simulate change and check the state', () => {
   
      const wrapper = mount(<CreateNewPost postId='_alskmo'
        author='tatev' 
        updatePosts={() => {}} />);
        //wrapper.setState({comment:'hello,good morning to everyone!'});
      wrapper.find('textarea').simulate('change',{ target: { name:'new',value: '7' } });
      expect(wrapper.state().new).toEqual('7');
  
    })