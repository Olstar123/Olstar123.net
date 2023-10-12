// get url params
var urlParams = new URLSearchParams(window.location.search);
var playerID = urlParams.get('playerID');

// fetch info from ss api
fetch('https://scoresaber.com/api/player/'+playerID+'/full')
        .then(response => response.json())
        .then(data => {
            let playerName = data.playerInfo.playerName;
            let playerCountry = data.playerInfo.country;
            let playerGlobalRank = data.playerInfo.rank;
            let playerCountryRank = data.playerInfo.countryRank;
            let playerPP = data.playerInfo.pp;
            let playerAcc = data.scoreStats.averageRankedAccuracy;
            let playerPlaycountT = data.scoreStats.totalPlayCount;
            let playerPlaycountR = data.scoreStats.rankedPlayCount;
            document.getElementById("PlayerName").innerText = playerName;
            document.getElementById("PlayerRank").innerText = 'Rank: #' + playerGlobalRank + ' Global | #' + playerCountryRank + ' ' + playerCountry;
            document.getElementById("PlayerPP").innerText = 'Player PP: ' + playerPP + 'pp';
            document.getElementById("PlayerAcc").innerText = 'Average Acc: ' + +playerAcc.toFixed(2) + '%';
            document.getElementById("PlayerPlaycount").innerText = 'Playcount: ' + playerPlaycountR +' Ranked | ' + playerPlaycountT + ' Total';
        });

document.getElementById("content").style.opacity = "1";
document.getElementById("refresh-button").style.opacity = "1";