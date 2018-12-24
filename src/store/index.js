
import {createStore,applyMiddleware,combineReducers} from 'redux'
import navbar from "../store/reducers/list/navBar"
import  reduxpromisemiddle from 'redux-promise-middleware'
import home from  "../store/reducers/home/home"
import homeBranch from "../store/reducers/homeBranch/homeBranch"
 const reducers = combineReducers({
     navbar, home,homeBranch
 })
const store = createStore(reducers,applyMiddleware(reduxpromisemiddle()));
export default store

