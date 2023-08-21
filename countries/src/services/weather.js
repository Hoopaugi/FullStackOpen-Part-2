import axios from 'axios'

import config from '../config'

const get = (city) => {
    return axios.get(`http://api.weatherapi.com/v1/current.json?key=${config.WEATHER_API_KEY}&q=${city}`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { get }
