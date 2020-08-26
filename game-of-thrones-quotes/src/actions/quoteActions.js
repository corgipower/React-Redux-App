import { START_GETTING_QUOTE, SUCCESS_GETTING_QUOTE, ERROR_GETTING_QUOTE } from "../reducers/quoteReducer";
import axios from "axios";

export const updateQuote = () => (dispatch) => {
    dispatch({type: START_GETTING_QUOTE});
    axios
        .get('https://got-quotes.herokuapp.com/quotes')
        .then(res => {
            dispatch({
                type: SUCCESS_GETTING_QUOTE, 
                payload: res.data,
            });
            console.log('res', res.data.character, res.data.quote);
        })
        .catch(err => {
            dispatch({
                type: ERROR_GETTING_QUOTE,
            });
            console.log('err', err.response.statusText, err.response.status)});
}