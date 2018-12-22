import React,{Component} from "react";
import {NavLink} from "react-router-dom"
import "../css/style.css"

import swiper from "swiper"
export default class HomeNav extends Component{
   render(){
       let {navList,toList} = this.props;
       
       return(
           <nav className="home_nav">
            <div className="home_nav_cont">
            <div className="item all on">
            <NavLink to="/index/home/deal/tj" onClick={this.goback}>
                   <p>
                       <span>推荐</span>
                   </p>
            </NavLink>
               </div> 
            {/* onClick={toList.bind(this,item.id)} */}
             
                   <div className="swiper-container" ref="swiper_nav">
                        <div className="swiper-wrapper">
                        {
                            navList.length>0?navList.map((item,index)=>{
                                return  <div className="swiper-slide item" key={index} onClick={this.goback}> 
                                <NavLink to={"/index/home/deal/"+item.url_name}>
                                             <p >
                                                    <span>{item.name}</span>
                                            </p>
                                </NavLink>
                                               
                                        </div>

                                
                            }):""
                        }
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
   componentDidMount(){
       setTimeout(()=>{
        new swiper(this.refs.swiper_nav,{
             slidesPerView : "auto",
             slidesPerGroup : 4,
            longSwipesRatio : 0.3,
             preventLinksPropagation : false,
            slideToClickedSlide: true,
        })
       },1000)
     
   }
   goback(){
    //   window.location.reload()
   
   }
  
//    componentDidMount(){
      
//    }
//    toList(id){
//     console.log(id)
// }

}