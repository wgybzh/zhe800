import React,{Component,Fragment} from "react";
import "../../../common/css/myCss/myLogin.css"
import {connect} from "react-redux"
import {myPhoneAction,confirmAction} from "../../../action/my/myAction"
class Register extends Component{
    render(){
        let {phone,pwd,handlerPhone,confirmRegister} = this.props
      
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
                        onChange={handlerPhone.bind(this,1)} />
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
    confirmRegister(){
       
        dispatch(confirmAction())
        console.log(this.props.flag)
        //this.props.history.push("/mylogin/myLoginLetter")
        
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Register)