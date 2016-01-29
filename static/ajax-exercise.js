"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', function (result) {
        $('#fortune-text').html(result);
    });
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "zipcode=" + $("#zipcode-field").val();

    $.get("/weather.json", url, function (results) {
        $("#weather-info").html(results.forecast);
    });


    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS


function showOrderMessage(results) {
    $("#order-status").html(results.msg);
}

function orderMelons(evt) {
    evt.preventDefault();

    var formInputs = {
        "melon_type": $("#melon-type-field").val(),
        "qty": $("#qty-field").val()
    };

    // TODO: show the result message after your form
     $.post("/order-melons.json", formInputs, showOrderMessage);

    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


