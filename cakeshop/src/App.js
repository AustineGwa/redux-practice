import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksContainer from './components/HooksCakeContainer'
import { Provider } from 'react-redux';
import IceCreamContainer from './components/IceCreamContainer';
import store from  './redux/Store'

function App() {
  return (

    <Provider store={store}>
      <div className="App">
          {/* <p>redux with hooks , using connect()</p>
          <CakeContainer /> */}
          

          <p>redux with redux hooks</p>
          <HooksContainer />
          <IceCreamContainer />

      </div>
    </Provider>
    
  );
}

export default App;
