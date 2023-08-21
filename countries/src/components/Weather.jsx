const Weather = ({ weather }) => {
  if (weather) {
    return (
      <>
        <h2>weather in {weather.location.name}</h2>
        <p>temperature {weather.current.temp_c} Celcius</p>
        <p>wind {weather.current.wind_kph} {weather.current.wind_dir}</p>
      </>
    )
  } else {
    return (
      <p>Loading weather information...</p>
    )
  }

}

export default Weather
