import React from 'react';
import { connect } from 'react-redux';
import {updateQuote} from '../actions/quoteActions'

const Quotes = (props) => {

    if(props.isLoading) {
        return <p className='character'>Quote is being GOT</p>
    }

    return (
        <div>
            <cite>{props.quote}</cite>
            <p className='character'>-{props.character}</p>
            <button onClick={props.updateQuote}>Get Quote</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        quote: state.quote,
        character: state.character,
        isLoading: state.isLoading,
    }
}

const mapDispatchToProps = {updateQuote}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);