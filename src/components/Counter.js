import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const increment = () => {
        dispatch({ type:'increment'});
    }

    const decrement = () => {
        dispatch({ type:'decrement'});
    }

    const increase = () => {
        dispatch({ type: 'increase', value: 10})
    }


    const toggleCounterHandler = () => { };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <div>
                <button onClick={increment}> Increment </button>
                <button onClick={increase}> Increase by 10 </button>
                <button onClick={decrement}> Decrement </button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
