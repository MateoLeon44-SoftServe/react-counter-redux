import Counter from './components/Counter';
import CounterZustand from './components/CounterZustand';
import { Provider } from 'react-redux'
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <Counter />
      <CounterZustand />
    </Provider>
  );
}

export default App;
