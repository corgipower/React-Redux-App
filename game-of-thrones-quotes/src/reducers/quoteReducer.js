export const initialState = {
    quote: 'quote placeholder',
    character: 'character placeholder',
}

export const UPDATE_QUOTE = "UPDATE_QUOTE";

export const quoteReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_QUOTE:
            return {
                ...state,
                quote: '',
                character: '',
            }
        default:
            return state;
    }
}