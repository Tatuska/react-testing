import React from 'react';
import { render,mount, shallow  } from 'enzyme';

import TypingIndicator from '../../components/Bot/TypingIndicator';


it('expecting to find p', () => {
    
    const wrapper = shallow(<TypingIndicator typing={true}/>);
    
    expect(wrapper.find('span')).toHaveLength(3);
  })