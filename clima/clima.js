const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=34976cd487064bd634c1f95dd97a1b81`)

    if (resp === 'ZERO_RESULTS') {
        throw new Error('No hay resultados para su consulta');
    }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}