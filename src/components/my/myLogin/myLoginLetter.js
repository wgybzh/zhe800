//
import React,{Component,Fragment} from "react";

export default class Register extends Component{
    render(){
        return (
            <Fragment>
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
                    <a>登录</a>
                </div>
            </Fragment>
        )
    }
}