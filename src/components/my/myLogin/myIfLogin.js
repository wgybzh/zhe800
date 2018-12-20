import React,{Component,Fragment} from "react";
import {connect} from "react-redux"
 class MyLoginNot extends Component{
    render(){
        return (
            <div className="myLoginOk">
                <p>
                    <h2>未知用户</h2>
                    <span>账号信息</span>
                </p>
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