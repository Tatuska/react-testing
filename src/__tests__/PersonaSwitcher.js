import React from 'react';
import { render,mount, shallow  } from 'enzyme';

import PersonaSwitcher from '../components/PersonaSwitcher';

test('expect to find AvatarSelector rendered also', () => {
    const wrapper = shallow(<PersonaSwitcher currentPersona="Zac" changePersona={() => {}} />)
  
    expect(wrapper.find('AvatarSelector')).toBeDefined();
});

test('expect to find 3 persona ', () => {
    const wrapper = shallow(<PersonaSwitcher currentPersona="Zac" changePersona={() => {}} />)
    const list= wrapper.find('option')
    expect(list.children()).toHaveLength(3);
});