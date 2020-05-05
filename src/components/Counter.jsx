import React, { useState } from 'react';

// Component that has its own state
const Counter = () => {
    const [value, setValue] = useState(10);
    const increase = () => setValue(value + 1);
    const decrease = () => setValue(value - 1);
    return (
        <div className="border">
            Value: {value} (plain React, state in component)<br/>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default Counter;
