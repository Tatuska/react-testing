import React from 'react';
import { render,mount, shallow  } from 'enzyme';
import SinglePost from '../components/SinglePost';
import sinon from 'sinon';


test('explect onlick to be called', () => {
    const onClick=jest.fn();
    const wrapper = mount(<SinglePost title='new' content='Hello dear!' id='123' onClick={onClick} currentPersona="Zac" comment="barev" author='Zac' date='2018-10-10' />)
  
wrapper.find('button').simulate('click',1);
expect(onClick).toHaveBeenCalled();
  
});

test('if currentperson is not equal to author then no BUTTON', () => {
const onClick=jest.fn();
const wrapper = mount(<SinglePost title='new' content='Hello dear!' id='123' onClick={onClick} currentPersona="tatev" comment="barev" author='Zac' date='2018-10-10' />)
expect(wrapper.find('button')).toHaveLength(0);
  
});