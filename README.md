Meals Application README
This repository contains code for a meals application. The application allows users to search for meals, display them, mark favorites, and view detailed information about individual meals.

Table of Contents
Features
Setup
Usage
Files
Additional Information
Features
Search Meals: Users can search for meals by entering keywords in the search bar.
Display Meals: The application displays meals fetched from the API in a grid layout with images and names.
Favorite Meals: Users can mark meals as favorites by clicking on a heart icon. Favorite meals are stored locally and can be displayed separately.
View Meal Details: Users can click on a meal card to view detailed information about the meal, including its name, photo, and instructions.
Setup
To set up the project locally, follow these steps:

Clone the repository to your local machine.
Open the project directory in your code editor.
Usage
To run the application locally:

Open the index.html file in your web browser.
Use the search bar to search for meals by entering keywords.
Click on a meal card to view detailed information about the meal.
Mark meals as favorites by clicking on the heart icon.
Files
index.js: JavaScript file containing the main functionality of the application.
singleMeal.js: JavaScript file containing the singleMealWindow function for displaying meal details in a separate window.
meals.css: CSS file for styling the meals application.
mealItem.css: CSS file for styling the meal window component.
index.html: HTML file defining the structure of the meals application.
Additional Information
API Used: The application fetches meal data from the TheMealDB API.
Local Storage: Favorite meals are stored locally using the browser's local storage feature, allowing users to access their favorite meals across sessions.
Responsiveness: The application is designed to be responsive and works well on various screen sizes and devices.
