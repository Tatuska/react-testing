import React from 'react';
import { render, mount, shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Comments from '../components/Comments';
import { removeComment } from '../api';



test('check if all the comments from state are rendered', () => {
    localStorage.clear();
    const comments = ['arev', 'barev', 'hello'];

    const wrapper = mount(<Comments postId='565ddy34' currentPersona='Zac' />);
    expect(wrapper.state().comments).toEqual([]);
    wrapper.setState({ comments: comments });
    wrapper.update();
    expect(wrapper.find('SingleComment')).toHaveLength(3);
})



test('check if remove comment function is working', () => {
    localStorage.clear();
    const comments = [{ comment: 'arev', id: 1, postId: '565ddy34', author: 'tatev', date: '' }, { comment: 'barev', id: 2, postId: '565ddy345', author: 'tatev', date: '' }, { comment: 'barev', id: 2123, postId: '565ddy3asd45', author: 'tatev', date: '' }];
    const wrapper = mount(<Comments postId='565ddy34' currentPersona='Zac' />);
    const stringifiedObject = JSON.stringify(comments);
    localStorage.setItem(`comments`, stringifiedObject);
    removeComment(1);
    expect(localStorage.getItem('comments')).toHaveLength(2);

})
