# Project Name

Movies App with React/Redux Sagas 

## Description
For this project, I updated a movies app using React and Redux-Sagas that allows a user to click on a movie poster see a view of details about that movie. The view includes the movie title, image, description, genres, and a button that takes users back the home page where the movie list lives. 

On page load, the movies are requested from the database and displayed on the home page. When a user clicks on a movie, I needed to render details about the movie that was clicked. To do that, I decided to store the info about the clicked movie in the Redux store instead of making an additional request to the database. I made a reducer called "storeClickedMovie" that would temporarily store the information from the movie clicked and allow me to call that from the Redux store using "useSelector" and render that to the details page.

To get the genres for each movie to display, I knew that I would need to make a request to the database since those are not passed in on page load. I updated the genre.router.js file so that the id of the movie that was clicked on could be passed through req.params to the database. I created SQL code that joined the genre, movies, and genre_movies table and used JSON_AGG to send an array of genres for each movie back to the server. Once I had that data, I was able to store that information in the Redux store in the genres reducer and call that using useSelector so that I could also render that information on the details page. 

Occassionally, the array of genres would come back undefined and an error would occur. So, I used conditional rendering so that the program would only display the genres if the array was not undefiend or empty. 

Finally, I styled the project using CSS and Materials UI. I used mui cards and a button on the details page.

### Technologies Used

JavaScript, React, Redux-Sagas, HTML, CSS, Material UI, SQL, Postgres
