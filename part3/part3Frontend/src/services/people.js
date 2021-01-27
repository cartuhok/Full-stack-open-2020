import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

const remove = id => {
    const personURL = `${baseUrl}/${id.value}`
    const request = axios.delete(personURL)
    return request.then(response => response.data)
}

const swap = newNumber => {
    const request = axios.put(`${baseUrl}/${newNumber.id}`, newNumber)
    return request.then(response => response.data)
}

export default { getAll, create, remove, swap }
