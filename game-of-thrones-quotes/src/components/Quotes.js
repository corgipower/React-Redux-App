import React from 'react';
import { connect } from 'react-redux';

const Quotes = (props) => {
    return (
        <div>
            <p>{props.quote}</p>
            <p>{props.character}</p>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        quote: state.quote,
        character: state.character,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // updateQuote: () => dispatch(updateQuote),
    }
}

export default connect(mapStateToProps, null)(Quotes);