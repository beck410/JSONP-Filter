var url = "https://data.nashville.gov/api/views/j7nq-7ct5/rows.json";


var output = $('#json');

$.get(url, filterJSON)

function filterJSON(jsonResponse){
  var filteredJSON = [];
  jsonResponse.data.forEach(function(item){
    var filterFormat = { 
      "name": item[8], 
      "zip":  item[12], 
      "number": item[0],
      "state": item[11],
      //"location": 
      "address": item[9]
    } 
    filteredJSON.push(filterFormat);
  })
  console.log(JSON.stringify(filteredJSON));
}


