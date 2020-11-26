import React, { Component } from 'react'
import Banner from "./components/banner/banner"
import Nav from "./components/nav/nav"
import Info from "./components/info/info"
import List from "./components/list/list"


import Header from "../../components/Header/Header"
import { reqHomeGoods,reqHomeBanner } from "../../utils/http"
export default class home extends Component {
    constructor(){
        super()
        this.state={
            goods:[],
            banner:[]
        }
    }
    componentDidMount(){
        reqHomeGoods().then(res=>{
            this.setState({
                goods:res.data.list[0].content

            })
        }),
        reqHomeBanner().then(res=>{
            this.setState({
                banner:res.data.list

            })
        })
    }
    push(){
        this.props.history.push("/index/shop")
    }
    render() {
        let {goods,banner} =this.state
        return (
            <div>
          
             <Header title="首页"></Header>
             <Info></Info> 
             
             <Banner banner={banner}></Banner>
            
              <Nav></Nav>
              <div className="btn" onClick={()=>this.push()}>商品详情</div>
              <List goods={goods}></List>
            </div>
        )
    }
}

