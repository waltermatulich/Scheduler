$(document).ready(function () {
  $(".SaveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);

    $(".notification").removeClass("show");
  });

  // Added a timeout to remove the "show" class after 5 seconds
  setTimeout(function() {
    $(".notification").removeClass("show");
  }, 5000);
});

function hourUpdate() {
  var currentHour = moment().hours();

  $('.time-block').each(function(){
    var blockHour = parseInt($(this).attr("id").split("_")[1]);
    $(this).toggleClass("past", blockHour < currentHour);
    $(this).toggleClass("present", blockHour === currentHour);
    $(this).toggleClass("future", blockHour > currentHour);
  });
}

hourUpdate();

// Changed the interval to update every minute (60000 milliseconds)
var interval = setInterval(hourUpdate, 60000);

// Simplified setting values from localStorage
for (var i = 9; i <= 17; i++) {
  $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`));
}

$("#currentDay").text(moment().format("dddd, MMMM Do"));

