const cors = "https://cors-anywhere.herokuapp.com/";
const apikey = "?api_key= RGAPI-993c695b-7042-462b-b3b7-035495b863e1";
const yes= "lol/spectator/v4/active-games/by-summoner/";
const url = "https://eun1.api.riotgames.com/";
const getname = "/lol/summoner/v4/summoners/by-name/";
const imageurl = "https://ddragon.leagueoflegends.com/cdn/10.22.1/img/champion/";
const nice = "https://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion.json";


const request = async () => {
        const leaguename = document.getElementById('searchTxt').value;
        let newurl2 = cors + url + getname + leaguename + apikey;
        const response = await fetch(newurl2);
        const json = await response.json();
        const gameinfo = await fetch(cors + url + yes + json.id + apikey);
        const json2 = await gameinfo.json();
        const repsone2 = await fetch(nice);
        const json3 = await repsone2.json();
        console.log(json2);

        for(i=0;i<10;i++) {
                for (var key of Object.keys(json3.data)) {
                        if ("" + json2.participants[i].championId + "" === json3.data[key].key) {
                                var image = new Image();
                                image.src = imageurl +json3.data[key].image.full;
                                document.getElementById(""+ i +"").appendChild(image);
                                document.getElementById("" + 0 + i + "").innerText = (json2.participants[i].summonerName)
                        }
                }
        }





};

function CheckGameInfo() {
        request();
}



