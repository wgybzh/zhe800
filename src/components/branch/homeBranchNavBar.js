
import React,{Component,Fragment} from "react";
import {NavLink} from "react-router-dom"
import {connect} from "react-redux";

import Swiper from "swiper"
import {
    getData_action,
    getDataId_action
} from "../../action/homeBranch/actionCreator"
import HomeBranchList from "./homeBranchList"
 class HomeBranchNavBar extends Component{
   render(){
       let {homeDealList,navList} = this.props;
       console.log(this.props)
       return(
           <Fragment>
            <div className="swiper-container3">
                <ul className="swiper-wrapper_navWrap ">
                {
                        navList.map((item,index)=>{
                            return <li className="swiper-slide swiper-slide3" key={index} onClick={this.getId.bind(this,item.url_name)}>
                            <span to="/homebranch" >{item.name}</span>
                            </li>
                        })
                    }
                   
                   
                </ul>
                <HomeBranchList/>
            </div>
           </Fragment>
       )
   }
   getId(id,e){
       var idOk = id.substr(8)
       console.log(id)
        this.props.getHomeNavData(idOk);
        e.target.className = "activeList"
    }
    componentDidMount(){
        this.props.getData_action();
    }
   
  
}

const mapStateToProps = (state)=>({
   
    navList:state.homeBranch.navList,
    idList:state.homeBranch.idList
})

const mapDispatchToProps = (dispatch)=>({
   
    getData_action(){
        dispatch(getData_action());
    },
    getHomeNavData(id){
        //console.log(id)
        dispatch(getDataId_action(id));
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(HomeBranchNavBar)