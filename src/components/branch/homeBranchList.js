
import React,{Component,Fragment} from "react";
import {NavLink,Link} from "react-router-dom"
import {connect} from "react-redux";

import {
    getDataId_action
} from "../../action/homeBranch/actionCreator"

 class HomeBranchNavBar extends Component{
     constructor(){
         super();
         this.state = {
            arr:[]
         }
     }
   render(){
       console.log(this.props.idList.tag)
       let {homeDealList,idList} = this.props;
       let list = []
       if(this.props.idList.tag){
        for(var key in this.props.idList.tag){
            list.push(this.props.idList.tag[key])
           }
       }
       console.log(list)
       return(
           <Fragment>
              <div className="homeBranchList">
                  <ul className="homeBrandListWrap">
                     {
                         list.map((item,index)=>{
                             return <Link to={"/index/home/deal/"+item.url_name} key={index} >
                             
                             <li className="homeBrandList">
                            <p>
                            <img src={"https:"+item.pic}/>
                              <span>{item.category_name}</span>
                            </p>
                           
                             
                             
                              </li>
                              </Link>
                         })
                      }
                  </ul>
              </div>
           </Fragment>
       )
   }
   componentDidMount(){
    this.props.getHomeNavData()
   }
}

const mapStateToProps = (state)=>({
    idList:state.homeBranch.idList
})

const mapDispatchToProps = (dispatch)=>({
    getHomeNavData(id){
        dispatch(getDataId_action(id));
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(HomeBranchNavBar)