import React,{Component,Fragment} from "react";
import {get_car_action} from "../../../action/cart/cartAction"
import {connect} from "react-redux"

import Swiper from "swiper"
 class Car extends Component{
   render(){
       let {list} = this.props
       return(
           <div className="swiperWrap swiper-container">
                <ul className="swiper-wrapper">
                        {
                            list.map((item,index)=>{
                                return <li key={index} className="swiper-slide"> 
                                    <img src={item.image_url}/>
                                </li>
                            })
                        }
                </ul>
           </div>  
       )
   }

   componentDidMount(){
       this.props.getData()
       
          setTimeout(()=>{
            new Swiper(".swiperWrap",{
                slidesPerView : 3,
               slidesPerGroup : 3,
              /// slidesPerColumn: 2,//显示2行
            })
          },2000)
           
       
   }
} 
const mapStateToProps = (state)=>({
    list:state.cart.list
})
const mapDispatchToProps = (dispatch)=>({
    getData(){
        get_car_action(dispatch)
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Car)