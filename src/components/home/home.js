
import React,{Component,Fragment} from "react";
import {Route,NavLink,Switch,} from "react-router-dom";
import {connect} from "react-redux";
import "./css/style.css"
import home_header_logo from "../../common/img/homeImg/home_header_img.png"
import HomeSer from "./children/homesSer"
import HomeNav from "./children/homeNav"
import HomeDealList from "./children/homeDealList"
import HomeBanner from "./children/homeBanner"
import {
    homeNav_action,
    tolist_action
} from "../../action/actionCreator"

 class Home extends Component{
   render(){
       let {navList,banList} = this.props;
       return(
           <Fragment>
                   
                     <div id="img"> 
                      <img  src={home_header_logo}/>
                    </div>
                   <HomeSer/>
                   <HomeNav navList={navList} toList = {this.props.toList} />
                  <HomeBanner banList = {banList} />

                   <Route path="/index/home/deal/:id" component={HomeDealList}/>
                   
                       
               
                       
                   
                    {/* <CreateList />
                   <HomeDealList  dealList={homeDealList}/> */}
           </Fragment>
       )
   }
   componentDidMount(){
   
    this.props.getHomeNavData();
}


  
}

const mapStateToProps = (state)=>({
    navList:state.home.homeNavList,
    banList:state.home.homeDealList
})

const mapDispatchToProps = (dispatch)=>({
    
    getHomeNavData(){
        dispatch(homeNav_action());
    },
    // toList(url){
    //     dispatch(tolist_action(url))
    // }
    
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)