import React,{Component,Fragment} from "react";
import "../../common/css/myCss/my.css"
import MyList from "./myLogin/myList"
import MyIfLogin from "./myLogin/myIfLogin"
import MyLoginNot from "./myLogin/myLoginNot"
import {connect} from "react-redux"
 class My extends Component{
    render(){
       // let {flag} = this.props
        let  flag = localStorage.getItem("flag")
       // console.log(flag)
        return (
            <div className="myWarp">
                <div className="myTop">
                    <a href="#/index/home">
                        <i className="fa fa-mail-reply"></i>
                    </a>
                    <div className="myBtnWrap"> 
                        <span>个人中心</span> 
                        
                        {
                            flag? <MyIfLogin/>:<MyLoginNot/>
                        }
                       
                    </div>
                </div>
                 <MyList />
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    flag:state.myJudgeLogin.flag
})
const mapDispatchToProps = (dispatch)=>({

})
export default connect(mapStateToProps,mapDispatchToProps)(My)