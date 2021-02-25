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
        console.log('countries: ', countries[5].cca3)

        return (
            <>
                <h1>List of countries</h1>
                <div className="column">
                    {
                        countries.map((singleCountry, index) => {
                            return (
                                <div key={index}>
                                <Link to={`country${singleCountry.cca3}`}>{singleCountry.name.common}</Link>
                                </div>
                            )                        
                        })
                    }
                    <div className="container">
                        <Route path='countries/:id'  component={CountryDetails} countries={countries}/>

                    </div>
                </div>

                <div className="column">
                    The details
                </div>
            </>
        )
    }
}

export default CountriesList