const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url: 'https://maps.google.com/maps/api/geoce/json?address=' + encodeURIComponent(address),
            json: true
        }, (error, response, body) => {
            if (error) {
                reject("Unable to connect to Google servers.");
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find that address');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                })
                console.log('Address:', body.results[0].formatted_address);
                console.log('Latitude:', body.results[0].geometry.location.lat, 'Longitude:', body.results[0].geometry.location.lng);
            } else {
                reject('whatt');
            }
        });
    });



};
geocodeAddress('19154').then((location) => {
    console.log(JSON.stringify(location, undefined, 2))
}).catch((error) => {
    console.log(error);
});