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
                // Why does max-height in the style not work?
                <div className="col-5 max-vh-50" style={{height: "90vh", overflow: "scroll"}}>
                    <div className="list-group">
                        {
                            countries.map((singleCountry, index) => {

                                return (
                                    <Link  key={index} className="list-group-item list-group-item-action border" 
                                            to={`/${singleCountry.cca3}`}>
                                            {singleCountry.flag} {singleCountry.name.common}
                                    </Link>
                                )                        
                            })
                        }  
                    </div>           
                 </div>
        )
    }
}

export default CountriesList