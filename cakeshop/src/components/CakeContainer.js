import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props){
    return(
        <div>
            <h2>Number Of Cakes - {props.cake.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

//state from redux store is mapped to our components' props
//here the component will recieve an added prop called numOfCakes
const mapStateToProps = (state) =>{
    return{
        numOfCakes : state.cake.numOfCakes
    }
}

//maps a dispatch of an action creator to a prop in our component
const mapDispatchToProp = (dispatch) =>{
    return {
        buyCake : ()=> dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProp)
 (CakeContainer)