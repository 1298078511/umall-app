import React, { Component } from 'react'
import {reqCateGoods} from "../../utils/http"
import Header from "../../components/Header/Header"
import List from "../home/components/list/list"
import "./list.styl"
export default class lists extends Component {
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        reqCateGoods(this.props.match.params.id).then(res=>{
            this.setState({
                list:res.data.list
            })
        })
    }
    render() {
        return (
            <div className="listcon">
                <Header title={this.props.match.params.name} back></Header>
                <List goods={this.state.list}></List>
            </div>
        )
    }
}
