import React, { Component} from 'react';
import "./search.css"

export default class Search extends Component{


    render(){
        return(
            <div>
               <div className="top_bar">
               <span className="back iconfont" onClick={this.goback.bind(this)}>&#xe611;</span>
               <div className="search_box">
               <span className="search_icon iconfont">&#xe61c;</span>
               <input type="text" placeholder="搜低价商品"/>
               <span className="clear_txt">X</span>
               </div>
               <span className="search_btn">搜索</span>
               </div>
            </div>
        )
    }

    goback(){
        this.props.history.goBack()
    }
}