import React,{Component,Fragment} from "react";
import {get_car_action,
    get_load_action,
    flag_action} from "../../../action/cart/cartAction"
import {connect} from "react-redux"

import Bscroll from "better-scroll"
import CarSwiper from "./carSwiper"
import CarNavBar from "./CarNavBar"
 class CarNomin extends Component{
     constructor(){
         super();
         this.state={
             flag:false
         }
     }
   render(){
       let {list,lista,flag} = this.props
      // let {flag} = this.state
       //console.log(this.props)
       return(  
           <Fragment>
            {flag?<CarNavBar/>:""}
           <div className="wrapper" ref="wrapper">
           <ul className="content">  
                <CarSwiper/>
                {flag?"":<CarNavBar/>}
                <i className="fa fa-mail-reply" onClick={this.goback.bind(this)}></i>
                {
                    lista.map((item,index)=>{
                        return <li key={index}>
                        <a href={item.scheme_url}>{item.title}</a> 
                        <img src={item.image_url}/>
                            </li>
                    })
                }
                </ul>
           </div>
           </Fragment>  
       )
   }
   goback(){
       this.props.history.goBack()
   }
   componentDidMount(){
        this.props.getData()
        this.props.getListA(this.props.page)
        this.scroll = new Bscroll(this.refs.wrapper,{
            click:true,
            pullUpLoad:true,
            probeType:2
        }) 
        this.scroll.on("pullingUp",()=>{
            this.props.getListA(this.props.page)
        })
        this.scroll.on("scroll",(offset)=>{
            //console.log(offset)
            if(offset.y<=-481){
                this.props.handlerFlag(1)
            }else{
                this.props.handlerFlag(2)
            }
        })
   }
   componentDidUpdate(){
        //console.log(this.scroll)
        //this.scroll.pullingUp()
        this.scroll.refresh()
        this.scroll.finishPullUp()
   }
} 
const mapStateToProps = (state)=>({
    list:state.cart.list,
    lista:state.cart.lista,
    page:state.cart.page,
    flag:state.cart.flag
})
const mapDispatchToProps = (dispatch)=>({
    getData(){
        get_car_action(dispatch)
    },
    getListA(val){
        get_load_action(dispatch,val)
    },
    handlerFlag(val){
        dispatch(flag_action(val))
        //flag_action(dispatch(val))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(CarNomin)