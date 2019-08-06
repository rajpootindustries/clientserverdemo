$(document).ready(startApp);

function startApp(){
getNameData();
getFoodData();
}



function getNameData(){
  var settings = {
    url: 'http://localhost:3001/name',
    methond: 'GET',
    dataType: 'JSON',
    success: handleNameData
  }
  $.ajax(settings);
}

function handleNameData(response){
  console.log(response);
  for (var entry in response) {
    var nameDiv = $('<div>').text(response[entry].name);
    $('body').append(nameDiv);
  }
}

function handleFoodData(response) {
  console.log(response);
  for (var entry in response){
    var nameDiv = $('<div>').text(response[entry].food);
    var age = $('<div>').text(response[entry].age);
    $('body').append(nameDiv, age);
  }
}

function getFoodData(){
  var settings = {
    url: 'http://localhost:3001/favfoods',
    method: 'GET',
    dataType: 'JSON',
    success: handleFoodData
  }
  $.ajax(settings);
}
