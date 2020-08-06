

const apikey = "6000d3888cd1295a505f6786c114500a";
const url = "http://api.themoviedb.org/3/search/movie/?api_key=6000d3888cd1295a505f6786c114500a";
const imageurl = "http://image.tmdb.org/t/p/w185";

const searchbutton = document.querySelector('#search');
const inputelement = document.querySelector('#inputvalue');


var posterimg = document.createElement("img");
var titletext = document.getElementById("titletext");
var descriptiontext = document.getElementById("descriptiontext");

searchbutton.onclick = function (event) {
    event.preventDefault();
    const value = inputelement.value;
    const newurl = url + '&query=' + value;


    fetch(newurl)
        .then((res) => res.json())
        .then((data) => {
            //  data.results[]
            poster = data.results[0].poster_path;
            title = data.results[0].original_title;
            description = data.results[0].overview;
            console.log(data);

            posterimg.setAttribute("src", imageurl+poster);
            document.getElementById("placehere").appendChild(posterimg);
            document.getElementById("titletext").innerHTML = title;
            document.getElementById("descriptiontext").innerHTML = description

        })
        .catch((error) => {
            console.log(error);
        });
};






