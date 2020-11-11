import React from 'react'

const Countries = (props) => {
    //should have used this in 2.6-2.11 -- the method there is returning result with null in obj if doesnt meet criteria
    const countryArray = props.country.filter(country => country.name.toLowerCase().includes(props.newSearch.toLowerCase()))

    return (
        <div>
            {countryArray.length < 10 ? countryArray.map(country => <p key={country.name}>{country.name}</p>) : <p>Too many matches, specify another filter</p>}
        </div>
    )
}

export default Countries