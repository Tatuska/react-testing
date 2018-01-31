import React from 'react';
import { render,mount, shallow  } from 'enzyme';
import SingleComment from '../components/SingleComment';
import sinon from 'sinon';


test('expect to find AvatarSelector rendered also', () => {
    const wrapper = shallow(<SingleComment id='123' onClick={() => {}} currentPersona="Julia" comment="barev" author='tatev' date='2018-10-10' />)
  
    expect(wrapper.find('Button')).toBeDefined();
});

test('check if the onlick is being called', () => {

   const onClick=jest.fn();
   const wrapper = mount(<SingleComment id='123' onClick={onClick} currentPersona="Julia" comment="barev" author='tatev' date='2018-10-10' />)
    wrapper.find(Button).render().find('button').simulate('click',{id:1})
    expect(onClick).toHaveBeenCalled();

});

