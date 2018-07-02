import React from 'react';

import { mount } from 'enzyme';

import CommentList from 'components/CommentList';

import Root from 'Root';

let wrapped;
let arrComment = ['Comment 1', 'Comment 2'];

beforeEach(() => {

    const initialState = {
        comments: arrComment
    };

    wrapped = mount(
    <Root initialState={initialState}>
        <CommentList />
    </Root>);

});

it('creates an LI for each comment', () => {

    expect(wrapped.find('li').length).toEqual(2);

});

it('has the text of the comments in the state rendered', () => {
    
    expect(wrapped.render().text()).toContain('Comment 1');
    
    wrapped.find('li').forEach((li, index) => {
        
        expect(li.render().text()).toEqual(arrComment[index]);

    });
    expect(wrapped.render().text()).toContain('Comment 2');
});