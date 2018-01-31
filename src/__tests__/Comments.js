import React from 'react';
import { render,mount, shallow  } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Comments from '../components/Comments';
import { removeComment } from '../api';

test('expect to find CreateNewComment rendered also', () => {
    const wrapper = shallow(<Comments postId='565ddy34' currentPersona='Zac' />)
  
    expect(wrapper.find('CreateNewComment')).toBeDefined();
});

test('expect to find SingleComment rendered also', () => {
    const wrapper = shallow(<Comments  postId='565ddy34' currentPersona='Zac'/>)
  
    expect(wrapper.find('SingleComment')).toBeDefined();
})

test('check if all the comments from state are rendered', () => {
    localStorage.clear();
    const comments=['arev','barev','hello'];

    const wrapper = mount(<Comments  postId='565ddy34' currentPersona='Zac' />);
   expect(wrapper.state().comments).toEqual([]);
   wrapper.setState({ comments: comments });
    wrapper.instance().renderCommentList(comments);
    
    expect(wrapper.find('SingleComment')).toHaveLength(3);
})



test('check if remove comment function is working', () => {
    localStorage.clear();
    const comments=[{comment:'arev',id: 1,postId:'565ddy34',author:'tatev',date:''},{comment:'barev',id: 2,postId:'565ddy345',author:'tatev',date:''},{comment:'barev',id: 2123,postId:'565ddy3asd45',author:'tatev',date:''}];
    const wrapper = mount(<Comments  postId='565ddy34' currentPersona='Zac' />);
    const stringifiedObject = JSON.stringify(comments);
   localStorage.setItem(`comments`, stringifiedObject);
   console.log(localStorage.getItem('comments'));
   removeComment(1);

    console.log(localStorage.getItem('comments'));
   expect(localStorage.getItem('comments')).toHaveLength(2);
    
})
