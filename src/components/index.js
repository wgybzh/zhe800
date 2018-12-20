import React, { Component} from 'react';
import {HashRouter as Router,Route,NavLink,} from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import Home from "../components/home/home";
import List from "../components/list/list";
import Car from '../components/car/car';
import My from "../components/my/my";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
     <Router>
        <div className="box">
          <header>
          </header>
              
            <section>
              <Route path="/index/home" component={Home}/>
              <Route path="/index/list" component={List}/>
              <Route path="/index/car" component={Car}/>
              <Route path="/index/my" component={My}/>
              
          </section>
          <div id="footer">
            <ul>
              <li>
                <NavLink to="/index/home">
                <i className="iconfont"> &#xe669;</i>
                <span>
                  今日特卖
                </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/index/list">
                <i className="iconfont">&#xe629;</i>
                <span>
                  品牌团
                </span>
                </NavLink>
              </li>
              <li>

               

                <NavLink to="/index/car">
                <i className="iconfont">&#xe602;</i>

                <span>
                  购物车
                </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/index/my">
                  <i className="iconfont">&#xe604;</i>
                  <span>
                    我的
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
     </Router>
     </Provider>
    );
  }
 
}

export default App;
