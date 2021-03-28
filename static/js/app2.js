
// // Get a reference to the table body
var tbody = d3.select("tbody");

// // Console.log the UFO data from data.js
console.log(data);

data.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });