import React,{Component} from "react"

export default class HomeDealList extends Component{
    
    render(){
        let {dealList} = this.props;
        return(
            <div className="home_deal_box">
                    <div className="home_deal_list">
                    {
                        dealList.length>0?dealList.map((item,index)=>{
                            return  <a className="home_deal_item" key={index}>
                                        <div className="goods_img">
                                            <img></img>
                                            <span className="goods_topic_yype"></span>
                                        </div>
                                        <div className="goods_info">
                                            <div className="title"></div>
                                            <div></div>
                                        </div>
                                    </a>
                        }):"正在加载"
                    }
                       
                    </div>
            </div>
        )
    }
}