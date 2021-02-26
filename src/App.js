import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import countriesJSON from './countries.json'


class App extends Component {

  state = {
    countries:countriesJSON
  }


  render () {
    console.log('RENDER | App -----------')
    // deconstruct the variables
    const {countries} = this.state
    // console.log(countries)
    
    return (
      <div> 
        <Navbar />
        <div className="container">
            <CountriesList countries={countries}/>
            {/* CountryDetails */}
        </div>
      </div>

    )
  }
}

export default App;
