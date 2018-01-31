import React from 'react';
import { render,mount, shallow  } from 'enzyme';

import Button from '../components/Button';

it.skip('button data test te designed', () => {
    //const wrapper = mount(<Button onClick={() => {}} />);
    const wrapper = shallow(<Button onClick={() => {}} children="open"/>);
    expect(wrapper.text()).toContain('open');
  })

  it('should contain defaul styling', () => {
    //const wrapper = mount(<Button onClick={() => {}} />);
  const wrapper = shallow(<Button  onClick={() => {}} children="open"/>);
   expect(wrapper.contains('defaultStyle'));
  })

  it('the button name should be the name passed as children', () => {
    //const wrapper = mount(<Button onClick={() => {}} />);
  const wrapper = shallow(<Button  onClick={() => {}} children="open"/>);
   expect(wrapper.text()).toContain('open');
  })
