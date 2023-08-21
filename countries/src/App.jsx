import { useState, useEffect } from 'react'

import Countries from './components/Countries'
import Filter from './components/Filter'
import countriesService from './services/countries'
import weatherService from './services/weather'
import config from './config'

const App = () => {
  const [countries, setCountries] = useState([]) 
  const [filter, setFilter] = useState('')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    countriesService
      .getAll()
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const countriesToShow = filter !== '' ? countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase())) : countries

  useEffect(() => {
    if(countriesToShow.length === 1) {
      weatherService.get(countriesToShow[0].capital)
      .then(response => {
        setWeather(response.data)
      })
    }
  }, [countriesToShow])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleShow = (name) => {
    setFilter(name)
  }

  if (config.WEATHER_API_KEY === undefined) {
    return (
      <p>Missing weather API key</p>
    )
  }

  return (
    <>
      <Filter filter={filter} onChange={handleFilterChange} />
      <Countries countries={countriesToShow} handleShow={handleShow} weather={weather} />
    </>
  )
}

export default App