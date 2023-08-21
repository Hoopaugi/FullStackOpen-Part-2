const Country = ({ country }) => {
  return (
    <>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h2>languages:</h2>
      {Object.entries(country.languages).map(([key, value]) => (<li key={key}>{value}</li>))}
      <img alt={country.flags.alt} src={country.flags.png}></img>
    </>
  )
}

const Countries = ({ countries }) => {
  if (countries.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else if (countries.length > 1) {
    return (
      <>
        {countries.map(country => <p key={country.name.common}>{country.name.common}</p>)}
      </>
    )
  } else if (countries.length === 1) {
    return (
      <Country country={countries[0]} />
    )
  } else {
    return (
      <p>No results found</p>
    )
  }
}

export default Countries
