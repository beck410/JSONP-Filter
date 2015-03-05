#JSONP Filter

##Synopsis
Filters JSONP data to pull only information wanted from a database.

Replace properties in filterFormat with props you want from JSON response.

```jsonResponse.data.forEach(function(item){
    var filterFormat = { 
      "name": item[8], 
      "zip":  item[12], 
      "number": item[0],
      "state": item[11],
      //"location": 
      "address": item[9]
    }
```
##Langauges & Tools
- JSON
- [jQuery](https://jquery.com/)
