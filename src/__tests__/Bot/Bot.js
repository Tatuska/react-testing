import React from 'react';
import { render,mount, shallow  } from 'enzyme';
import Bot from '../../components/Bot/Bot';
import MessageForm from '../../components/Bot/MessageForm';
import sinon from 'sinon'
import {botReply,responses} from '../../api/index'

test('expect to find TypingIndicator rendered also', () => {
    const wrapper = shallow(<Bot  />)
  
    expect(wrapper.find('TypingIndicator')).toBeDefined();
});

test('expect to find MessageForm rendered also', () => {
    const wrapper = shallow(<Bot  />)
  
    expect(wrapper.find('MessageFormik')).toBeDefined();
});

test('expect to find Message rendered also', () => {
    const wrapper = shallow(<Bot  />)
  
    expect(wrapper.find('Message')).toBeDefined();
});




test('messeages are rendere in the page', () => {
    
    const messages=['arev','barev']
    const wrapper = mount(<Bot   messages={messages} />)
  
    expect(wrapper.find('p').find('barev')).toBeDefined();
})



  it('should  sendReply be called', () => {
 
    //const sendReply=jest.fn();
    const wrapper = mount(<Bot />);
    wrapper.find('form').simulate('submit',{
        message:['barev','arev'],
        bot: false
      });
      
      expect(wrapper.state().typing).toBe(true);
  })


  it('check if message is in state', () => {
 const mess='barev';
    const wrapper = shallow(<Bot />);
    const messageForm=wrapper.find(MessageForm);
    messageForm.simulate('submit',mess);
    console.log(wrapper.state());
    expect(wrapper.state().messages).not.toEqual([]);

  })

  jest.useFakeTimers();
  function flushAllPromises() {
    return new Promise(resolve => setImmediate(resolve));
  }

  

  it('get reply from Bot', async() => {
    const wrapper = mount(<Bot />);
    const messageForm=wrapper.find(MessageForm);
    messageForm.simulate('submit');
    jest.runAllTimers();
    await flushAllPromises();
    
    expect(wrapper.state().messages[1].bot).toBe(true);
    
  })



  



test.skip('timeout have been called',()=>{
    const timerActions=shallow(<Bot  />);
    
    const fakeCallback=jest.fn();
   //timerActions.instance().sendReply(fakeCallback);
   timerActions.find('MessageForm').simulate('submit');
    expect(fakeCallback).not.toHaveBeenCalled();
    jest.runAllTimers();
    expect(fakeCallback).toHaveBeenCalled();
});

test.skip('timeout have been called',()=>{
    const wrapper=shallow(<Bot  />);
    
   //const fakeCallback=jest.fn();
   //timerActions.instance().sendReply(fakeCallback);
   const clock = sinon.useFakeTimers();
   //console.log(wrapper.state());
   //const faper=mount(<MessageForm userMessage='bla'  />);
    const fu=wrapper.find('MessageForm').render();
  
expect(fu.find('MessageForm')).toBeDefined();
    //fu.find('form').simulate('submit', { message: 'blabla'});
    
   clock.tick(10000);
    //expect(fakeCallback).not.toHaveBeenCalled();
    //jest.runAllTimers();
    console.log(wrapper.state());
    //expect(wrapper.find('jhbajhbsdlh')).toBeDefined();
});