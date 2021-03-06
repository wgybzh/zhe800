import React, { Component ,Fragment} from 'react';
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom";

import "./common/css/footer.css";
import "./common/css/reset.css";
import "./common/css/section.css";

import Index from "./components/index"
import MyLogin from "./components/my/myLogin/myLogin"
import MyRegister from "./components/my/myRegister/myRegister"


import Car from "./components/car/car"

import HomeBranch from "./components/branch/homeBranch"


import List from "./components/list/list"
import Search from "./components/search/search"
 import store from "./store"
 import {Provider} from 'react-redux'

 export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
          <Router>
                <main>
                    <Switch>
                            <Route path="/list" component={List} />

                            <Route path="/index" component={Index} />
                            <Route path="/car" component={Car}/>
                            <Route path="/homebranch" component={HomeBranch} />
                            <Route path="/mylogin" component={MyLogin} />
                            <Route path="/myregister" component={MyRegister} />
                            <Route path="/search" component = {Search} />
                            <Redirect path="/" to="/index/home/deal/tj" />

                    </Switch>  
                     
                </main>
                
          </Router>
        </Provider>

    )
  }
 
}

