export class BetterDoctor {
  getWeatherByCity(city) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${drName}&query=${condition}&location=or-portland&user_location=45.5155%2C%20-122.6793&skip=0&limit=10&user_key=${process.env.exports.apiKey}`
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };

      request.open('GET', url, true);
      request.send();
    });
  }
}
