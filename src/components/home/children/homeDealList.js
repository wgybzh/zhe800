import React,{Component} from "react"


import BScroll from "better-scroll";
import {connect }from "react-redux"
import {
    dealList_action
} from "../../../action/actionCreator"
 class HomeDealList extends Component{
   constructor(props){
       super(props)
       this.flag=false;
   }
    render(){
      
        let {dealList,} = this.props;
        return(
            <div className="wrapper" ref="wrapper">
                <div className="content">

            <div className="home_deal_box">
            <div className="home_deal_list">
            {
                dealList.length>0?dealList.map((item,index)=>{
                   
                    return  item.brand?<a className="home_deal_item" key={index} href={"https:"+item.brand.out_url}>
                       
                            <div className="goods_img">
                             <img src={item.image_url}></img>
                             <span style={{'display':item.brand.template_type?"block":"none"}} className="goods_topic_type">{item.brand.template_type}</span>
                         </div>
                         <div className="goods_info">
                             <div className="title">{item.title}</div>
                             <div className="coupon">{item.brand.promotion_info}</div>
                         </div>
                        
                               
                            </a>:
                            
                            <a className="home_deal_item" key={index} href={item.deal.out_url}>
                        
                                <div className="goods_img">
                                <img src={item.image_url}></img>
                                <div className={item.deal.sales_count>1000?"soldTwo":"soldOne"}>{item.corner.image_labels?item.corner.image_labels[0].text:""}</div>
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
    </div>
    </div>
    
        )
    }
    componentDidMount(){
        
        this.props.getDealList(this.props.match.params.id)

        // this.scroll = new BScroll(this.refs.wrapper,{
        //     click:true,
        //     pullUpLoad:true,
        //     probeType:2
        // });
        // console.log(this.scroll)
       
        
       
    }
    componentDidUpdate(){
        if(this.flag){
            this.props.getDealList(this.props.match.params.id)
            this.props.match.params.flag=false;
        }
        this.flag=this.props.match.params.flag
        
     }
   
    
}

 const mapStateToProps = (state)=>({
        dealList:state.home.homeDealList,
        page:state.home.page

  })

 const mapDispatchToProps = (dispatch)=>({
    getDealList(id){
        dispatch( dealList_action(id));
    }

    
   
 })
 export default connect(mapStateToProps,mapDispatchToProps)(HomeDealList)