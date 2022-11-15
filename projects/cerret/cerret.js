const userId = "76561198333869741"; //<-- cerrets id
fetch('https://new.scoresaber.com/api/player/'+userId+'/basic') //fetch from /basic
        .then(response => response.json()) //parse as json
        .then(data => {
            let playerGlobalRank = data.playerInfo.rank; //get global rank
            if (data.playerInfo.rank == "1") { //check if #1
                document.getElementById("rank").innerText = 'Yes! He is #' + playerGlobalRank + '!'; //format for ye
            } else { 
                document.getElementById("rank").innerText = 'No, now he is #' + playerGlobalRank + '... :('; //format for noo
            }
            document.getElementById("main").style.opacity = "1"; //fade in
        });

setTimeout(bottomFade, 2000) //goofiest method
function bottomFade() {
    document.getElementById("bottom").style.opacity = "1";
  }