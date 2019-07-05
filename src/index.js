import { BetterDoctor } from './doctor.js';
import $ from 'jquery';

$(document).ready(function () {
  $('.doc-form').submit(function (event) {
    event.preventDefault();
    let nameInput = $('#name').val();
    let conditionInput = $('#condition').val();
    $('#name').val('');
    $('#condition').val('');

    let doctorService = new BetterDoctor();
    let promise = doctorService.doctorSearch(nameInput, conditionInput);

    promise.then(function (response) {
      let body = JSON.parse(response);

      for (let i = 0; i < body.data.length; i++) {
        $('.doctor-name').append(`${body.data[i].profile.first_name} ${body.data[i].profile.last_name}`);
      }
    }, function (error) {

      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
