import React,{Component,Fragment} from "react";
//import {Link} from "react-router-dom"
import "../css/style.css"
import login from "../../../common/img/homeImg/search-logo-new.png"
import ser_img from "../../../common/img/homeImg/search-icon.png"
export default class HomeSer extends Component{
   render(){
       return(
           <Fragment>
             
                    <div className="ser_warp">
                        <div className="home_ser_800"> <img  src={login}/></div>
                        <a href="#/" >
                        <div className="home_ser_input">
                            <img src={ser_img}/>
                            搜索低价商品
                        </div>
                        </a>
                        <a className="home_ser_category" href="#/">
                        <i className="iconfont">&#xe61b;</i>
                        </a>
                    </div>
                     
                  
                   
                   
           </Fragment>
       )
   }
  
}