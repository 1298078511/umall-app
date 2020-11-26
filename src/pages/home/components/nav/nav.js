import React, { Component } from 'react'
import "./nav.styl"
import { Link, NavLink, withRouter } from "react-router-dom"
class nav extends Component {
    push() {
        console.log(this.props);
        this.props.history.push("/index/shop")
    }
    render() {
        return (
            <div className="nav">

                <div className="nav-box">
                    <h3>NavLink</h3>
                    <NavLink to="/index/shop">购物车</NavLink>
                </div>
                <div className="btn" onClick={() => this.push()}>push shop</div>
            </div>
        )
    }
}
export default withRouter(nav)