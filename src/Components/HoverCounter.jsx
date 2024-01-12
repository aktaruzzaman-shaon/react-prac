import React from 'react';
import WithCounter from './WithCounter';

const HoverCounter = (props) => {
    const {count,incrementCount} = props;
    return (
        <div>
            <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
        </div>
    );
};

export default WithCounter(HoverCounter);