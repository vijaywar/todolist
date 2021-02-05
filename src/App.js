import React from 'react'
import Nav from './do/nav'
import Contentlk from './do/content'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Do from './do/do'
export default function App() {
  return (
    <Router>

      <Route path='/'>
        <Nav />
      </Route>
      <Switch>
        <Route exact path='/' component={Contentlk} />
        <Route exact path='/do' component={Do} />
        <Route >
          <h1>Not Found</h1>
        </Route>

      </Switch>
    </Router>


  )
}
