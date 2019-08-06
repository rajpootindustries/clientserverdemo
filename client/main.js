$(document).ready(startApp);

function startApp(){
getData();
getFoodData();
}

function getData(){
  var settings = {
    url: '../server/getnames.json',
    methond: 'GET',
    dataType: 'JSON',
    success: handleServerData
  }
  $.ajax(settings);
}

function handleServerData(response){
  console.log(response);
}


function getFoodData(){
  var settings = {
    url: '../server/getfood.json',
    method: 'GET',
    dataType: 'JSON',
    success: handleServerData
  }
  $.ajax(settings);
}
