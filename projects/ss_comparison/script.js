function setPlayerId() {
    var playerId = prompt("Enter Player ID:") || "76561198283584459";
    var url = new URL(window.location.href);
    url.searchParams.set("playerId", playerId);
    window.history.replaceState({}, '', url);
    location.reload();
}

var urlParams = new URLSearchParams(window.location.search);
var playerId = urlParams.get('playerId');
if (!playerId) {
    playerId = "76561198283584459";
    var url = new URL(window.location.href);
    url.searchParams.set("playerId", playerId);
    window.history.replaceState({}, '', url);
}
var button = document.getElementById('top-button');
button.addEventListener('click', setPlayerId);



fetch('https://new.scoresaber.com/api/player/76561199033653351/full')
        .then(response => response.json())
        .then(data => {
            let player1Country = data.playerInfo.country;
            let player1GlobalRank = data.playerInfo.rank;
            let player1CountryRank = data.playerInfo.countryRank;
            let player1PP = data.playerInfo.pp;
            let player1Acc = data.scoreStats.averageRankedAccuracy;
            let player1PlaycountT = data.scoreStats.totalPlayCount;
            let player1PlaycountR = data.scoreStats.rankedPlayCount;
            document.getElementById("Player1Name").innerText = data.playerInfo.playerName;
            document.getElementById("Player1Rank").innerText = 'Rank: #' + player1GlobalRank + ' Global | #' + player1CountryRank + ' ' + player1Country;
            document.getElementById("Player1PP").innerText = 'Player PP: ' + player1PP + 'pp';
            document.getElementById("Player1Acc").innerText = 'Average Acc: ' + +player1Acc.toFixed(2) + '%';
            document.getElementById("Player1Playcount").innerText = 'Playcount: ' + player1PlaycountR +' Ranked | ' + player1PlaycountT + ' Total';
            document.getElementById("player1").style.opacity = "1";
});

fetch('https://new.scoresaber.com/api/player/'+playerId+'/full')
        .then(response => response.json())
        .then(data => {
            let player2Country = data.playerInfo.country;
            let player2GlobalRank = data.playerInfo.rank;
            let player2CountryRank = data.playerInfo.countryRank;
            let player2PP = data.playerInfo.pp;
            let player2Acc = data.scoreStats.averageRankedAccuracy;
            let player2PlaycountT = data.scoreStats.totalPlayCount;
            let player2PlaycountR = data.scoreStats.rankedPlayCount;
            document.getElementById("Player2Name").innerText = data.playerInfo.playerName;
            document.getElementById("Player2Rank").innerText = 'Rank: #' + player2GlobalRank + ' Global | #' + player2CountryRank + ' ' + player2Country;
            document.getElementById("Player2PP").innerText = 'Player PP: ' + player2PP + 'pp';
            document.getElementById("Player2Acc").innerText = 'Average Acc: ' + +player2Acc.toFixed(2) + '%';
            document.getElementById("Player2Playcount").innerText = 'Playcount: ' + player2PlaycountR +' Ranked | ' + player2PlaycountT + ' Total';
            document.getElementById("player2").style.opacity = "1";
});