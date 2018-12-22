import React,{Component,Fragment} from 'react'
import TaoNav from "../tao/child/taoNav"
import TaoName from "../tao/child/taoname"
import TaoBanner from "../tao/child/banner"
import {connect} from "react-redux"
import "../../common/css/tao/tao.css"
import BScroll from 'better-scroll'
import {getData_action,getMoreData_action,toTop_action} from '../../action/tao/taoCreator'
 class Tao extends Component{
     
     
    render(){
        console.log(this.props)
        let {list,page,flag} = this.props
        return  (
            <Fragment>
               
                <div className="app1">
                    {flag?<TaoName/>:"" }
                    <div className="wrapper">
                        <ul className="content">
                            <TaoNav/>
                            {flag?"":<TaoName/>}
                            <TaoBanner listImg={list} page={page}/>
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
    componentDidMount(){
        this.props.getData()
        
        let wrapper = document.querySelector('.wrapper')
         this.scroll = new BScroll(wrapper,{
            click:true,
            pullUpLoad: true,
            probeType:2
        })
        this.scroll.on("pullingUp",()=>{
            this.props.getMoreList(this.props.page)
        })
        console.log(this.scroll)

        //吸顶
        this.scroll.on("scroll",(offset)=>{
                
            if(offset.y < -260 ){
               this.props.changeFlag(1)
            }else{
                this.props.changeFlag(2)
            }
            console.log(this.props.flag)
        })
    }
    componentDidUpdate(){
        //重新计算高度
        this.scroll.refresh();
        //可以二次获取上拉数据
        this.scroll.finishPullUp()
        
    }
    
}
const mapStateToProps = (state)=>({
   list : state.tao.getList,
   page:state.tao.page,
   flag:state.tao.flag
})

const mapDispatchToProps = (dispatch)=>({
    getData(){
        dispatch(getData_action())
    },
    getMoreList(val){
        console.log(val)
        dispatch(getMoreData_action(val))
    },
    changeFlag(val){
        dispatch(toTop_action(val))
    }
    
    
})
export default connect(mapStateToProps,mapDispatchToProps)(Tao)