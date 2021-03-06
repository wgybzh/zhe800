
import React,{Component,Fragment} from "react";
import {Route,NavLink,Switch,} from "react-router-dom";
import {connect} from "react-redux";
import "./css/style.css"
import home_header_logo from "../../common/img/homeImg/home_header_img.png"
import HomeSer from "./children/homesSer"
import HomeNav from "./children/homeNav"
import HomeDealList from "./children/homeDealList"
import HomeBanner from "./children/homeBanner"
import BScroll from "better-scroll";
import {

    homeNav_action,
    moreHomeList_action,
    flag_action

} from "../../action/actionCreator"


 class Home extends Component{
     constructor(){
         super();
         this.state={
             showflag:false
         }
     }
   render(){

       let {navList,banList,flag} = this.props;
       let {showflag} = this.state

       return(
           <Fragment>
               {flag?<HomeNav navList={navList}  flag={flag}/>:""} 
                <div className="wrapper" ref="wrapper">
                <div className="content">
                     <div id="img"> 
                      <img  src={home_header_logo}/>
                    </div>
                   <HomeSer/>


                   <HomeNav navList={navList} toList = {this.props.toList} />

                  <HomeBanner banList = {banList} />

                   <Route path="/index/home/deal/:id" component={HomeDealList}/>
                   

                   </div>
                   </div>
                   <div className="gotop_con" style={{"display":showflag?"block":"none"}} onClick={this.gotop.bind(this)}></div>
                    

           </Fragment>
       )
   }
   componentDidMount(){
    this.props.getHomeNavData();
    this.scroll = new BScroll(this.refs.wrapper,{
        click:true,
        pullUpLoad:true,
        probeType:2,
        //useTransition:false,
       
        
    });
     this.scroll.on("pullingUp",()=>{
            this.props.getMoreDealList(this.props.dealId,this.props.page);
        })
        this.scroll.on("scroll",(offset)=>{
            if(offset.y <= -232){
               this.props.handleToggle(1)
            }else{
                this.props.handleToggle(2)
            }
            if(offset.y <= -1200){
                this.setState({
                    showflag:true
                })
            }else{
                this.setState({
                    showflag:false
                })
            }
           
        })
       
        
}
componentDidUpdate(){
    //重新计算高度
    this.scroll.refresh();
    //当数据加载完毕以后通知better-scroll可以进行下一次上拉加载
    this.scroll.finishPullUp();
   
}
componentWillMount(){
    window.addEventListener("scroll",this.gotop,true)
}
gotop(){
    console.log(111)
  
}
 }

const mapStateToProps = (state)=>({
    navList:state.home.homeNavList,
    banList:state.home.homeDealList,
    page:state.home.page,
    dealId:state.home.dealId,
    flag:state.home.flag
})

const mapDispatchToProps = (dispatch)=>({
    
    getHomeNavData(){
        dispatch(homeNav_action());

    },
   getMoreDealList(id,page){
       dispatch(moreHomeList_action(id,page))
   },
   handleToggle(val){
    dispatch(flag_action(val))
}
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)