const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Descripción de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInformacion = async(direccion) => {

    try {
        let coordenadas = await lugar.getLugarLatLng(argv.direccion);
        let temperature = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return `El clima en ${coordenadas.direccion} es de ${temperature}`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInformacion(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));