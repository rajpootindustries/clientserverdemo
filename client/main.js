$(document).ready(startApp);

function startApp(){
getData();
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
