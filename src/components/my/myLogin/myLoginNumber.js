//
import React,{Component,Fragment} from "react";

export default class Register extends Component{
    render(){
        return (
            <Fragment>
                 <div className="myLoginNum" id="myLoginNum">
                    <p>
                        <i className="iconfont">&#xe678;</i>
                        <input type="text" placeholder="手机号/用户名/邮箱" />
                    </p>
                    <p>
                        <i className="iconfont">&#xe694;</i>
                        <input type="text" placeholder="登录密码" />
                        <span>获取验证码</span>
                    </p>
                    <a>登录</a>
                    <div ><a href="#/myregister">快速注册</a><a>忘记密码</a></div>
                </div>
            </Fragment>
        )
    }
}