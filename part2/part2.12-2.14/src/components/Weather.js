import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({capital}) => {

    const [ weather, setWeather] = useState([])
    const [ toggle, setToggle ] = useState(false)

    const call = () => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(response => {
          setWeather(response.data)
          setToggle(true)
        }   
        ).catch(err =>{
            console.log(err)
        })
        
      }
    
      useEffect(call,[capital])

    return (
        <div>
            <p>temperature: {toggle && weather.main.temp}</p>
            <p>wind: {toggle && weather.wind.speed} meter/sec</p>
        </div>
    )
}

export default Weather