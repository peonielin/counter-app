const retrievedObject = localStorage.getItem("goalList");
const selectedIndex = localStorage.getItem("selectedIndex");
const importArray = JSON.parse(retrievedObject);

let item = importArray[selectedIndex];
let counter = item.newGoalIncrement;
let backgroundNum = item.currentProgress || item.newStartingNum;
backgroundNum = backgroundNum.toString().padStart(4, "0");
let progress = (item.newStartingNum / item.newTargetNum) * 100;

const findTitle = document.querySelector(".GoalTitleContainer");
const findStart = document.querySelector(".start-num");
const findFinish = document.querySelector(".finish-num");
const findUnit = document.querySelector(".GoalTitleContainer");
const addCounter = document.querySelector(".add");
const progressNum = document.querySelector(".progress-bar");
const counter_box1 = document.querySelector(".counter_box1");
const counter_box2 = document.querySelector(".counter_box2");
const counter_box3 = document.querySelector(".counter_box3");
const counter_box4 = document.querySelector(".counter_box4");
const rightArrow = document.querySelector(".rightArrow");
const leftArrow = document.querySelector(".leftArrow");

const dynamicTitle = document.createElement("h1");
const dynamicStartNum = document.createElement("p");
const dynamicFinishNum = document.createElement("p");
const dynamicCounterOne = document.createElement("p");
const dynamicCounterTwo = document.createElement("p");
const dynamicCounterThree = document.createElement("p");
const dynamicCounterFour = document.createElement("p");
const dynamicIncrement = document.createElement("p");
const dynamicProgress = document.createElement("p");

progressNum.textContent = progress + "%";
progressNum.style.width = `${[progress]}%`;

counter_box1.textContent = backgroundNum.slice(0, 1);
counter_box2.textContent = backgroundNum.slice(1, 2);
counter_box3.textContent = backgroundNum.slice(2, 3);
counter_box4.textContent = backgroundNum.slice(3, 4);

addCounter.textContent = "+" + item.newGoalIncrement;

addCounter.addEventListener("click", () => {
  backgroundNum = Number(backgroundNum) + Number(counter);
  console.log(backgroundNum);
  let backgroundNumStr = backgroundNum.toString().padStart(4, "0");

  counter_box1.textContent = backgroundNumStr.slice(0, 1);
  counter_box2.textContent = backgroundNumStr.slice(1, 2);
  counter_box3.textContent = backgroundNumStr.slice(2, 3);
  counter_box4.textContent = backgroundNumStr.slice(3, 4);
  console.log(backgroundNum);
  progressNum.textContent =
    Math.round((backgroundNum / item.newTargetNum) * 100) + "%";
  progressNum.style.width = `${(backgroundNum / item.newTargetNum) * 100}%`;

  importArray[selectedIndex].currentProgress = backgroundNum;
  localStorage.setItem("goalList", JSON.stringify(importArray));
});

dynamicTitle.textContent = item.newGoalName;
dynamicStartNum.textContent = item.newStartingNum + " " + item.newGoalUnits;
dynamicFinishNum.textContent = item.newTargetNum + " " + item.newGoalUnits;

findTitle.appendChild(dynamicTitle);
findStart.appendChild(dynamicStartNum);
findFinish.appendChild(dynamicFinishNum);

rightArrow.addEventListener("click", () => {
  let newIndex = Number(selectedIndex) + 1;
  if (newIndex >= importArray.length) {
    newIndex = 0;
  }

  localStorage.setItem("selectedIndex", newIndex);
  location.reload();
});

leftArrow.addEventListener("click", () => {
  let newIndex = Number(selectedIndex) - 1;

  if (newIndex < 0) {
    newIndex = importArray.length - 1;
  }

  localStorage.setItem("selectedIndex", newIndex);
  location.reload();
});
