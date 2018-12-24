import React,{Component,Fragment} from "react";
import "../../../common/css/myCss/myLogin.css"
import {connect} from "react-redux"
import {myPhoneAction,confirmAction} from "../../../action/my/myAction"
class Register extends Component{
    render(){
        let {phone,pwd,handlerPhone,confirmRegister,handlerInput} = this.props
      
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
                        <input type="text" 
                        placeholder="手机号" 
                        value={phone}
                        onBlur={handlerInput.bind(this)}
                        onChange={handlerPhone.bind(this,1)} />
                        <em ref="info"></em>
                    </p>
                    <p>
                        <i className="iconfont">&#xe62a;</i>
                        <input type="text" placeholder="动态验证码"
                        value={pwd} 
                        onChange={handlerPhone.bind(this,2)}
                        />
                        <span>获取验证码</span>
                    </p>
                    <a onClick={confirmRegister.bind(this)}>注册</a>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = (state)=>({
    phone:state.myJudgeLogin.phone,
    pwd:state.myJudgeLogin.pwd,
    flag:state.myJudgeLogin.flag
})
const mapDispatchToProps = (dispatch)=>({
    handlerPhone(index,e){
        var val = e.target.value
        dispatch(myPhoneAction(val,index))
    },
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
    confirmRegister(){
       
        dispatch(confirmAction())
        console.log(this.props.flag)
        this.props.history.push("/mylogin/myLoginLetter")
        
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Register)