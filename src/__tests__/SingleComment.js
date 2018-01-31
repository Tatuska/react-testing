import React from 'react';
import { render,mount, shallow  } from 'enzyme';
import SingleComment from '../components/SingleComment';
import sinon from 'sinon';


test('expect to find AvatarSelector rendered also', () => {
    const wrapper = shallow(<SingleComment id='123' onClick={() => {}} currentPersona="Julia" comment="barev" author='tatev' date='2018-10-10' />)
  
    expect(wrapper.find('Button')).toBeDefined();
});



test('explect onlick to be called', () => {
    const onClick=jest.fn();
    const wrapper = mount(<SingleComment id='123' onClick={onClick} currentPersona="Zac" comment="barev" author='Zac' date='2018-10-10' />)
  
wrapper.find('button').simulate('click',1);
expect(onClick).toHaveBeenCalled();
  
});

test('if currentperson is not equal to author then no BUTTON', () => {
    const onClick=jest.fn();
    const wrapper = mount(<SingleComment id='123' onClick={onClick} currentPersona="Zac" comment="barev" author='tatev' date='2018-10-10' />)
  

    expect(wrapper.find('Button')).toHaveLength(0);
  
});

