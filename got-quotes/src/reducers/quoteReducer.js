const initialState = {
    quote: 'quote',
    character: 'character',
    isLoading: false,
}

export const GET_QUOTE_START = 'GET_QUOTE_START';
export const GET_QUOTE_SUCCESS = 'GET_QUOTE_SUCCESS';
export const GET_QUOTE_ERROR = 'GET_QUOTE_ERROR';

export const quoteReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_QUOTE_START:
            return {
                ...state,
                isLoading: true,
            }
        case GET_QUOTE_SUCCESS:
            return {
                ...state,
                quote: action.payload.quote,
                character: action.payload.character,
                isLoading: false,
            }
        case GET_QUOTE_ERROR:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
}