
var myArray = new Array();

function getMovieData()  {


   var input = document.querySelector(".user-input");
   var movieName = document.querySelector(".movie-name");
   var movieGenre = document.querySelector(".movie-genre");
   var movieCountry = document.querySelector(".movie-country");
 
   var movieImage = document.querySelector(".movie-image");
   var name = input.value;
   myArray.unshift(name);
   myArray = myArray.slice(0,5);
   // var lastfive = new Array[];
   // lastfive=lastfive.push(name);
   var search = document.querySelector(".movie-search");
 movieUrl = `http://www.omdbapi.com/?t=${name}&apikey=2955d8c1`;
 
 axios.get(movieUrl).then((response) => {
   if(response.data.Response === 'False'){
     throw new Error('Unable to find the movie');
   }
      movieName.innerHTML = "Name:"+response.data.Title;
      movieGenre.innerHTML = "Genre:"+response.data.Genre;
      search.innerHTML = "Previous Searches:  "+ myArray;
      movieCountry.innerHTML = "Country:"+response.data.Country;  
      movieImage.src =response.data.Poster;
      
   
             
   }).catch((e) => {
     omdbName.innerHTML = "(An error has occurred.)";
   
     movieImage.src = "";
   });
  }
  var button = document.querySelector(".button1");
  button.addEventListener("click", getMovieData);
