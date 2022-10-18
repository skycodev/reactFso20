import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import CountriesList from "./components/CountriesList";
import axios from "axios";

const urlCountries ='https://restcountries.com/v3.1/all'

function App() {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(()=>{    
    axios
      .get(urlCountries)
      .then(res => {
        setCountries(res.data)
      })
  },[])

  const handleFilter = (event) => setNewFilter(event.target.value)
  const filteredCountries = countries.filter(country => 
    country.name.common.toLowerCase().includes(newFilter.toLowerCase().trim()))
 
 
  return (
    <>
    <Filter 
      filter={newFilter} 
      handleFilter={handleFilter}
    />
  
    <CountriesList
      filteredCountries={filteredCountries}
    />
    </>
  );
}

export default App;
