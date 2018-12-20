
import {createStore,applyMiddleware,combineReducers} from 'redux'
import navbar from "../store/reducers/list/navBar"
import  reduxpromisemiddle from 'redux-promise-middleware'
import home from  "../store/reducers/home"
 const reducers = combineReducers({
     navbar, home
 })
const store = createStore(reducers,applyMiddleware(reduxpromisemiddle()));
export default store

