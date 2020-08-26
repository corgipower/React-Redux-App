export const initialState = {
    quote: 'quote placeholder',
    character: 'character placeholder',
    isLoading: false,
}

export const START_GETTING_QUOTE = "START_GETTING_QUOTE";
export const SUCCESS_GETTING_QUOTE = "SUCCESS_GETTING_QUOTE";
export const ERROR_GETTING_QUOTE = "ERROR_GETTING_QUOTE";

export const quoteReducer = (state = initialState, action) => {
    switch(action.type) {
        case START_GETTING_QUOTE:
            return {
                ...state,
                isLoading: true,
            };
        case SUCCESS_GETTING_QUOTE:
            return {
                ...state,
                character: action.payload.character,
                quote: action.payload.quote,
                isLoading: false,
            };
        case ERROR_GETTING_QUOTE:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
}