
import {createStore,applyMiddleware,combineReducers} from 'redux'
import navbar from "../store/reducers/list/navBar"
import  reduxpromisemiddle from 'redux-promise-middleware'
import myJudgeLogin from './reducers/my/myJudgeLogin'
import cart from './reducers/cart/cartReducer'

import home from  "../store/reducers/home/home"
 const reducers = combineReducers({
     navbar,home,myJudgeLogin,cart
 })
const store = createStore(reducers,applyMiddleware(reduxpromisemiddle()));
export default store

