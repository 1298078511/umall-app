import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import { reqRegister } from "../../utils/http"
import { successAlert } from "../../utils/alert"
export default class register extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",
                nickname: "",
                password: ""
            }
        }
    }
    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }
    submit() {
        reqRegister(this.state.user).then(res => {
            if (res.data.code == 200) {
                successAlert(res.data.msg)
                this.props.history.push("/login")
            }
        })
    }
    render() {
        return (
            <div>
                <Header title="注册" back></Header>
                <ul className="cont">
                    <li>手机号:<input type="text" onChange={(e) => this.changeUser(e, "phone")} /> </li>
                    <li>昵  称:<input type="text" onChange={(e) => this.changeUser(e, "nickname")} /> </li>
                    <li>密  码:<input type="text" onChange={(e) => this.changeUser(e, "password")} /> </li>
                    <li className="btn" onClick={() => this.submit()}>注册</li>

                </ul>
            </div>
        )
    }
}

