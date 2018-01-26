import uuid from uuid;
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: 5 //id jakiegoś komentarza który ma być usunięty
    }
}

function editComment(text) {
    return {
        type: EDIT_COMMENT,
        id: 10,
		text: 'zeedytowany tekst'
    }
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
		text,
        id: 7 //id jakiegoś komentarza który ma dostać kciuk w górę
    }
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
		text,
        id: 8 //id jakiegoś komentarza który ma być usunięty
    }
}