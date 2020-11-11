import React from 'react'

const Countries = (props) => {
    //should have used this in 2.6-2.11 -- the method there is returning result with null in obj if doesnt meet criteria
    const countryArray = props.country.filter(country => country.name.toLowerCase().includes(props.newSearch.toLowerCase()))

    let display = ''
    if (countryArray.length < 10 && countryArray.length > 1) {
        display =
        countryArray.map(country => <p key={country.name}>{country.name}</p>)
    } else if (countryArray.length === 1) {
        display =
        countryArray.map(country =>
            <div key={country.name}>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2>languages</h2>
            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <img width="400" src={country.flag} alt="flag" />
            </div>
        )
    } else {
        display = 
        <p>Too many matches, specify another filter</p>
    }
    
    return (
        <div>
            {display}
        </div>
    )
}

export default Countries