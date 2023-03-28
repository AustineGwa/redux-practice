import { combineReducers } from "redux";
import CakeReducer from './cakes/CakeReducer'
import icecreamReducer from './icecream/IcecreamReducer'


const rootReducer = combineReducers({
    cake :CakeReducer,
    iceCream : icecreamReducer
})

export default rootReducer