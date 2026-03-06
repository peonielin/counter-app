const goalIDs = [
  "#goalName",
  "#targetNum",
  "#startingNum",
  "#goalUnits",
  "#goalIncrement",
];

const goalList = JSON.parse(localStorage.getItem("goalList")) || [];

const save = document.querySelector("#saveButton");

let storedGoalVariables = [];

let createInputs = goalIDs.map((id) => document.querySelector(id));

for (let i = 0; i < 5; i++) {
  createInputs[i].addEventListener("input", (e) => {
    const value = e.target.value;

    if (i === 0 || i === 3) {
      if (/^[A-Za-z]{0,20}$/.test(value)) {
        storedGoalVariables[i] = value;
      } else {
        alert("Enter letters only");
      }
    } else {
      if (/^[0-9]{0,4}$/.test(value)) {
        storedGoalVariables[i] = value;
      } else {
        alert("Enter numbers only");
      }
    }
  });
}

if (save) {
  save.addEventListener("click", () => {
    if (
      storedGoalVariables.length !== 5 ||
      storedGoalVariables.some((val) => !val)
    ) {
      alert("Please fill in all fields correctly");
      return;
    }

    const [
      newGoalName,
      newTargetNum,
      newStartingNum,
      newGoalUnits,
      newGoalIncrement,
    ] = storedGoalVariables;
    const singleGoal = {
      newGoalName,
      newTargetNum,
      newStartingNum,
      newGoalUnits,
      newGoalIncrement,
    };
    goalList.push(singleGoal);
    localStorage.setItem("goalList", JSON.stringify(goalList));
  });
}
