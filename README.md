# UFO JavaScript Analysis

Using JavsScript, HTML, CSS, and D3, I created a website to filter a user's unput and display the related information. 

## index.html
I used an index.html file for the front end facing portion of the website. I used a hero display to draw the user in as well as user input field and a striped table for legibility. 

![UFO1](https://user-images.githubusercontent.com/74504885/127592639-3efb76d0-cd92-4b11-b962-8449390f0b18.PNG)

![UFO2](https://user-images.githubusercontent.com/74504885/127592671-1df3584b-6c94-46a1-a865-60adf4ed6ea3.PNG)

## data.js
Data was provided to me in a data.js file. Each instance in the file has seven fields that I referenced and pulled into the index.html file. 

![datajs](https://user-images.githubusercontent.com/74504885/122327912-4c288c80-cef4-11eb-9ea3-c04f8648ee0c.PNG)

## app.js
The functionality of the site lives within the app.js file. Using D3, the end-user can enter a date and populate the related information. Both "click" and "change" work to populate the data. The user can click the filter button or the they can filter on a change event which includes pressing enter or tab. 

![changehandler](https://user-images.githubusercontent.com/74504885/122327694-eb00b900-cef3-11eb-9cec-19f066de8e2b.PNG)

I parsed the user input and set it "===" to the data in hte data.js file and then filter and append the matched data to the body in the index.html file. In order to start with a empty webpage, I used tbody.html("") to clear out the data.

![parsed](https://user-images.githubusercontent.com/74504885/122327827-2602ec80-cef4-11eb-8146-600b5099cedb.PNG)

