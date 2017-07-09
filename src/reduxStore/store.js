import { createStore, combineReducers } from 'redux'
import  bookReducer from './reducers/bookReducer'


let reducers = combineReducers({
    bookData:bookReducer
})
let store = createStore(reducers);

export  default store