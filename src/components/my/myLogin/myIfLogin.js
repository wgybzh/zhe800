import React,{Component,Fragment} from "react";
import {connect} from "react-redux"
 class MyLoginNot extends Component{
    render(){
        console.log(sessionStorage.getItem("pwd"))
        return (
            <div className="myLoginOk">
                <div>
                    <h2>用户：{sessionStorage.getItem("phone")}</h2>
                    <span>账号信息</span>
                </div>
                <i className="fa fa-chevron-right"></i>
            </div>
                            
        )
    }
}
const mapStateToProps = (state)=>({
    
})
const mapDispatchToProps = (dispatch)=>({

})
export default connect()(MyLoginNot)