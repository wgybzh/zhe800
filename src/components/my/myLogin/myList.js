import React,{Component,Fragment} from "react";
export default class MyList extends Component{
    render(){
        return (
            <div className="myList">
               <div className="myListOne"> <span>我的订单</span> 
                    <p> 查看全部 <i className="fa fa-chevron-right"></i></p> 
               </div>
               <ul className="myShopList">
                    <li>
                        <i className="iconfont">&#xe622;</i>
                        <span>待付款</span>
                    </li>
                    <li>
                        <i className="iconfont">&#xe781;</i>
                        <span>待发货</span>
                    </li>
                    <li>
                        <i className="iconfont">&#xe690;</i>
                        <span>待收货</span>
                    </li>
                    <li>
                        <i className="iconfont">&#xe820;</i>
                        <span>待评价</span>
                    </li>
                    <li>
                        <i className="iconfont">&#xe615;</i>
                        <span>售后</span>
                    </li>
               </ul>
               <div className="myListThree">
                    <div className="myListOne"> <span>购物车</span> 
                        <p>  <i className="fa fa-chevron-right"></i></p> 
                    </div>
                    <div className="myListOne"> <span>优惠券</span> 
                        <p>  <i className="fa fa-chevron-right"></i></p> 
                    </div>
               </div>
               <div className="myListThree">
                    <div className="myListOne"> <span>收藏夹</span> 
                        <p>  <i className="fa fa-chevron-right"></i></p> 
                    </div>
                    <div className="myListOne"> <span>足迹</span> 
                        <p>  <i className="fa fa-chevron-right"></i></p> 
                    </div>
               </div>
               <div className="myListThree">
                    <div className="myListOne"> <span>帮助与客服</span> 
                        <p>  <i className="fa fa-chevron-right"></i></p> 
                    </div>
                    <div className="myListOne"> <span>下载折800APP</span> 
                        <p>  <i className="fa fa-chevron-right"></i></p> 
                    </div>
               </div>
            </div>
        )
    }
}