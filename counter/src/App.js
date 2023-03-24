import Sample from './components/sample/Sample';
import { useSelector,useDispatch} from 'react-redux';
import { increment,decrement } from './actions';

function App() {

  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
       <h1>Counter {counter} </h1>
       <button onClick={() => dispatch(increment(10))}>+</button><br/><br/>
       <button onClick={() => dispatch(decrement(5))}>-</button>

       {isLogged ? <h3>valuable secret </h3> : ''}
       
    </div>
  );
}

export default App;
