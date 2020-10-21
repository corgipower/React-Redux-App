import React from 'react';
import { connect } from 'react-redux';
import {getQuote} from '../actions/quoteActions'

const GotQuotes = (props) => {
    if(props.isLoading) {
        return(
            <p className='character'>Getting GOT quote</p>
        )
    }

    return(
        <div>
            <cite>{props.quote}</cite>
            <p className='character'>{props.character}</p>
            <button onClick={props.getQuote}>Get GOT Quote</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        quote: state.quote,
        character: state.character,
        isLoading: state.isLoading,
    }
}

const mapDispatchToProps = {
    getQuote,
}

export default connect(mapStateToProps, mapDispatchToProps)(GotQuotes);