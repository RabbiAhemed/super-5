const playersList = [];

function showList(playersArray) {
  console.log(playersArray);
  const orderedList = document.getElementById("Players-name");
  orderedList.innerHtml = "";

  for (let i = 0; i < playersArray.length; i++) {
    const name = playersArray[i];
    const ol = document.createElement("ol");
    ol.innerHTML = `<ol>
    <li>${name}</li>
  </ol>`;
    orderedList.appendChild(ol);
  }
}

function addToList(player) {
  const playerName = player.parentNode.parentNode.children[0].innerText;

  playersList.push(playerName);

  showList(playersList);
}

// const NumberOfPlayers = playersList.length;
