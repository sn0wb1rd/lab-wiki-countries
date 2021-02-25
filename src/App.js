import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import countriesJSON from './countries.json'

class App extends Component {
  render () {
    return (
      <> 
        <Navbar />
        <div className="container">

        </div>
      </>

    )
  }
}

export default App;
