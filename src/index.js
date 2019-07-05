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

      if (body.data.length === 0) {
        $('.doctor-name').append('There are no doctors matching this search, please try again');
      }

      for (let i = 0; i < body.data.length; i++) {
        $('.doctor-name').append(`<strong>Name:</strong> ${body.data[i].profile.first_name} ${body.data[i].profile.last_name}<br>
        <strong>Address:</strong> ${body.data[i].practices[0].visit_address.street}<br>
        <strong>Number:</strong> ${body.data[i].practices[0].phones[0].number}<br>
        <strong>Website: </strong> ${body.data[i].practices[0].website} <br>
        <strong>Accepting New Patients:</strong> ${body.data[i].practices[0].accepts_new_patients}<br> <br>`);
      }
    }, function (error) {

      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
