import React from 'react'

import Detail from "./pages/detail/detail"
import Index from "./pages/index/index"
import List from "./pages/list/list"
import Login from "./pages/login/login"
import Register from "./pages/register/register"



import {Switch,Route,Redirect} from "react-router-dom"

export default function App() {
  return (
    <div className="con">
      <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/index" component={Index}></Route>
      <Route path="/detail" component={Detail}></Route>
      <Route path="/list/:name/:id" component={List}></Route>
      <Redirect to="/login"></Redirect>
      </Switch>
    </div>
  )
}
