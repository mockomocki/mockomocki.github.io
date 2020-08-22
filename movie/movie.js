

const apikey = "6000d3888cd1295a505f6786c114500a";
const url = "https://api.themoviedb.org/3/search/movie/?api_key=6000d3888cd1295a505f6786c114500a";
const imageurl = "https://image.tmdb.org/t/p/w185";
const cors = "https://cors-anywhere.herokuapp.com/";
const noposter = "https://i.ibb.co/HYfY6vQ/noposter.jpg";

const searchbutton = document.querySelector('#search');
const inputelement = document.querySelector('#inputvalue');


var posterimg = document.getElementById("poster");
var titletext = document.getElementById("titletext");
var descriptiontext = document.getElementById("descriptiontext");
var ratingtext = document.getElementById("ratingtext");

searchbutton.onclick = function (event) {
    event.preventDefault();
    const value = inputelement.value;
    const newurl = cors + url + '&query=' + value;


    fetch(newurl)
        .then((res) => res.json())
        .then((data) => {
            //  data.results[]
            if(data.results[0] === undefined){
                alert("no movie found, check your spelling")
            }
            poster = data.results[0].poster_path;
            if (poster === null) {
                posterimg.setAttribute("src", noposter)
            }else{
                posterimg.setAttribute("src", imageurl+poster);
            }
            title = data.results[0].original_title;
            description = data.results[0].overview;
            rating = data.results[0].vote_average;
            if(data.results[0].vote_count === 0){
                document.getElementById("ratingtext").innerHTML = "there is no rating of this movie";
            }else{
                document.getElementById("ratingtext").innerHTML = "the ratings for this move is " + rating + " out of 10";
            }
            console.log(data);

            document.getElementById("poster").innerHTML = posterimg;
            document.getElementById("titletext").innerHTML = title;
            document.getElementById("descriptiontext").innerHTML = description;


        })
        .catch((error) => {
            console.log(error);
        });
};



