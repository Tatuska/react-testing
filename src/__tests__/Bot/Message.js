import React from 'react';
import { render,mount, shallow  } from 'enzyme';
import Message from '../../components/Bot/Message';


it('expecting to find p', () => {
    const wrapper = mount(<Message message='Hello darling' bot={true} />);
    expect(wrapper.find('p').text()).toEqual('Hello darling');
  })