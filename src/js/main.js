import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import { UserData } from './userData.js';
import { ages } from './ages.js';

$(document).ready(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const date = $("input#dob").val();
    const expAge = parseInt($("input#expectancy").val());

    let dob = ages.adjDate(date);
    
    const user = new UserData(name, dob, expAge);
    ages.addUserData(user);
    let result = ages.planetYear();

    $("#result").html(result);
  })
})