// from data.js
var ufoData = data;

// // Get a reference to the table body
var tbody = d3.select("tbody");

// // Console.log the UFO data from data.js
console.log(data);

function displayData() {
  data.forEach(ufoSightings => {
    var row = tbody.append('tr')
    Object.entries(ufoSightings).forEach(function([key, value]) {
      var cell = row.append('td')
      cell.text(value)
    })
  })
};