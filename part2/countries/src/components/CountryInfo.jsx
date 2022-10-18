import { useState, useEffect } from "react"
import axios from "axios"
const CountryInfo = ({country,show}) => {
  
  const [weather,SetWeather] = useState()
  let languages = []
  languages = Object.values(country.languages)

  const api_key = process.env.REACT_APP_API_KEY
  const lat = country.capitalInfo.latlng[0]
  const lon = country.capitalInfo.latlng[1]
  const icon = weather? weather?.data?.weather[0]?.icon : ''
  const iconUrl = weather? `http://openweathermap.org/img/wn/${icon}@2x.png` : ''
  const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`


  useEffect (() => {
    axios.get(url).then(res=>{SetWeather(res)}).catch(e => alert(e))
  },[])

  return (
    
    show && 
    <section>
        
      <div key={country.ccn3}>
        <h1 >{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <h2>Languages</h2>

        <ul>
          {languages.map((lan,index)=><li key={index}>{lan}</li>)}
        </ul>
        
        <img src={country.flags.svg}  height="140px" width="auto"alt="" />

        <h2>Weather in {country.capital}</h2>
        <p>temperature: {weather?.data?.main?.temp} Celsius</p>
        <img src={iconUrl} alt="" />
        <p>wind: {weather?.data?.wind?.speed} m/s</p>
        
      </div>

    </section>
  
  )
}

export default CountryInfo