











// from data.js
var ufoData = data;

//select the button and input
var button = d3.select("#filter-btn")
var input = d3.select("#datetime")

//event listeners
button.on("click", displayData);
input.on("change", displayData);

//complete the event handler function for the form
function displayData() {
  //select the input and get the raw HTML node
  var inputElement = d3.select("#datetime");
  //get the value of the user input element
  var inputValue = inputElement.property("value");

  var filterdDate = ufoData.filter(userDate => userDate.datetime === inputValue);

  var ufoInfo = filterdDate.map(userDate => userDate.)

  var tbody = d3.select("tbody");
  data.forEach(ufoData => {
    var row = tbody.append('tr')
    Object.entries(ufoData).forEach(function([key, value]) {
      var cell = row.append('td')
      cell.text(value)
    })
  })
}




// // // Get a reference to the table body
// var tbody = d3.select("tbody");

// // // Console.log the UFO data from data.js
// console.log(data);



// function displayData() {
//   data.forEach(ufoSightings => {
//     var row = tbody.append('tr')
//     Object.entries(ufoSightings).forEach(function([key, value]) {
//       var cell = row.append('td')
//       cell.text(value)
//     })
//   })
// }



// //input and output elements
// var date = d3.select("#datetime");
// var output = d3.select("#ufo-table");

// //event listener (to grab date from above)
// data.forEach(ufoSightings => {
//   var row = tbody.append('tr')
//   Object.entries(ufoSightings).forEach(function([key, value]) {
//     var cell = row.append('td')
//     cell.text(value)
//   })
// })

// //event handler

// //this will clear the table (not yet)
// output.table("")







// // // // UFO report info (Date, City, State, Country, Shape, Duration, Comments)
// data.forEach(function(ufoSightings) {
//   // console.log(ufoSightings);
//   var row = tbody.append("tr");
//   Object.entries(ufoSightings).forEach(function([key, value]) {
//     // console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });