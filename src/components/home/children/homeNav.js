import React,{Component} from "react";
import {NavLink} from "react-router-dom"
import "../css/style.css"
import swiper from "swiper"


export default class HomeNav extends Component{
    constructor(){
        super();
        this.state={
            flag:true
        }
    }
   render(){
       let {navList} = this.props;
       let {flag} = this.state;
       return(
           <nav className="home_nav">
            <div className="home_nav_cont">
            <div className="item" style={{"display":flag?"block":"none"}}>
            <NavLink to={"/index/home/deal/tj"} onClick={this.go.bind(this)} >
                   <p>
                       <span>推荐</span>
                   </p>
            </NavLink>
               </div> 
               <div className="selitem item" style={{"display":!flag?"block":"none"}}>
                   <p>
                       <span>选择分类</span>
                   </p>
               </div> 
             
                   <div className="swiper-container" ref="swiper_nav" style={{"display":flag?"block":"none"}}>
                        <div className="swiper-wrapper">
                        {
                            navList.length>0?navList.map((item,index)=>{
                                return  <div className="swiper-slide item" key={index} > 
                                <NavLink to={"/index/home/deal/"+item.url_name} onClick={this.go.bind(this)}>
                                             <p >
                                                    <span>{item.name}</span>
                                            </p>
                                </NavLink>
                                               
                                        </div>

                                
                            }):""
                        }
                       
                        </div>
                    </div>
                    <div className="list_box" style={{"display":!flag?"block":"none"}}>
                    
                   
                       <div id="list_box_top">
                           {
                            navList.length>0?navList.map((item,index)=>{
                                return  <div className="list_item" key={index} > 
                                <NavLink to={"/index/home/deal/"+item.url_name} onClick={this.go.bind(this)}>
                                             <p >
                                                    <span>{item.name}</span>
                                            </p>
                                </NavLink>
                                               
                                        </div>

                                
                            }):""
                        }
                       </div>
                   
                   
                         <div id="list_box_bot">
                            <a>更多分类</a>
                        </div>
                    </div>

               <div className="drop_down">
                <div className={flag?"drop-down-bg":"drop-down-bg on"} onClick={this.hangleNav.bind(this)}>
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

   hangleNav(){
    this.setState({
        flag:!this.state.flag
    })
   }
  
go(){
    window.location.reload();
    this.setState({
        flag:true
    })
}
}
 
