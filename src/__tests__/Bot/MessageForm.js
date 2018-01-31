import React from 'react';
import { render,mount, shallow  } from 'enzyme';

import MessageForm from '../../components/Bot/MessageForm';






it('check if state is getting emply after submit', () => {
    const preventDefault=jest.fn();
    const wrapper = mount(<MessageForm userMessage='Hello darling"' onSubmit={()=>{}} />);
    wrapper.find('input').filterWhere(node=>node.props().type==='text').simulate('change',{target:{name:'userMessage',value:'Barev'}});
    console.log(wrapper.state());
    wrapper.find('form').simulate('submit',{preventDefault});
    console.log(wrapper.state());
    expect(wrapper.state().userMessage).toEqual('');
  })

  it('the state should have the value send to it', () => {
    
    const wrapper = mount(<MessageForm userMessage='Hello darling"' onSubmit={()=>{}} />);
    wrapper.find('input').filterWhere(node=>node.props().type==='text').simulate('change',{target:{name:'userMessage',value:'Barev'}});
    
    expect(wrapper.state().userMessage).toEqual('Barev');
  })
