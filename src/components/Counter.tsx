import React from 'react';

const Counter = ({ onIncrease, onDecrease, number }) => {
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={onIncrease}>++</button>
                <button onClick={onDecrease}>--</button>
            </div>
        </div>
    );
};

export default Counter;