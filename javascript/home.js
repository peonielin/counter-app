function changeToCross(x) {
  x.classList.toggle("change");
}

const retrievedObject = localStorage.getItem("goalList");
const Progress = localStorage.getItem("Progress");

const importArray = JSON.parse(retrievedObject);

const goalListContainer = document.querySelector(".goals-container");

if (goalListContainer.textContent === 0) {
  goalListContainer.textContent = "Add your first goal";
}

for (let i = 0; i < importArray.length; i++) {
  const item = importArray[i];
  const newDiv = document.createElement("div");
  const goalName = document.createElement("a");
  const currentProgress = item.currentProgress || item.newStartingNum;
  const percentage = Math.round((currentProgress / item.newTargetNum) * 100);
  goalName.href = "../html/add-goal.html";
  goalName.className = "goal-name";
  goalName.textContent = item.newGoalName + " ";
  newDiv.className = "singular-goal";
  newDiv.innerHTML =
    currentProgress +
    "/" +
    item.newTargetNum +
    item.newGoalUnits +
    " " +
    percentage +
    "%";

  goalName.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.setItem("selectedIndex", i);
    window.location.href = goalName.href;
  });

  newDiv.appendChild(goalName);
  goalListContainer.appendChild(newDiv);
}

const emptyGoalListButton = document.querySelector(".empty-goal-list");
emptyGoalListButton.addEventListener("click", () => {
  localStorage.clear();
  goalListContainer.textContent = "";
});
