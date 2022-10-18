import { useState } from "react"
import CountryInfo from "./CountryInfo"
const Country = ({country}) => {
  const[show, setShow] = useState(false)
  const handleShow = () => setShow(!show)
  
  return (
  <>
  
   <div>{country.name.common}{" "}<button onClick={handleShow}>{!show? 'show': 'hide'}</button></div>
   <CountryInfo show={show} country={country} />
  
  </>
  ) 
}

export default Country