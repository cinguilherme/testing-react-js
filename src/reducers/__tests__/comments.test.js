import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'constants/constants';


it('handdles actions of type SAVE_COMMENT', () => {

    const payload = 'new comment';
    const action = {
        type: SAVE_COMMENT,
        payload
    }

    const state = commentsReducer([], action);

    expect(state.length).toEqual(1);
    expect(state[0]).toEqual(payload);

});

it('returns the same state in case of unrecognized action type, not error of any sort', () =>{

    const payload = 'new comment';
    const action = {
        type: 'RANDOM',
        payload
    }

    const state = commentsReducer(['comment one', 'comment 2'], action);

    expect(state.length).toEqual(2);
    expect(state[0]).toEqual('comment one');
})