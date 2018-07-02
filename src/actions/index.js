import { SAVE_COMMENT, FETCH_COMMENTS } from 'constants/constants';

import axios from 'axios';

export function saveComment(comment) {
    const action = {
        type: SAVE_COMMENT,
        payload: comment
    }
    return action;
}

export function fetchComments() {

    const response = axios.get('http://jsonplaceholder.typicode.com/comments');

    return {
        type: FETCH_COMMENTS,
        payload: response
    }

}