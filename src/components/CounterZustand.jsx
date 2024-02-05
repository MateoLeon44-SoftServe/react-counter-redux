import classes from './Counter.module.css';
import { useState } from 'react';
import useCounterStore from '../store-zustand/counterZustand';

const CounterZustand = () => {
    const { counter, increment, decrement, setByN, toggleCounter, showCounter } = useCounterStore()
  const [number, setNumber] = useState(0)

  const toggleCounterHandler = () => {
    toggleCounter()
  };

  const incrementHandler = () => {
    increment()
  }

  const decrementHandler = () => {
    decrement()
  }

  const setByNHandler = () => {
    setByN({ amount: number })
  }

  return (
    <main className={classes.counter}>
      <h1>Zustand Counter</h1>
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

export default CounterZustand;
