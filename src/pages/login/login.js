
import {Link} from "react-router-dom"
import Header from "../../components/Header/Header"
import {reqLogin} from "../../utils/http"
import React, { Component } from 'react'
import {successAlert} from "../../utils/alert"

export default class login extends Component {
    constructor(){
        super()
        this.state={
            user:{
                phone:"",
                password:""
            }
        }
    }
    changeUser(e,key){
        this.setState({
            user:{
                ...this.state.user,
                [key]:e.target.value
            }
        })
       }
       login(){
        reqLogin(this.state.user).then(res=>{
            if(res.data.code==200){
                successAlert(res.data.msg)
                sessionStorage.setItem("userInfo",JSON.stringify(res.data.list))
                this.props.history.push("/index")
            }
        })
       }
    render() {
        return (
            <div>
                <Header title="登录" register></Header>

                <ul className="cont">
                    <li>账号:<input type="text" onChange={(e)=>this.changeUser(e,"phone")} /> </li>
                    <li>密码:<input type="text"  onChange={(e)=>this.changeUser(e,"password")}/> </li>
                    <li className="btn" onClick={()=>this.login()}>登录</li>
                    <Link to="/index">首页</Link>
                    
                </ul> 
            </div>
        )
    }
}

