import React, { Component } from 'react'
import querystring from 'querystring'
import Info from "./components/Info"
import "./detail.styl"
import Header from "../../components/Header/Header"
import Picker from "./components/Picker"
import { reqDetail } from '../../utils/http'
export default class detail extends Component {
    constructor(){
        super()
        this.state={
            detail:{},
            isshow:false
        }
        this.des=React.createRef()
    }
    componentDidMount(){
        let str=this.props.location.search;
        let result=querystring.parse(str.slice(1))  
        reqDetail(result.id).then(res=>{
            let list=res.data.list[0]
            list.specsattr=JSON.parse(list.specsattr)
            this.setState({
                detail:list
            },()=>{
                this.des.current.innerHTML=this.state.detail.description
            })
        })
    }
    show(){
        this.setState({
            isshow:true
        })
    }
    hide(){
        this.setState({
            isshow:false
        })
    }
    render() {
        let {detail,isshow} = this.state
        return (
            <div>
                  <Header title="商品详情" back></Header>
                  <img src={detail.img} className="goodsimg"/>
                  {
                      detail.goodsname ?<Info detail={detail} ></Info> : null
                  }
                     <div ref={this.des}></div>

                     <div className="footer">
                     <div className="btn" onClick={() => this.show()}>加入购物车</div>
                     </div>

                     {
                         detail.goodsname && isshow ?
                         <Picker detail={detail} hide={()=>this.hide()}></Picker>:null
                     }
            </div>
        )
    }
}


