import React from 'react';
import WithCounter from './WithCounter';

const ClickCounter = (props) => {
    const {count,incrementCount} = props;
    return (
        <div>
            <button type='btn' onClick={incrementCount}>
                Clicked {count} times
            </button>
        </div>
    );
};

export default WithCounter(ClickCounter);