import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Login from '../views/login/Login'
import NewsSandbox from '../views/sandbox/NewsSandBox'
export default function IndexRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login}/>
        {/* <Route path='/' component={NewsSandbox}/> */}
        <Route path='/' render={()=> 
        localStorage.getItem("token")?
        <NewsSandbox></NewsSandbox> : <Redirect to="/login"/>}/>
      </Switch>
    </HashRouter>
  )
}
