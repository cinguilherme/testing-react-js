import { SAVE_COMMENT, FETCH_COMMENTS } from 'constants/constants';

export default function (state = [], action) {

    switch (action.type) {

        case SAVE_COMMENT:
            return [...state, action.payload];

        case FETCH_COMMENTS:
            const comments = [];
            action.payload.data.forEach(data => {
                comments.push(data.name);
            });
            return [...state, ...comments];
        default:
            return state;
    }
}