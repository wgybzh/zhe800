
import React,{Component,Fragment} from "react";
import {connect} from "react-redux"
class MyLoginNumber extends Component{
   
    render(){
        let {confirmLogin} = this.props
        return (
            <Fragment>
                 <div className="myLoginNum" id="myLoginNum">
                    <p>
                        <i className="iconfont">&#xe678;</i>
                        <input type="text" ref="name" placeholder="手机号/用户名/邮箱" />
                    </p>
                    <p>
                        <i className="iconfont">&#xe694;</i>
                        <input type="text" ref="pwd" placeholder="登录密码" />
                       
                    </p>
                    <a onClick={confirmLogin.bind(this)}>登录</a>
                    <div ><a href="#/myregister">快速注册</a><a>忘记密码</a></div>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = (state)=>({
    phone:state.myJudgeLogin.phone,
    pwd:state.myJudgeLogin.pwd,
    list:state.myJudgeLogin.list
})
const mapDispatchToProps = (dispatch)=>({
    confirmLogin(){
        console.log(this.props)
        let name = localStorage.getItem("list")
        console.log(name)
        //dispatch(confirmAction())
        this.props.history.push("/index/my")
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(MyLoginNumber)