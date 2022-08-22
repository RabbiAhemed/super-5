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

/* BUDGET PART */

// const NumberOfPlayers = playersList.length;
const perPlayerInput = document.getElementById("per-player").value;
const perPlayerCostFloat = parseFloat(perPlayerInput);

const managerCostInput = document.getElementById("manager-cost").value;
const managerCostFloat = parseFloat(managerCostInput);
console.log(managerCostFloat);

const coachCostInput = document.getElementById("coach-cost").value;
const coachCostFloat = parseFloat(coachCostInput);

// calculate button
document.getElementById("calculate-btn").addEventListener("click", function () {
  console.log(perPlayerCostFloat);
});

// calculate Total Expenses
// document.getElementById("total-btn").addEventListener("click", function () {
//   cons;
//   function calculateCost(cost1, cost2, cost3) {
//     finalCost = cost1 + cost2 + cost3;
//     return finalCost;
//     console.log(finalCost);
//   }
//   console.log(coachCostFloat);
//   calculateCost(managerCostFloat, coachCostFloat);
// });

// // calculate function
// function calculateCost(cost1, cost2, cost3) {
//   finalCost = cost1 + cost2 + cost3;
//   return finalCost;
//   console.log(finalCost);
// }
