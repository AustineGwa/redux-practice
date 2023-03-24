import { BUY_CAKE } from "./Constants"

const initialState ={
    numOfCakes : 10
}

const CakeReducer = (state=initialState,action) =>{
    switch(action){
        case  BUY_CAKE : return{
            ...state,
            numOfCakes : state.numOfCakes - 1
        }

        default : return state

    }
}

export default CakeReducer