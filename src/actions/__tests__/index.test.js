
import { saveComment } from 'actions';

import { SAVE_COMMENT } from 'constants/constants';

describe('saveComment action tests', () => {

    it('has the correct type', () => {

        const action = saveComment();

        expect(action.type).toEqual(SAVE_COMMENT);
        expect(action.payload).toEqual(undefined);
        
    });

    it('has the correct payload', () => {
        const newComment = 'comment';
        const action = saveComment(newComment);

        expect(action.type).toEqual(SAVE_COMMENT);
        expect(action.payload).toEqual(newComment);
    });

});
