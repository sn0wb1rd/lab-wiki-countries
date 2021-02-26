import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import countriesJSON from './countries.json'


class App extends Component {

  state = {
    countries:countriesJSON
  }

  componentDidMount(){
    console.log('cDM | App -----------')

    this.setState({
      countries:countriesJSON
    })

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
          <div className="row">
              <CountriesList countries={countries}/>
                              <div className="col-7">
                          {/* <Route path='/:id' component={CountryDetails}/> */}
                          <Route path='/:cca3'  render={(routeProps) => {
                              return <CountryDetails 
                              // investigate the special props, not sure 
                              // why is was mentioned in the descr of it 1.4
                              match={routeProps.match} 
                              location={routeProps.location} 
                              history={routeProps.history}
                              countries={countries}
                              />            
                          }} />
                  </div>
          </div>
        </div>
      </div>

    )
  }
}

export default App;
