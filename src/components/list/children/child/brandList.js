import React,{Component,Fragment} from 'react' 
import {connect} from "react-redux"
import {Link} from 'react-router-dom'
import {getList_action} from "../../../../action/list/actionCreator"
class BrandList extends Component{
    render(){
       let {list} = this.props
        return(
            <Fragment>
                <ul id="list_wrap" ref="list">
                    {list.map((item,index)=>{
                        
                        return  <Link key={index} className="list_item"
                        data-id={item.id}
                                    to={'/index/shop/'+item.id}>
                                    <img src={item.image_url} />
                                   <span className="title">{item.title}</span>
                                   <span className="right">今日上新</span>
                                   <span className="day"><i className="hui">惠&nbsp;</i>{item.brand.promotion_info}</span>
                        </Link>
                    })}
                </ul>
            </Fragment>
        )
    }
    componentDidMount(){
        this.props.getList(0)
            this.refs.list.onscroll=function(){
            let H = this.scrollTop
               if(H>0){
                   document.getElementById("main").style.top=0
               document.getElementsByClassName('nav_wrap')[0].style.display="none"
                this.style.height=1200+"px"
               }else{
                document.getElementById("main").style.top=.87+"rem";
                document.getElementsByClassName('nav_wrap')[0].style.display="block"
                 this.style.height=840+"px"
               }
                
            }
        
    }
}
const mapStateToProps = (state)=>({
    list :state.navbar.list
})

const mapDispatchToProps = (dispatch)=>({
    getList(index){
        dispatch(getList_action(index))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(BrandList)