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
           <div className="home_deal_box">
            <div className="home_deal_list">
            {
                lista.length>0?lista.map((item,index)=>{
                   
                    return  item.brand?<a className="home_deal_item" key={index} onClick={this.handlerChange.bind(this)}>
                       
                            <div className="goods_img">
                             <img src={item.image_url}></img>
                             <span style={{'display':item.brand.template_type?"block":"none"}} className="goods_topic_type">{item.brand.template_type}</span>
                         </div>
                         <div className="goods_info">
                             <div className="title">{item.title}</div>
                             <div className="coupon">{item.brand.promotion_info}</div>
                         </div>
                        
                               
                            </a>:
                            
                            <a className="home_deal_item" key={index}>
                        
                                <div className="goods_img">
                                <img src={item.image_url}></img>
                                {/* <div className="sold">{item.corner.image_labels[0].text}</div> */}
                            </div>
                            <div className="goods_info">
                                <h3>
                                    <em className="tao" style={{'display':item.deal.cpc_type===1?'inline-block':'none'}}>淘</em>
                                    <em className="mao" style={{'display':item.deal.cpc_type===2?'inline-block':'none'}}>猫</em>
                                    {item.title}
                                </h3>
                                <h4>
                                    <em className="price">
                                    <b>￥</b>
                                    <span className="price1">{item.deal.Intprice}</span>
                                    <span className="price2" style={{'display':item.deal.Floprice===0?'none':'inline-block'}}>.{item.deal.Floprice}</span>
                                    <del className="list_price" style={{'display':item.deal.coupon_price===0?'inline-block':'none'}}>￥{item.deal.Listprice}</del>
                                    </em>
                                    <div className="coupon_price" style={{'display':item.deal.coupon_price!==0?'inline-block':'none'}}>
                                        <span className="coupon_price_text">券后</span>
                                    </div>
                                    <span className="right_coupon" style={{'display':item.deal.coupon_price!==0?'inline-block':'none'}}>{item.deal.coupon_price/100}元券</span>
                                </h4>
                            </div>   
                        </a>
                }):"正在加载"
            }
               
            </div>
    </div>

          {/*  <ul className="content">  
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
                </ul> */}
           </div>
           </Fragment>  
       )
   }
   handlerChange(){
       //console.log(1)
       
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