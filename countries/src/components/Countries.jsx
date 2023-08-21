import Weather from "./Weather"

const Country = ({ country, weather }) => {
  return (
    <>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h2>languages:</h2>
      {Object.entries(country.languages).map(([key, value]) => (<li key={key}>{value}</li>))}
      <img alt={country.flags.alt} src={country.flags.png}></img>
      <Weather weather={weather} />
    </>
  )
}

const CountryLine = ({ country, handleShow }) => {
  return (
    <p>
      <span key={country.name.common}>{country.name.common}</span>
      <button onClick={() => handleShow(country.name.common)}>Show</button>
    </p>
  )
}

const Countries = ({ countries, handleShow, weather }) => {
  if (countries.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else if (countries.length > 1) {
    return (
      <>
        {countries.map(country => <CountryLine key={country.name.common} country={country} handleShow={handleShow} />)}
      </>
    )
  } else if (countries.length === 1) {
    return (
      <Country country={countries[0]} weather={weather} />
    )
  } else {
    return (
      <p>No results found</p>
    )
  }
}

export default Countries
