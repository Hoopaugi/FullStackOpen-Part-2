import axios from 'axios'

const getAll = () => {
  return axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
}

const get = (name) => {
    return axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { get, getAll }
