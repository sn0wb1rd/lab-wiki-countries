import React, {Component} from 'react'
import { Link, Route } from 'react-router-dom'
import CountryDetails from './CountryDetails'

class CountriesList extends Component {

    render () {
        // deconstruct props
        const {countries} = this.props
        console.log('RENDER | CntryList-----------')
        // console.log('props: ', this.props)
        // console.log('countries: ', countries[0].name.common)
        // console.log('countries: ', countries[5])

        return (
            <div className="row">
                <div className="col-5">
                    <div className="list-group">
                        {
                            countries.map((singleCountry, index) => {
                                return (
                                    <div key={index}>
                                    <Link to={`/${singleCountry.cca3}`}>{singleCountry.flag} {singleCountry.name.common}</Link>
                                    </div>
                                )                        
                            })
                        }  
                    </div>                              
                    
                    {/* <Route path="/id"  component={CountryDetails} /> */}               

                </div>
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
        )
    }
}

export default CountriesList