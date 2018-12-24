import React,{Component,Fragment} from "react";
import {connect} from "react-redux"
 class CarFooter extends Component{
   render(){
       let {list,handlerChecked} = this.props
       return(
           <div className="carFooter">
              <p>
                  <label htmlFor="all" ref="all" id="allLabel" 
                  onChange={handlerChecked.bind(this)}>
                      <input type="checkbox" id="all"/>
                      <span>√</span>
                  </label>
              </p>
           </div>  
       )
   }
   
 }
 const mapStateToProps = (state)=>({
   
})
const mapDispatchToProps = (dispatch)=>({
    handlerChecked(e){
        var check = e.target.checked
            //console.log(check)
            if(check){
                this.refs.all.setAttribute("class","carActive")
                //console.log(this.refs.all)
            }else{
                this.refs.all.removeAttribute("class","carActive")
                //console.log(this.refs.all)
            }
       }
})
 export default connect(mapStateToProps,mapDispatchToProps)(CarFooter)
