import { SAVE_COMMENT } from 'constants/constants';

export function saveComment(comment) {
    const action = {
        type: SAVE_COMMENT,
        payload: comment
    }
    return action;
}