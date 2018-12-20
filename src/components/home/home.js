
import React,{Component,Fragment} from "react";
//import {Link} from "react-router-dom"
import {connect} from "react-redux";
import "./css/style.css"
import home_header_logo from "../../common/img/homeImg/home_header_img.png"
import HomeSer from "./children/homesSer"
import HomeNav from "./children/homeNav"
import HomeDealList from "./children/homeDealList"
import {
    dealList_action
} from "../../action/actionCreator"

 class Home extends Component{
   render(){
       let {homeDealList} = this.props;
       return(
           <Fragment>
             
                     <div id="img"> 
                      <img  src={home_header_logo}/>
                    </div>
                   <HomeSer/>
                   <HomeNav />
                   <HomeDealList  dealList={homeDealList}/>
           </Fragment>
       )
   }
   componentDidMount(){
    this.props.getHomeDealListData();
}
  
}

const mapStateToProps = (state)=>({
    homeDealList:state.home.homeDealList
})

const mapDispatchToProps = (dispatch)=>({
    getHomeDealListData(){
        dispatch( dealList_action());
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)