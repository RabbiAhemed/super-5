const playersList = [];

function showPlayers() {
  const totalSelectedPlayers = playersList.length;

  const playersContainer = document.getElementById("players-container");
  playersContainer.textContent = "";

  for (let i = 0; i < playersList.length; i++) {
    const ol = document.createElement("ol");
    ol.innerHTML = `<ol>
        <li>${i + 1}. ${playersList[i].pName}</li>
      </ol>`;
    playersContainer.appendChild(ol);
  }
  return totalSelectedPlayers;
}

function addToList(element) {
  const pName = element.parentNode.parentNode.children[0].innerText;
  const playersDetails = { pName: pName };
  if (playersList.length > 4) {
    alert("You can't add more than 5 players to the list");
  } else {
    playersList.push(playersDetails);
    showPlayers();
  }

  console.log(playersList.length);
}

/* BUDGET PART */

// get input from user common function
function getInput(inputId) {
  const userInput = document.getElementById(inputId);
  const amountString = userInput.value;
  const amountValue = parseFloat(amountString);
  userInput.value = "";
  return amountValue;
}

/* calculate player expenses */
document.getElementById("calculate-btn").addEventListener("click", function () {
  // get input from user
  const perPlayerCost = getInput("per-player-input");

  const totalPlayerExpensesText = document.getElementById("player-expenses");
  const numberOfPlayers = showPlayers();
  const playersCost = parseFloat(numberOfPlayers * perPlayerCost);

  totalPlayerExpensesText.innerText = playersCost;
});

/* calculate total Expenses */
document.getElementById("total-btn").addEventListener("click", function () {
  const totalPlayerExpensesText =
    document.getElementById("player-expenses").innerText;
  const totalPlayerExpensesFloat = parseFloat(totalPlayerExpensesText);
  const managerCost = getInput("manager-cost-input");
  const coachCost = getInput("coach-cost-input");
  const totalExpenses = parseFloat(
    totalPlayerExpensesFloat + managerCost + coachCost
  );
  const totalCostText = document.getElementById("total-cost");
  totalCostText.innerText = totalExpenses;
  console.log(totalCostText);
});
