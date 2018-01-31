import React from 'react';
import { render,mount, shallow  } from 'enzyme';
import AvatarSelector from '../components/AvatarSelector';

test('expect to find the picture of the currentPersona 1', () => {
    const wrapper = mount(<AvatarSelector currentPersona='Zac' />)
    const src = "zac.png",
    
     imgSrc = wrapper.find('img').prop('src');
   
    expect(imgSrc).toEqual(src);
   // expect(wrapper.find('img')).proptoBe();
});

test('expect to find the picture of the currentPersona 2', () => {
    const wrapper = mount(<AvatarSelector currentPersona='Esmeralda' />)
    const src = "esmeralda.png",
    
     imgSrc = wrapper.find('img').prop('src');
   
    expect(imgSrc).toEqual(src);
   // expect(wrapper.find('img')).proptoBe();
});

test('expect to find the picture of the currentPersona 3', () => {
    const wrapper = mount(<AvatarSelector currentPersona='Morgana' />)
    const src = "morgana.png",
    
     imgSrc = wrapper.find('img').prop('src');
   
    expect(imgSrc).toEqual(src);
   // expect(wrapper.find('img')).proptoBe();
});



