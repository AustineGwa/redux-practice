import {combineReducers} from 'redux';
import CounterReducer from './counterReducer';
import IsloggedInReducer from './IslogedInReducer';

const RootReducer = combineReducers({
    counter : CounterReducer,
    islogged : IsloggedInReducer
})

export default RootReducer


