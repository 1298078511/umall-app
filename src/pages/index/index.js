import React, { Component } from 'react'
import  "./Index.styl" 
import Home from "../home/home"
import Cate from "../cate/cate"
import Shop from "../shop/shop"
import Mine from "../mine/mine"
import 'antd-mobile/dist/antd-mobile.css'; 
import {Switch,Route,Redirect,NavLink} from "react-router-dom" 

export default class index extends Component {
    render() {
        return (
            <div className="index">
                <Switch>
                    <Route path="/index/home" component={Home}></Route>
                    <Route path="/index/cate" component={Cate}></Route> 
                     <Route path="/index/shop" component={Shop}></Route> 
                      <Route path="/index/mine" component={Mine}></Route>
                      <Redirect to="/index/home"></Redirect>
                </Switch>

                <footer className="index-footer">
                    <NavLink to="/index/home" activeClassName="select">
                        首页
                    </NavLink>
                    <NavLink to="/index/cate" activeClassName="select">
                        分类
                    </NavLink>
                    <NavLink to="/index/shop" activeClassName="select">
                        购物车
                    </NavLink>
                    <NavLink to="/index/mine" activeClassName="select">
                        我的
                    </NavLink>

                </footer>
            </div>
        )
    }
}
