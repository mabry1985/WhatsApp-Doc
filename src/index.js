import { BetterDoctor } from './weather-service';
import $ from 'jquery';

$(document).ready(function () {
  $('.weatherLocation').click(function () {
    let city = $('#location').val();
    $('#location').val('');

    console.log('test');
    let doctorService = new BetterDoctor();  // create instance of WeatherService class
    let promise = doctorService.getWeatherByCity(city);  // call the instance method and pass in user input
    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
