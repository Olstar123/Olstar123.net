const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
var userId = urlParams.get('userId');
console.log(userId);
if (userId === "") { //if its blank then use my id :)    (doesnt work)
    var userId = "76561199033653351";
}

fetch('https://new.scoresaber.com/api/player/'+userId+'/basic') //Fetch the data from the /basic endpoint
        .then(response => response.json()) //Parse the response as JSON
        .then(data => { //Do something with the data
            let playerId = data.playerInfo.playerId; //Gets the userID of the user
            let playerCountry = data.playerInfo.country; //Gets the country - Used for country-flags on the user-icon on the website.
            let playerGlobalRank = data.playerInfo.rank; //Gets the players Global-rank
            let playerCountryRank = data.playerInfo.countryRank; //Gets the players Country-rank
            let playerPP = data.playerInfo.pp; //Gets the players PP
            let avatar = data.playerInfo.avatar;  //Gets the players avatar
            if (data.playerInfo.avatar == "/images/oculus.png") { //Here we check if the user is an Oculus user, and if they are, slap the Oculus-picture on them.
                document.getElementById("PlayerImage").src = "https://new.scoresaber.com/api/static/avatars/oculus.png"; 
            } else { //Else we just use the link that the API gives us.
                document.getElementById("PlayerImage").src = "https://new.scoresaber.com" + avatar;
            }
			document.getElementById("PlayerFlag").src = "https://flagicons.lipis.dev/flags/4x3/" + playerCountry.toLowerCase() + ".svg"; //This is just used to show a country-flag in the lower right hand corner of the user-image
            document.getElementById("PlayerName").innerText = data.playerInfo.playerName; //Here we set the players name in the HTML element
            document.getElementById("PlayerRank").innerText = '#' + playerGlobalRank + ' Global | #' + playerCountryRank + ' ' + playerCountry; //Here we set the players ranks + country in the HTML element
            document.getElementById("PlayerPP").innerText = playerPP + 'PP'; //Here we set the players PP in the HTML element
            document.getElementById("PlayerContainer").style.opacity = "1"; //Here we set the opacity of the player-container to 1, so it fades in.
        }); //End of the /basic endpoint fetch


window.addEventListener("dblclick", event => {
  console.log("Double-click detected")
  document.getElementById("PlayerName").innerText = 'double clicked:)';
});