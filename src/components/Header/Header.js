import React, { Component } from 'react'
import './Header.styl'
import {Link,withRouter } from 'react-router-dom'
 class Header extends Component {
     back(){
         this.props.history.go(-1)
     }
    render() {
        let {title,back,register} = this.props
        return (
            <div className="header">
              {
                  back?<span className="header-back" onClick={()=>this.back()}>返回</span>:null
              }  
              <div className="header-title">
              {title}
              </div>
              {
                  register?<Link to="/register" className="header-register">注册</Link>:null
              }
            </div>
        )
    }
}
export default withRouter(Header)