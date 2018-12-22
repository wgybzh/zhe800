import React,{Component,Fragment} from "react";
import {get_car_action} from "../../action/cart/cartAction"
import {connect} from "react-redux"
import Loadable from "react-loadable"
import CarList from "./carList/nomin"
import "../../common/css/cart/cart.css"
import CarCom from "./carList/carCom" 
 class Car extends Component{
   render(){
       let {list} = this.props
       console.log(this.props)
       return(
           <div>
                <CarCom/>
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