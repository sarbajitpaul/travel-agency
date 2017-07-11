$(document).ready(function() {
    $('select').material_select();
  });

$(function(){
  $('#filled-in-box').change(function(){
    $('.collapsible').slideToggle(500);
  });

  $('.datepicker').pickadate({
    //selectMonths: true, // Creates a dropdown to control month
    //selectYears: 15 // Creates a dropdown of 15 years to control year
  });
});
