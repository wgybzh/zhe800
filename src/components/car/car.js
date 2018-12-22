import React,{Component,Fragment} from "react";
import {get_car_action} from "../../action/cart/cartAction"
import {connect} from "react-redux"
 class Car extends Component{
   render(){
       let {list} = this.props
       return(
           <Fragment>
               <i className="fa fa-mail-reply" onClick={this.goback.bind(this)}></i>
                <ul>
                    {
                        list.map((item,index)=>{
                            return <li key={index}> {item.title} </li>
                        })
                    }
                </ul>
           </Fragment>
       )
   }
   goback(){
       this.props.history.goBack()
   }
   componentDidMount(){
       this.props.getData()
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