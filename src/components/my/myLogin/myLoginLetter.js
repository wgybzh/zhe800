//
import React,{Component,Fragment} from "react";
import {connect} from "react-redux"
class Register extends Component{
   
    render(){
       
        let {handlerInput,confimlogin} = this.props
        return (
            <Fragment>
                <div className="myLoginNum" id="myLoginNum">
                    <p>
                        <i className="iconfont">&#xe678;</i>
                        <input type="text" placeholder="手机号" ref="phone"
                        onBlur={handlerInput.bind(this)} />
                        <em ref="info"></em>
                    </p>
                    <p>
                        <i className="iconfont">&#xe62a;</i>
                        <input type="text" placeholder="动态验证码" ref="pwd"/>
                        <span>获取验证码</span>
                    </p>
                    <a  onClick={confimlogin.bind(this)}>登录</a>
                </div>
            </Fragment>
        )
    }
    //href="#/index/my"
}
const mapStateToProps = (state)=>({
    phone:state.myJudgeLogin.phone,
    pwd:state.myJudgeLogin.pwd
})
const mapDispatchToProps = (dispatch)=>({
    //
    
    handlerInput(e){
        var val = e.target.value;
        var reg = /(15|17|18)\d{9}/
        if(reg.test(val)){
            this.refs.info.innerHTML="√"
        }else{
           this.refs.info.innerHTML="格式不正确"
           console.log(this.refs.info)
        }
    },
    confimlogin(){
        let phone = sessionStorage.getItem("phone")
        let pwd = sessionStorage.getItem("pwd")
        console.log(this.props,phone,pwd)
        if(this.refs.phone.value===phone && this.refs.pwd.value===pwd){
           // alert(1)
           sessionStorage.setItem("flag",true)
            this.props.history.push("/index/my")
        }else if(!phone){
            alert("用户不存在")
        }else{
            alert("信息错误")
        }
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Register)