import React,{Component,Fragment} from "react";
import BrandName from "./children/brandname"
import BrandHotSell from './children/child/hotsell'
import  BrandNavBar from "./children/child/navBar"
import  BrandList from './children/child/brandList'

import "../../common/css/brand/list.css"
export default class List extends Component{
   render(){
       return(
           <Fragment>
               <BrandName/>
               <div id="main">
                    <BrandHotSell/>
                    <BrandNavBar/>
                    <BrandList/>
               </div>
           </Fragment>
       )
   }
  
}