import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import { UserData } from './userData.js';
import { ages } from './ages.js';

$(document).ready(function() {
  console.log("in")
  $("#user-input").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const date = $("input#dob").val();
    const expAge = parseInt($("input#expectancy").val());

    let mm = date.slice(5, 7);
    let dd = date.slice(8, 10);
    let yyyy = date.slice(0, 4);
    let dob = `${mm}/${dd}/${yyyy}`
    
    const user = new UserData(name, dob, expAge);
    console.log(ages)
    ages.addUserData(user);
    console.log(user)
    let result = ages.planetYear();

    $("#result").text(result);
  })
})