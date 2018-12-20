import React,{Component,Fragment} from "react";
import "../../../common/css/myCss/myRegister.css"
import login from "../../../common/img/myImg/login.png"
export default class MyCommonHead extends Component{
    render(){
        return (
            <Fragment>
               <img src={login} />
            </Fragment>
        )
    }
}