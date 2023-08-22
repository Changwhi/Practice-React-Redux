import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index'


const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const toggle = useSelector(state => state.counter.isExpended);

    const increment = () => {
        dispatch(counterActions.increment());
    }

    const decrement = () => {
        dispatch(counterActions.decrement());
    }

    const increase = () => {
        dispatch(counterActions.increase(10))
    }

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {toggle && <div className={classes.value}>{counter}</div>}
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
