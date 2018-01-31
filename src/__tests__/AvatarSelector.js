import React from 'react';
import { render,mount, shallow  } from 'enzyme';
import AvatarSelector from '../components/AvatarSelector';

test('expect to find the picture of the currentPersona', () => {
    const wrapper = mount(<AvatarSelector currentPersona='Zac' />)
    const src = "zac.png",
    
     imgSrc = wrapper.find('img').prop('src');
    console.log(imgSrc);
    expect(imgSrc).toEqual(src);
   // expect(wrapper.find('img')).proptoBe();
});




