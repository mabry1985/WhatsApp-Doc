export class BetterDoctor {
  getWeatherByCity(city) {
    const key = process.env.exports.apiKey;
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=688ccf81582f9e912922ff138e75a0d3`;
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
