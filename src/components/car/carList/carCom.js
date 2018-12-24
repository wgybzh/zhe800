import React,{Component,Fragment} from "react";

export default class CarCom extends Component{
   render(){
       let {list} = this.props
       return(
           <ul className="carCom">
              <li>
                  <p>
                      <label htmlFor="one" id="one" >
                          <input type="checkbox" id="one" />
                          <span>√</span>
                      </label>
                  </p>
                  <img src="https://z12.tuanimg.com/imagev2/trade/600x600.3094f4ec27dc39d82dcfef16d558f7a8.150x150.jpg" />
                  <div>
                    <p>
                    得力18501碱性电池12粒电视遥控5号电池鼠标遥控玩具干电池
                    </p>
                    <h4>
                        ￥222
                    </h4>
                  </div>
              
              </li>
              
           </ul>  
       )
   }
 }