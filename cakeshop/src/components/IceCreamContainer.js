import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { buyIcecream } from '../redux'

function CakeContainer (){
    const numOfIcecream = useSelector(state =>state.iceCream.numOfIcecream)
    const dispatch = useDispatch()

    return(
        <div>
            <h2>Number Of iceCream - {numOfIcecream}</h2>
            <button onClick={() => dispatch(buyIcecream())}>Buy cake</button>
        </div>
    )
}

export default CakeContainer 