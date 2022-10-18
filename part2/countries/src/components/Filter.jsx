const Filter = ({filter, handleFilter}) => {
  return (
    <>
     find countries <input value={filter} onChange={handleFilter}/>
    </>
   
  )
}

export default Filter