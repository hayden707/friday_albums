import React from 'react'
import './App.css'
import Home from './pages/home'
import Header from './components/header'
import { Route, Switch } from 'react-router-dom'
import SongList from './components/songList'
// import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/songs" component={SongList} />
        </Switch>
      </main>
    </div>
  )
}

export default App
