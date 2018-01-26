

import {ADD_COMMENT} from './actions'
import {REMOVE_COMMENT} from './actions'
import {EDIT_COMMENT} from './actions'
import {THUMB_UP_COMMENT} from './actions'
import {THUMB_DOWN_COMMENT} from './actions'

const initialState = {
    comments: [],
    users: []
};

/*function reducer(state = initialState, action) {
    if (!state) {
        return initialState;
}
    return state;
}*/

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state.comments]
		case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
        case EDIT_COMMENT:
			return comments.map(item => item.id === action.id ? Object.assign({}, item, { text: action.text }) : item ); 
		case THUMB_UP_COMMENT:  
			return comments.map(item => item.id === action.id ? Object.assign({}, item, { rate: item.rate + 1 }) : item ); 
		case THUMB_DOWN_COMMENT:
			return comments.map(item => item.id === action.id ? Object.assign({}, item, { rate: item.rate - 1 }) : item ); 
			/////POPRAWIĆ
			
			});
        default:
            return state;
    }
}

