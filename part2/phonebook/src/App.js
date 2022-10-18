import { useState , useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/personsService'
import Notification from './components/Notification'

// const initialPersons = [ 
//   { name: 'Arto Hellas', number: '040-123456', id: 1 },
//   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
//   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
//   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
// ]

const {getAllPersons,add,remove,update} = personsService

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(()=>{
    getAllPersons().then(response => setPersons(response))
  },[])

 
  const handlePersonChange = event => setNewName(event.target.value)  
  const handleNumberChange = event => setNewNumber(event.target.value)  
  const handleFilter = event => setNewFilter(event.target.value)
  
  const personAlreadyAdded = persons?.filter(    
    person => 
    person.name.toLowerCase() === newName.toLowerCase()
  )

  const addPerson = (event) => {
    event.preventDefault()   

    const newPerson = {
      name:newName,
      number:newNumber,
      id: persons.length + 1
    }
  
    if (personAlreadyAdded.length > 0) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        updatePerson(personAlreadyAdded[0].id)
      }
    }else{
      add(newPerson).then(response => {
        setPersons([...persons,response])
        setSuccessMessage(`${response.name} was added to the phonebook`)
        setTimeout(()=>{
          setSuccessMessage(null)
        },2500)
      })
    }     
    
    setNewName('')
    setNewNumber('')

  }

  const updatePerson = id =>{
    const person = persons.find(person => person.id === id)
    const modifiedPerson = {...person,number:newNumber}
    
    update(id,modifiedPerson).then(res => 
        setPersons(persons.map(p => p.id !== id ? p : res))
    ).catch(error => {
      alert(`the person ${person.name} was already deleted from server. ${error}`)
      setPersons(persons.filter(p => p.id !== id))
    })    
  }

  const removePerson = id => {
    const person = persons.find(p => p.id === id)

    if(window.confirm(`delete the user with id ${person.name}?`))
      remove(id).then(() => getAllPersons().then(response => setPersons(response))).catch(e => {
        setErrorMessage(`Information of ${person.name} has already been removed from server`)
        setTimeout(()=>{
          setErrorMessage(null)
        },2500)
      })      
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase().trim()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification successMessage={successMessage} errorMessage={errorMessage} />
      <Filter
       filter={newFilter} 
       handleFilter={handleFilter}
      />
      <h3>Add a new</h3>
      <PersonForm 
      addPerson={addPerson}
      newName={newName}
      newNumber={newNumber}
      handleNumberChange={handleNumberChange}
      handlePersonChange={handlePersonChange}
      />
      <h2>Numbers</h2>
      <Persons 
      filteredPersons ={filteredPersons}
      removePerson ={removePerson}
      />
   
     
    </div>
  )
}

export default App