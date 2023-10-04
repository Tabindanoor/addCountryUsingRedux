import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


const MyReducer = (state={countries:[]},action) =>{
    switch (action.type) {
        case "ADD_COUNTRY":
            return(
                {...state , countries:[...state.countries, action.payload]}
            )
        case "UPDATE_COUNTRIES":
            return(
                {...state, countries:action.payload}
                )
    
        default:
            return(
                state
            )
    }
}


export const store = createStore(MyReducer, applyMiddleware(thunk));