
import {createStore,applyMiddleware,combineReducers} from 'redux'
import navbar from "../store/reducers/list/navBar"
import  reduxpromisemiddle from 'redux-promise-middleware'
import home from  "../store/reducers/home"
import myJudgeLogin from "../store/reducers/my/myJudgeLogin"
import cart from "../store/reducers/cart/cartReducer"
 const reducers = combineReducers({
     navbar,home,myJudgeLogin,cart
 })
const store = createStore(reducers,applyMiddleware(reduxpromisemiddle()));
export default store

