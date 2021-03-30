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

  // console.log(filtered);
  // console.log(inputValue);
  // console.log(ufoData);
  // console.log(ufoData[0].datetime)
  
  var filteredDate = ufoData.filter(d => Date.parse(d.datetime) === Date.parse(inputValue));

  var tbody = d3.select("tbody");
  tbody.html("")
  filteredDate.forEach(d => {
    var row = tbody.append('tr')
    Object.entries(d).forEach(function ([key, value]) {
      var cell = row.append('td')
      cell.text(value)
    });
  })
};
