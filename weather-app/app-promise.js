const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);

var geocodeURL = 'https://maps.google.com/maps/api/geocode/json?address=' + encodedAddress;

axios.get(geocodeURL).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address.');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;

    var weatherUrl = 'https://api.darksky.net/forecast/49aa9689964acc1a14b35f56566a7bc7/' + lat + ',' + lng;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
    console.log(response.data);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature
    console.log('temperatura', temperature );
}).catch((err) => {
    if (err.code === 'ENOTFOUND')
        console.log('Unable to connect to API server');
    else
        console.log(err.message)
});