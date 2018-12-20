import React,{Component} from "react";
import {Link} from "react-router-dom"
import "../css/style.css"
import "../../../../node_modules/swiper/dist/css/swiper.css"
export default class HomeNav extends Component{
   render(){
       return(
           <nav className="home_nav">

           <div className="home_nav_cont">
               <div className="item all on">
                   <a href="#/">
                       <span>推荐</span>
                   </a>
               </div>
             
               <div className="swiper-nav_wrap" >
              <div className="swiper-nav">
                <ul className="swiper-wrapper">
                    <li className="swiper-slide item">
                        <a href="#/">
                            <span>推荐</span>
                        </a>
                    </li>
                    <li className="swiper-slide item">
                    <a href="#/">
                        <span>推荐</span>
                    </a>
                    </li>
                    <li className="swiper-slide item">
                    <a href="#/">
                        <span>推荐</span>
                    </a>
                    </li>
                    <li className="swiper-slide item">
                    <a href="#/">
                        <span>推荐</span>
                    </a>
                    </li>
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
  
}