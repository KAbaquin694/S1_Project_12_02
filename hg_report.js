"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Khalel Abaquin
   Date:   2.27.19
   
   Filename: hg_report.js
	
*/

// This block of code stores a text string with multiple variables implemented within inside the variable 'gameReport'.
var gameReport = "<h1>" + itemTitle + "</h1><h2>By: " + itemManufacturer + "</h2><img src='hg_" + itemID + ".png' alt='id' id='gameImg'/> <table><tr><th>Product ID</th><td>" + itemID + "</td></tr><tr><th>List Price</th><td>" + itemPrice + "</td></tr><tr><th>Platform</th><td>" + itemPlatform + "</td></tr><tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr><tr><th>Condition</th><td>" + itemCondition + "</td></tr><tr><th>Release</th><td>" + itemRelease + "</td></tr></table>" + itemSummary + "";

// This line of code grabs the element with the id 'gameInfo' & inserts the value of 'gameReport' inside its innerHTML.
document.getElementById("gameInfo").innerHTML = gameReport;

// This section of code declares the variable of 'ratingsSum' to the number 0 & the variable 'ratingsCount' to the length of the 'ratings' array.
var ratingsSum = 0;
var ratingsCount = ratings.length;

// In this block of code, every time it loops through the array items, the value of 'ratingsSum' & 'ratings' are added together.
for (var i = 0; i < ratings.length; i++) {
    ratingsSum += ratings[i]
}

// This section of code sets the variable 'ratingsAvg' to the quotient of 'ratingsSum' & 'ratinsCount'. This section also sets the variable 'ratingReport' to a text string with other variables embedded within.
var ratingsAvg = ratingsSum / ratingsCount;
var ratingReport = "<h1>Customer Reviews</h1><h2> " + ratingsAvg + " out of 5 stars (" + ratingsCount + " reviews)</h2>";

// This block of code has two for loops, one being nested within the other to display the reviews (images of stars, title, authors, & dates) of the website.
for (var i = 0; i <= 2; i++) {
    ratingReport += "<div class='review'><h1>" + ratingTitles[i] + "</h1><table><tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr><tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr><tr><th>Rating</th><td>";

    for (var x = 1; x <= ratings[i]; x++) {
        ratingReport += "<img src='hg_star.png'/>";
    }
    ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}

// This line of code grabs the 'aside' element & replaces its HTML with the value(s) of 'ratingReport'.
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;