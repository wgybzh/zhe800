
import React,{Component,Fragment} from "react";
import "../../../common/css/myCss/myLogin.css"
import MyCommonHead from "./myCommonHead"
import MyLoginSear from "./myLoginSear"
export default class Login extends Component{
    render(){
        return (
            <Fragment>
               <div className="myHeadBanner">
                    <a href="#/index/my">
                        <i className="fa fa-mail-reply"></i>
                    </a>
                    <MyCommonHead />
                    <MyLoginSear />
               </div>
            </Fragment>
        )
    }
}