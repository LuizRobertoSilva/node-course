const request = require('request');


var getWeather = (lat, lng, callback) => {
    var urlKey = 'https://api.darksky.net/forecast/49aa9689964acc1a14b35f56566a7bc7/' + lat + ',' + lng;

    request({
        url: urlKey,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to forecast.io server');
        } else if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                aperrantTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather');
        }

    });
};




module.exports.getWeather = getWeather;