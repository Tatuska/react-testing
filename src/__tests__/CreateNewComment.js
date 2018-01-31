import React from 'react';
import { render,mount, shallow  } from 'enzyme';
import CreateNewComment from '../components/CreateNewComment';


it('submit a new comment', () => {
  localStorage.clear();
    const wrapper = mount(<CreateNewComment postId='_alskmo'
      author='tatev' comment='hello,good morning to everyone!'
      updateComments={() => {}} />);
      wrapper.setState({comment:'hello,good morning to everyone!'});
    wrapper.find('form').simulate('submit');
    const comment=localStorage.getItem('comments');
  expect(comment).toContain('hello,good morning to everyone!')
})

  it('simulate change and check the state', () => {
    localStorage.clear();
    const preventDefault=jest.fn();
      const wrapper = mount(<CreateNewComment postId='_alskmo'
        author='tatev' comment='hello,good morning to everyone!'
        updateComments={() => {}} />);
        wrapper.setState({comment:'hello,good morning to everyone!'});
      wrapper.find('textarea').simulate('change',{ target: { name:'new',value: '7' } });
      expect(wrapper.state().new).toEqual('7');
  
    })