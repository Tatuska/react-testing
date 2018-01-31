import React from 'react';
import { render, mount, shallow } from 'enzyme';
import Bot from '../../components/Bot/Bot';
import MessageForm from '../../components/Bot/MessageForm';
import sinon from 'sinon'
import { botReply, responses } from '../../api/index'


test('messeages are rendere in the page', () => {

    const messages = ['arev', 'barev']
    const wrapper = mount(<Bot messages={messages} />)
    expect(wrapper.find('p').find('barev')).toBeDefined();
})



it('should  sendReply be called', () => {
     const wrapper = mount(<Bot />);
    wrapper.find('form').simulate('submit', {
        message: ['barev', 'arev'],
        bot: false
    });
     expect(wrapper.state().typing).toBe(true);
})


it('check if message is in state', () => {
    const mess = 'barev';
    const wrapper = shallow(<Bot />);
    const messageForm = wrapper.find(MessageForm);
    messageForm.simulate('submit', mess);
    expect(wrapper.state().messages).not.toEqual([]);

})

jest.useFakeTimers();
function flushAllPromises() {
    return new Promise(resolve => setImmediate(resolve));
}



it('get reply from Bot', async () => {
    const wrapper = mount(<Bot />);
    const messageForm = wrapper.find(MessageForm);
    messageForm.simulate('submit');
    jest.runAllTimers();
    await flushAllPromises();
    expect(wrapper.state().messages[1].bot).toBe(true);

})




