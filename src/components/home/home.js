
import React,{Component,Fragment} from "react";
//import {Link} from "react-router-dom"
import {connect} from "react-redux";
import "./css/style.css"
import home_header_logo from "../../common/img/homeImg/home_header_img.png"
import HomeSer from "./children/homesSer"
import HomeNav from "./children/homeNav"
import HomeDealList from "./children/homeDealList"
import {
    dealList_action,
    homeNav_action 
} from "../../action/actionCreator"

 class Home extends Component{
   render(){
       let {homeDealList,navList} = this.props;
       return(
           <Fragment>
             
                     <div id="img"> 
                      <img  src={home_header_logo}/>
                    </div>
                   <HomeSer/>
                   <HomeNav navList={navList} />
                   <HomeDealList  dealList={homeDealList}/>
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
export default connect(mapStateToProps,mapDispatchToProps)(Home)