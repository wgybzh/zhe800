import React,{Component,Fragment} from 'react' 
import {HashRouter as Router , Link} from 'react-router-dom'
import {connect} from "react-redux"

import {getData_action,getList_action} from "../../../../action/list/actionCreator"
import Swiper from 'swiper'
import '../../../../../node_modules/swiper/dist/css/swiper.css'


class BrandNavBar extends Component{
    render(){
        let {navList,getList} =this.props
      //  console.log(navList.length)
        return(
            <Fragment>
                <div className="swiper-container1 nav_wrap"  ref="nav_wrap">
                    <div className="swiper-wrapper"  >            
                            {
                               navList.map((item,index)=>{
                                    return  <div key={index} className="swiper-slide nav_item" 
                                                 onClick={getList.bind(this,index)}>
                                                    <img src={item.pic} alt=""/>
                                                    <span data-index={index}>{item.name}</span>
                                            </div>
                                })
                            }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Fragment>
        )
    }
    componentDidMount(){
        this.props.getData()
    }
    componentDidUpdate(){
            //var vm = this;
            var mySwiper = new Swiper ('.swiper-container1', {
            freeMode:true,
            slidesPerView:'auto',
            //  on:{
            //     click(){ //单击 当前导航条的标准位置
            //         // console.log(this)
            //         // console.log(this.clickedIndex);
            //         // console.log(this.wrapperEl.clientWidth);
            //        // vm.curIndex = this.clickedIndex;
            //             this.setTransition(30);
            //             var el = this.slides[this.clickedIndex]; //当前单击 元素
            //             var elpos=el.offsetLeft + el.clientWidth/2; //点击元素 元素中心位置
            //             var swiperContainerWidth = this.wrapperEl.clientWidth; //容器的宽度
            //             var maxDis = this.maxTranslate(); //最大的滚动距离
            //             var maxPos = -maxDis + swiperContainerWidth/2;//最大的中心位置
            //             console.log(elpos,swiperContainerWidth,maxDis)
            //             if(elpos < swiperContainerWidth/2){
            //                 this.setTranslate(0)
            //             }else if(elpos>maxPos){
            //                 this.setTranslate(maxDis)
            //             }else{
            //                 this.setTranslate(swiperContainerWidth/2-elpos)
            //             }

            //           }
            //     }
            })
    }
}   
const mapStateToProps = (state)=>({
    navList : state.navbar.navList
})

const mapDispatchToProps = (dispatch)=>({
    getData(){
        dispatch(getData_action())
    },
    getList(index){
        dispatch(getList_action(index))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(BrandNavBar)