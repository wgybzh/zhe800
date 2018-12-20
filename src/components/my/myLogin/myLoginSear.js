//
import React,{Component,Fragment} from "react";
import {NavLink,Route} from "react-router-dom"
import MyLoginLetter from "./myLoginLetter"
import MyLoginNumber from "./myLoginNumber"
export default class Register extends Component{
    render(){
        return (
            <Fragment>
               
               <div className="myloginSear">
                  <img src="http://i0.tuanimg.com/ms/zhe800m/dist/img/passport/m_banner_02.jpg"/>
                    <div className="myloginSearCon">
                        <NavLink to="/mylogin/myLoginLetter">短信验证登录</NavLink>
                        <NavLink to="/mylogin/myLoginNumber">账号密码登录</NavLink>
                        
                    </div>
                    
               </div>
               <Route path="/mylogin/myLoginLetter" component={MyLoginLetter}/>
               <Route path="/mylogin/myLoginNumber" component={MyLoginNumber}/>
            </Fragment>
        )
    }
}