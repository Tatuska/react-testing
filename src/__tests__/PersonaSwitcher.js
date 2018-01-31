import React from 'react';
import { render,mount, shallow  } from 'enzyme';

import PersonaSwitcher from '../components/PersonaSwitcher';
import toJSON from 'enzyme-to-json';
import {fetchPersonas} from '../api/index'
import { loadavg } from 'os';

test('expect to find AvatarSelector rendered also', () => {
    const wrapper = shallow(<PersonaSwitcher currentPersona="Zac" changePersona={() => {}} />)
  
    expect(wrapper.find('AvatarSelector')).toBeDefined();
});

test('expect to find 3 persona ', () => {
    const wrapper = shallow(<PersonaSwitcher currentPersona="Zac" changePersona={() => {}} />)
    const list= wrapper.find('option')
    expect(list.children()).toHaveLength(3);
});

test('test fetchPersonas function', () => {
    localStorage.clear();
    const personas=['me','you','they'];
    const stringified=JSON.stringify(personas);
    localStorage.setItem('personas',stringified);
    //const new=fetchPersonas();
    expect(fetchPersonas()).toHaveLength(3);
});