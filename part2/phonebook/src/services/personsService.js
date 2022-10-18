import axios from 'axios'

const url ='http://localhost:3001/persons'

const getAllPersons = () => {
  return axios
  .get(url)
  .then(res => res.data)
}

const add = (newPerson) => {
  const req = axios.post(url,newPerson)
  return req.then(res => res.data)
}

const remove = id => {
  const req = axios.delete(`${url}/${id}`)

  return req.then(response => response.data)

}

const update = (id,modifiedPerson) => {
  const req = axios.put(`${url}/${id}`, modifiedPerson)

  return req.then(response => response.data)

}

export default { getAllPersons, add, remove, update }