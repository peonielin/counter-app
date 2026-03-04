const goalIDs = ["#goalName","#targetNum","#startingNum","#goalUnits","#goalIncrement"];
const save = document.querySelector(#saveButton);
let i = 0;

let storedGoalVariables = [];
for (let i=0; i<5;i++){
    storedGoalVariables[i] = "stored" + i;
}

let createInputs = goalIDs.map(id => document.querySelector(id));

let allStoredGoalVariables = [];

if(save.addEventListener("click", () =>{

for (let i=0; i<5;i++){
    createInputs[i].addEventListener("input", (e)=>{
        storedGoalVariables[i] = e.target.value;
        allStoredGoalVariables.push(storedGoalVariables);
    });

}

const result = allStoredGoalVariables.map(
  ([goalName, target, starting, unit, increment]) => ([
    { newGoalName: goalName },
    { newTargetNum: Number(target) },
    { newStartingNum: Number(starting) },
    { newGoalUnits: unit },
    { newGoalIncrement: Number(increment) },
  ])
);


}));


``

