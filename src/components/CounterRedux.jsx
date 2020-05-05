import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../features/counter';

// Component that uses the global state (from the Redux store)
const CounterRedux = () => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.counter);
    const increase = () => dispatch(actions.increase());
    const decrease = () => dispatch(actions.decrease());
    return (
        <div className="border">
            Value: {value} (React with Redux, state in store)<br/>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default CounterRedux;
