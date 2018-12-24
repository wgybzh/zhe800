
import React,{Component,Fragment} from "react";
//import {Link} from "react-router-dom"
import {connect} from "react-redux";
import "./style/homBranch.css"

import {
    dealList_action,
    homeNav_action 
} from "../../action/actionCreator"
import HomeBranchNavBar from "./homeBranchNavBar"

 class HomeBranch extends Component{
   render(){
       let {homeDealList,navList} = this.props;
       return(
           <Fragment>
               <div className="search-wrap"> 
                    <div className="search-input-text"> <i className="fa fa-search"></i> 搜低价商品</div>
                </div>
                <div className="new_topbar">
                    <span>分类</span><span>在售品牌</span>
                </div>
                <HomeBranchNavBar/>
               
           </Fragment>
       )
   }
   componentDidMount(){
    this.props.getHomeDealListData();
    this.props.getHomeNavData();
}
  
}

const mapStateToProps = (state)=>({
    homeDealList:state.home.homeDealList,
    navList:state.home.homeNavList
})

const mapDispatchToProps = (dispatch)=>({
    getHomeDealListData(){
        dispatch( dealList_action());
    },
    getHomeNavData(){
        dispatch(homeNav_action());
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(HomeBranch)