import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { buyCake } from '../redux'

function HooksContainer(){
    const numOfCakes = useSelector(state =>state.cake.numOfCakes)
    const dispatch = useDispatch()

    return(
        <div>
            <h2>Number Of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksContainer