import React,{Component} from "react";
import "../css/style.css"
import swiper from "swiper"

export default class HomeBanner extends Component{
   
    render(){
        let {banList} = this.props;
       let banPic = banList.filter((item)=>{
          return item.brand && item.brand.wireless_banner_image
       }) 
        return(
            <div className="swiper-banner" ref="swiper_banner">
                <div className="swiper-wrapper">
                    {
                      banPic.map((item,index)=>{
                              if(index%2){
                                  return  <div className="swiper-slide" key={index}>
                                  <a href={item.brand.out_url}> <img src={item.brand.wireless_banner_image}/></a>
                                  </div>
                              }
                      })
                    }  
                </div>
             
            </div>
        )
    }
    componentDidMount(){
        setTimeout(()=>{
         new swiper(this.refs.swiper_banner,{
              loop:true,
              slidesPerView : "auto",
              longSwipesRatio : 0.3,
              autoplay:true, 
         })
        },1000)
      
    }
}