import Axios from "axios"
import { GET_QUOTE_ERROR, GET_QUOTE_START, GET_QUOTE_SUCCESS } from "../reducers/quoteReducer"

export const getQuote = () => dispatch => {
    dispatch({
        type: GET_QUOTE_START,
    })
    Axios
        .get('https://got-quotes.herokuapp.com/quotes')
        .then(res => {
            dispatch({
                type: GET_QUOTE_SUCCESS,
                payload: res.data,
            })
        })
        .catch(err => {
            dispatch({
                type: GET_QUOTE_ERROR,
            })
            console.log(err);
        })
}