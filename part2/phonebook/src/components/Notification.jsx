

const Notification = ({ successMessage, errorMessage }) => {
  if (successMessage === null && errorMessage === null) {
    return null
  }

  return (

    successMessage 
    ? 
    <div className="success">
      {successMessage}
    </div>     
    : 
    <div className="error">
      {errorMessage}
    </div> 
  )

}

export default Notification