
import {createStore,applyMiddleware,combineReducers} from 'redux'
import navbar from "../store/reducers/list/navBar"
import  reduxpromisemiddle from 'redux-promise-middleware'

import myJudgeLogin from "../store/reducers/my/myJudgeLogin"
import cart from "../store/reducers/cart/cartReducer"

import home from  "../store/reducers/home/home"
import homeBranch from "../store/reducers/homeBranch/homeBranch"
 const reducers = combineReducers({
     navbar,home,myJudgeLogin,cart,homeBranch
 })

const store = createStore(reducers,applyMiddleware(reduxpromisemiddle()));
export default store

