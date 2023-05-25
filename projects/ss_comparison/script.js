// def functions to set p1 and p2 user ids
function setP1Id() {
    var playerId = prompt("Enter Player 1 ID:") || "76561199033653351";
    var url = new URL(window.location.href);
    url.searchParams.set("p1Id", playerId);
    window.history.replaceState({}, '', url);
    location.reload();
}
function setP2Id() {
    var playerId = prompt("Enter Player 2 ID:") || "76561198283584459";
    var url = new URL(window.location.href);
    url.searchParams.set("p2Id", playerId);
    window.history.replaceState({}, '', url);
    location.reload();
}
function refresh() {
    location.reload();
}

// get url params
var urlParams = new URLSearchParams(window.location.search);
var p1Id = urlParams.get('p1Id');
var p2Id = urlParams.get('p2Id');
// if empty set to predef ids
if (!p1Id) {
    p1Id = "76561199033653351";
    var url = new URL(window.location.href);
    url.searchParams.set("p1Id", p1Id);
    window.history.replaceState({}, '', url);
}
if (!p2Id) {
    p2Id = "76561198283584459";
    var url = new URL(window.location.href);
    url.searchParams.set("p2Id", p2Id);
    window.history.replaceState({}, '', url);
}

// click names to change ids
var p1Button = document.getElementById('Player1Name');
p1Button.addEventListener('click', setP1Id);
var p2Button = document.getElementById('Player2Name');
p2Button.addEventListener('click', setP2Id);

// refresh button :)
var refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', refresh);


// fetch p1 info from ss api
fetch('https://new.scoresaber.com/api/player/'+p1Id+'/full')
        .then(response => response.json())
        .then(data => {
            let player1Name = data.playerInfo.playerName;
            let player1Country = data.playerInfo.country;
            let player1GlobalRank = data.playerInfo.rank;
            let player1CountryRank = data.playerInfo.countryRank;
            let player1PP = data.playerInfo.pp;
            let player1Acc = data.scoreStats.averageRankedAccuracy;
            let player1PlaycountT = data.scoreStats.totalPlayCount;
            let player1PlaycountR = data.scoreStats.rankedPlayCount;
            document.getElementById("Player1Name").innerText = player1Name;
            document.getElementById("Player1Rank").innerText = 'Rank: #' + player1GlobalRank + ' Global | #' + player1CountryRank + ' ' + player1Country;
            document.getElementById("Player1PP").innerText = 'Player PP: ' + player1PP + 'pp';
            document.getElementById("Player1Acc").innerText = 'Average Acc: ' + +player1Acc.toFixed(2) + '%';
            document.getElementById("Player1Playcount").innerText = 'Playcount: ' + player1PlaycountR +' Ranked | ' + player1PlaycountT + ' Total';
        });
// fetch p2 info from ss api
fetch('https://new.scoresaber.com/api/player/'+p2Id+'/full')
        .then(response => response.json())
        .then(data => {
            let player2Name = data.playerInfo.playerName;
            let player2Country = data.playerInfo.country;
            let player2GlobalRank = data.playerInfo.rank;
            let player2CountryRank = data.playerInfo.countryRank;
            let player2PP = data.playerInfo.pp;
            let player2Acc = data.scoreStats.averageRankedAccuracy;
            let player2PlaycountT = data.scoreStats.totalPlayCount;
            let player2PlaycountR = data.scoreStats.rankedPlayCount;
            document.getElementById("Player2Name").innerText = player2Name;
            document.getElementById("Player2Rank").innerText = 'Rank: #' + player2GlobalRank + ' Global | #' + player2CountryRank + ' ' + player2Country;
            document.getElementById("Player2PP").innerText = 'Player PP: ' + player2PP + 'pp';
            document.getElementById("Player2Acc").innerText = 'Average Acc: ' + +player2Acc.toFixed(2) + '%';
            document.getElementById("Player2Playcount").innerText = 'Playcount: ' + player2PlaycountR +' Ranked | ' + player2PlaycountT + ' Total';
        });

document.getElementById("content").style.opacity = "1";
document.getElementById("refresh-button").style.opacity = "1";