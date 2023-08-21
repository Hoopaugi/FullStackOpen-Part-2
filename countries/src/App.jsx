import { useState, useEffect } from 'react'

import Countries from './components/Countries'
import Filter from './components/Filter'
import countriesService from './services/countries'

const App = () => {
  const [countries, setCountries] = useState([]) 
  const [filter, setFilter] = useState('')

  useEffect(() => {
    countriesService
      .getAll()
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const countriesToShow = filter !== '' ? countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase())) : countries

  return (
    <>
      <Filter filter={filter} onChange={handleFilterChange} />
      <Countries countries={countriesToShow} />
    </>
  )
}

export default App