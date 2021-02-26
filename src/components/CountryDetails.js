import React, {Component} from 'react'
import { Link, Route } from 'react-router-dom'


class CountryDetails extends Component {

    state = {
        countries: this.props.countries
    }

    render () {
        console.log('RENDER | CntryDetails-----------')
        //deconstruct
        const {countries} = this.state
    
        // console.log('RENDER | CntryDetails propz: ', this.props)

        // get the id related to the selected country in List
        let cca3 = this.props.match.params.cca3

        let country = countries.filter((elem) => {
            return elem.cca3 === cca3
        })[0]

        /*console.log('country: ', countries)
        console.log('country: ', country.name.common)
        console.log('capital: ', country.capital[0])
        console.log('area: ', country.area)
        console.log('borders: ', country.borders)*/
      
        return (
            <>
                <h1>{country.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Capital</td>
                            <td>{country.capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{country.area} <sup>2</sup></td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                            {
                                country.borders.map((singleBorder,index)  => {

                                    let borderCountry = countries.filter((elem) => {
                                        return elem.cca3 === singleBorder
                                    })[0]
               
                                    return (
                                        <ul key={index}> 

                                            <Link to={`/${borderCountry.cca3}`}>
                                            {borderCountry.name.common}
                                            </Link>  

                                        </ul>      
                                    )
                                })                    
                            }                     
                            </td>
                        </tr>
                    </tbody>
                </table>    
            </>
        )
    }
}

export default CountryDetails