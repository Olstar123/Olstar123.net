const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
var userId = urlParams.get('userId');
console.log(userId);

if (!userId) {
    userId = "76561199033653351";
    var url = new URL(window.location.href);
    url.searchParams.set("userId", userId);
    window.history.replaceState({}, '', url);
}

fetch('https://scoresaber.com/api/player/'+userId+'/full')
        .then(response => response.json())
        .then(data => {
            let playerId = data.playerInfo.playerName;
            let playerGlobalRank = data.playerInfo.rank;
            let playerCountryRank = data.playerInfo.countryRank;
            let playerCountry = data.playerInfo.country;
            let playerPP = data.playerInfo.pp;
            let playerAvatar = data.playerInfo.avatar;
            document.getElementById("PlayerName").innerText = playerId
            document.getElementById("PlayerRank").innerText = '#' + playerGlobalRank + ' Global | #' + playerCountryRank + ' ' + playerCountry;
            document.getElementById("PlayerPP").innerText = playerPP + 'pp'
            document.getElementById("PlayerFlag").src = "https://flagicons.lipis.dev/flags/4x3/" + playerCountry.toLowerCase() + ".svg";
            document.getElementById("PlayerImage").src = "https://scoresaber.com" + playerAvatar;
        });

//fetch('https://scoresaber.com/api/player/76561199033653351/scores?limit=5&sort=top')
//        .then(response => response.json())
//        .then(data => {
//            let songName = data.playerScores[0].leaderboard.songName;
//            document.getElementById("SongName").innerText = songName
//        })