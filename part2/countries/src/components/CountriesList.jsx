
import Country from "./Country"
import CountryInfo from "./CountryInfo"

const CountriesList = ({filteredCountries}) => {

  const maxCountries = filteredCountries.length > 10

  return (
    <div>
    {maxCountries
      ? <p>Too many matches, specify another filter</p>       
      : filteredCountries.length > 1 
      ? filteredCountries.map(country => <Country key={country.ccn3 + country.cca2} country={country}/>) 
      : filteredCountries.length > 0 
      ? <CountryInfo country={filteredCountries[0]} show={'true'} />
      : <p>There's no results</p> 
    }
    </div>
  )
}

export default CountriesList

