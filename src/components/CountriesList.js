import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class CountriesList extends Component {

    render () {
        // deconstruct props
        const {countries} = this.props
        console.log('RENDER | CntryList-----------')
        // console.log('props: ', this.props)
        // console.log('countries: ', countries[0].name.common)
        // console.log('countries: ', countries[5])

        return (

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
                 </div>
        )
    }
}

export default CountriesList