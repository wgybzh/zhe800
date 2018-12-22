import React,{Component} from "react";
import {Link} from "react-router-dom"
import "../css/style.css"
import "../../../../node_modules/swiper/dist/css/swiper.css"
import swiper from "swiper"
export default class HomeNav extends Component{
   render(){
       let {navList} = this.props;
       
       return(
           <nav className="home_nav">
           <div className="home_nav_cont">
               <div className="item all on">
                   <a href="#/">
                       <span>推荐</span>
                   </a>
               </div>
             
               <div className="swiper-nav_wrap" id="swiper-nav_wrap">
              <div className="swiper-nav">
                <ul className="swiper-wrapper">
                {
                    navList.length>0?navList.map((item,index)=>{
                        return  <li className="swiper-slide item" key={index} onClick={this.toList}>
                                    <a href="jacascript:void;">
                                        <span>{item.name}</span>
                                    </a>
                                </li>
                    }):""
                }
                   
                   
                 </ul>
              </div>
              </div>

               <div className="drop_down">
                <div className="drop-down-bg">
                    <i className="iconfont">&#xe605;</i>
                </div>
               </div>
               
               </div>
           </nav>
       )
   }
   componentDidUpdate(){
       new swiper(".swiper-nav",{
           slidesPerView:"auto"
       })
   }
   componentDidMount(){
      
   }
   toList(){
    console.log()
}
}