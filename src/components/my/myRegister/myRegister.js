import React,{Component,Fragment} from "react";
import "../../../common/css/myCss/myLogin.css"
export default class Register extends Component{
    render(){
        return (
            <Fragment>
                 
                <div className="myRegisterTop">
                <a href="#/index/my">
                    <i className="fa fa-mail-reply"></i>
                </a>
                    注册
                </div>
                <div className="myLoginNum" id="myLoginNum">
                    <p>
                        <i className="iconfont">&#xe678;</i>
                        <input type="text" placeholder="手机号" />
                    </p>
                    <p>
                        <i className="iconfont">&#xe62a;</i>
                        <input type="text" placeholder="动态验证码" />
                        <span>获取验证码</span>
                    </p>
                    <a>注册</a>
                </div>
                
            </Fragment>
        )
    }
}