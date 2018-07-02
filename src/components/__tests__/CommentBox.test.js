import React from 'react';
import { mount, unmount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

const commenttxt = 'new comment';

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>);
});

afterEach(() => {
    wrapped.unmount();
});

it('shows a textarea and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});


describe('begins changing de txt in the textarea', () => {

    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: {
                value: commenttxt
            }
        });
        wrapped.update();
    });

    it('has a textarea that acepts text input', () => {

        expect(wrapped.find('textarea').prop('value')).toEqual(commenttxt);
    });

    it('submits the form and clears the text area', () => {

        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});

