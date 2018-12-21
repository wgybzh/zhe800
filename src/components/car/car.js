import React,{Component,Fragment} from "react";
import {get_car_action} from "../../action/cart/cartAction"
import {connect} from "react-redux"
import Loadable from "react-loadable"
import CarList from "./carList/nomin"
import "../../common/css/cart/cart.css"
//import CarSwiper from "./carList/carSwiper"
//import CarNavBar from "./carList/CarNavBar"
 class Car extends Component{
   render(){
       let {list} = this.props
       console.log(this.props)
       return(
           <div>
               <a href={"#/car/"+1}> 111 </a>
               <a href={"#/car/"+1}> 111 </a>
                <CarList/>
           </div>
       )
   }
   componentDidUpdate(){
       console.log(this.props)
   }
   componentDidMount(){
   }
} 
const mapStateToProps = (state)=>({
   
})
const mapDispatchToProps = (dispatch)=>({
   
})
export default connect(mapStateToProps,mapDispatchToProps)(Car)