import React from 'react';
import { render,mount, shallow  } from 'enzyme';
import  fakePost from '../fakePosts'
import App from '../components/App';
import PersonaSwitcher from '../components/PersonaSwitcher'
import sinon from 'sinon';

test('renders the app', () => {
  render(<App />);
});

test('expect to find Button rendered at the start', () => {
  const wrapper = shallow(<App />)
  
  expect(wrapper.find('Button')).toBeDefined();
});

test('expect to find PersonaSwitcher rendered at the start', () => {
  const wrapper = shallow(<App />)
  
  expect(wrapper.find('PersonaSwitcher')).toBeDefined();
});

test('expect to find Posts rendered at the start', () => {
  const wrapper = shallow(<App />)
  
  expect(wrapper.find('Posts')).toBeDefined();
});

test('find the first button and see what is written on it', () => {
  const wrapper = shallow(<App />);
  const firstButton=wrapper.find('Button');
expect(firstButton.contains('Talk to real human'));
});

test('change the page from home to bot', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().changePage();
expect(wrapper.state().currentPage).toEqual('bot');
wrapper.instance().changePage();
expect(wrapper.state().currentPage).toEqual('home');
});

test('change person', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(PersonaSwitcher).render().find('select').val()).toEqual('Zac');
  const term=wrapper.find('select');
  term.simulate('change',{target:{value:"tatev"}});
expect(wrapper.state().currentPersona).toEqual('tatev');

});

test('calls componentDidMount', () => {
  sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    console.log(wrapper.state());
    expect(App.prototype.componentDidMount.calledOnce).toEqual(true);
});

