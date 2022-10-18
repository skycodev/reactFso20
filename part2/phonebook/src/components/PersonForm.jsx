
const PersonForm = ({addPerson,newName,newNumber,handleNumberChange,handlePersonChange}) => {
  return (
    <form onSubmit={addPerson}>
    <div>
      name: <input value={newName} onChange={handlePersonChange}/>
      <br />
      number: <input value={newNumber} onChange={handleNumberChange}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

export default PersonForm