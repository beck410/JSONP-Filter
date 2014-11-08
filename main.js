var url = //input data.gov url

//JSONP function
function get JSONP(url, cbName) {
  var $script = $('<script></script>');
  $script.atr('src', url + '?callback=' + cbName);
}

var output = $('#json');

getJSON(url, 'filterJson');

filterJson(data){
  var filteredJSON = {};
  data.meta.view.forEach(function(item){
    var filterFormat = {
      "city": 
      "zip": 
      "number":
      "state":
      "location":
      "address": 
    } 
    filteredJSON.push(filterFormat);
  })
  console.log(filteredJSON);
}

