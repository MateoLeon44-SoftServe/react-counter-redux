import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)
  const showCounter = useSelector((state) => state.showCounter)
  const [number, setNumber] = useState(0)

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' })
  };

  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement' })
  }

  const setByNHandler = () => {
    dispatch({ type: 'setByN', amount: number })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { showCounter &&
        <div className={classes.value}>{counter}</div>
      }
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      
      <input value={number} onChange={e => setNumber(e.target.value)} type="number" />
      <button onClick={setByNHandler}>Set counter</button>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
