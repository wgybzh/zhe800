import React,{Component,Fragment} from "react";
import {connect} from "react-redux"
 class MyLoginNot extends Component{
    render(){
        return (
            <Fragment>
                <p className="myBtn">
                    <a href="#/mylogin/myLoginLetter">登录</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="#/myregister">注册</a>
                </p>
            </Fragment>
                            
        )
    }
}
const mapStateToProps = (state)=>({
    
})
const mapDispatchToProps = (dispatch)=>({

})
export default connect()(MyLoginNot)