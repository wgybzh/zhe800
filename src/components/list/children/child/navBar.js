import React,{Component,Fragment} from 'react' 
import {connect} from "react-redux"

import {getData_action} from "../../../../action/list/actionCreator"
import Swiper from 'swiper'
import '../../../../../node_modules/swiper/dist/css/swiper.css'


class BrandNavBar extends Component{
    render(){
        let {navList} =this.props
      //  console.log(navList.length)
        return(
            <Fragment>
                <div className="swiper-container1 nav_wrap"  ref="nav_wrap">
                    <div className="swiper-wrapper"  >            
                            {
                               navList.map((item,index)=>{
                                    return  <div  key={index} className="swiper-slide nav_item" >
                                                <img src={item.pic} alt=""/>
                                                <span>{item.name}</span>
                                            </div>
                                })
                            }
                       

                    </div>
                       
                    
                    <div className="swiper-pagination"></div>
                    
                </div>
            </Fragment>
        )
    }
    componentDidMount(){
        this.props.getData()
       
      
    }
    componentDidUpdate(){
        new Swiper (".swiper-container1",{
          
            slidesPerView:"auto",
            freeMode:true
        }) 
    }
}   
const mapStateToProps = (state)=>({
    navList : state.navbar.navList
})

const mapDispatchToProps = (dispatch)=>({
    getData(){
        dispatch(getData_action())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(BrandNavBar)